import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import SinglePost from './singlePost';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   maxHeight: 600,
   maxWidth: 500
  },
  item: {
    padding: 10,
    margin: 5,
    fontSize: 18,
    // height: 50, // i commented out the height because the container wasnt growing even if the text did
    backgroundColor: "#fff",
    borderRadius:10,
  },
});

const PostFlatList = (props: any) => {
  const postType = props.type || 'post';
  const postData = props.data;

  return (
    <View style={styles.container}>
      <FlatList
        data={postData}
        renderItem={({item}) =>
          <SinglePost
            type={postType}
            item={item}
            style={styles.item}
          />
        }
        // the first "item" initializes a variable representing every item;
        //  the next determines what the key is.
        keyExtractor={item => item.post_id}
        extraData={props.data}
      />
    </View>
  );
}

export default PostFlatList;