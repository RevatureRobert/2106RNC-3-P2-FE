import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, FlatList, Image } from 'react-native';
import { Text, View } from '../components/Themed';
import PostList from '../components/postFeed/postList';

export default function PostFeedScreen() { 


  return (
    <View style={styles.container}>
      <PostList />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    padding: 10
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    backgroundColor: '#d3d3d3',
    padding: 20,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    alignSelf: 'flex-start',
    padding: 20
},
});
