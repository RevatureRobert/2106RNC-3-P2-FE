import React from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Amplify from "@aws-amplify/core";
// import Storage from "@aws-amplify/storage";
import config from "../../../s3Config";
import { Platform } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Storage } from "aws-amplify";

Amplify.configure({
  Storage: {
    region: config.s3.REGION,
    bucket: config.s3.BUCKET,
    identityPoolId: config.cognito.IDENTITY_POOL_ID,
  },
});

export default class ImageUploadS3 extends React.Component {
  state = {
    image: null,
    allImages: [],
  };

  //************************************************************************************************
  //* get images from S3
  //************************************************************************************************

  // pull all public images from S3
  componentDidMount = async () => {
    await this.fetchImages("images/", { level: "public" }); // path and access level
    this.flatListRef.scrollToOffset({ animated: true, offset: 0 });
  };

  // this just pulls all of the images.
  // TODO refactor to pull only one image
  fetchImages = async (path: string, access: object) => {
    await Storage.list(path, access)
      .then(async (res) => {
        res = res.slice(1);
        const resModified = [].concat(res);
        resModified.sort((a, b) =>
          b["lastModified"].toString().localCompare(a["lastModified"])
        );
        await this.getImagesUri(resModified);
        this.setState({ allImages: resModified });
      })
      .catch((err) => console.log(err));
  };

  getImagesUri = async (data: any) => {
    let count, x;
    let uriArray: any[] = [];
    for (count = 0; count < data.length; count++) {
      x = data[count]["key"];
      await Storage.get(x)
        .then((y) => {
          const shortUri = y.substr(0, 102);
          uriArray.push(y);
        })
        .catch((err) => console.log(err));
      data[count]["uri"] = uriArray[count];
    }
  };

  //************************************************************************************************
  //* Upload Images to S3 and dynamodb
  //************************************************************************************************
  // attempt to upload images to S3
  uploadImageToS3 = async (uri: any) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const folder = "images";
    const fileName = `${Date.now()}-${uri.name}`;
    await Storage.put(folder + "/" + fileName, blob, {
      contentType: "image/jpeg",
      level: "public",
    })
      .then(() => {
        // every time a new image is added, we call all the items again
        this.fetchImages("images/", { level: "public" });
      })
      .catch((err) => console.log(err));
  };

  s3Upload = async(file: any) => {
    const filename = `${Date.now()}-${file.name}`;
    const stored = await Storage.vault.put(filename, file, {
      contentType: file.type,
    });
    console.log(stored.key);
    return stored.key;
  }

  //************************************************************************************************
  //* Permissions ask/check
  //************************************************************************************************

  askPermission = async () => {
    if (Platform.OS !== "web") {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera roll permissions to make this work!");
      } else{
          this.useLibraryHandler();
      }
    }
  };

  useLibraryHandler = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      console.log(result.uri);
    //   this.uploadImageToS3(this.state.image);
      this.s3Upload(this.state.image);
    }
  };

  //************************************************************************************************
  //* delete an image from S3
  //************************************************************************************************
  removeImageFromS3 = async () => {};
  render() {
    let { allImages } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <TouchableOpacity onPress={this.useLibraryHandler}>
            <Ionicons name="md-add-circle" style={styles.buttonStyle} />
          </TouchableOpacity>
          <TouchableOpacity onPress={this.componentDidMount}>
            <Ionicons name="md-refresh" style={styles.buttonStyle} />
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={styles.container}>
          <FlatList
            ref={(ref) => {
              this.flatListRef = ref;
            }}
            data={allImages}
            renderItem={(item) => {
              // format the date by removing unnecessary details
              let uploadDateImage = String(item.item.lastModified).substr(
                0,
                15
              );
              //console.log(item.item.uri)
              return (
                <View>
                  <Image
                    source={{ uri: item.item.uri }}
                    style={styles.imageStyle}
                  />
                  <View style={styles.headerStyle}>
                    <Ionicons
                      name="md-trash"
                      style={{ color: "#004", fontSize: 30 }}
                      onPress={() => {
                        this.removeImageFromS3(item.item.key);
                      }}
                    />
                    <Text style={{ fontSize: 16 }}>{uploadDateImage}</Text>
                  </View>
                </View>
              );
            }}
          />
        </ScrollView>
      </View>
    );
  }
}
let { width } = Dimensions.get('window')

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	headerStyle: {
		flexDirection: 'row', 
		alignItems: 'stretch',
		justifyContent: 'space-between',
		padding: 13
	}, 
	buttonStyle: {
		fontSize: 40,
		color: '#4286f4'
	},
	imageStyle: { 
		width: width, 
		height: width, 
		marginBottom: 12
	}
});