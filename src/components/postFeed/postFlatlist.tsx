import React from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import SinglePost from './singlePost';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22,
   maxHeight: 200,
   maxWidth: 500,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
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
        keyExtractor={item => item.postId}
        extraData={props.data}
      />
    </View>
  );
}

export default PostFlatList;