import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function ProfileScreen() {
    return (
      <View style={styles.container}>
          <View style={{alignSelf: 'center'}}>
              <View style={styles.profileImage}>
                  <Image
                  source={require('../assets/images/logo.png')} 
                  style={styles.image}
                  resizeMode='center'
                  />
              </View>
          </View>

          <View style={styles.infoContainer}>
              <Text style={styles.text}>Some Public Name</Text>
              <Text style={styles.text}>Some Bio thing like hello</Text>
              <Text style={styles.text}>Birthdate?</Text>
          </View>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#343a40"
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    text: {
        color: "#f1ecce"
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    }
  });
  