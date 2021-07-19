import React, { useState } from 'react';
import { TextInput, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import PostFlatList from './postFlatlist';

const PostList = (props: any) => {
  /*
    Ideal data object:
      {postId (for unique key and comment query), user display name, post body, any likes/dislikes/etc}
  */
    const DEFAULT = [
        {postId: 'JQWERY', user: 'Tester', body: 'What did you just say about me you little'},
        {postId: 'NOTHNG', user: 'NoPost', body: 'This is test post data for testing data post data.'},
        {postId: 'WORDSS', user: 'Dominic'},
        {postId: 'TESTIN', user: 'Jackson'},
      ]
    const [data, setData] = useState(props.data || DEFAULT);
    const [post, setPost] = useState('');
    let textInput: TextInput | null;

    function handleAdd() {
      // Gets the input from the state hook
      const newPost = post.trim();
      if (newPost != '') {

        // Use of the spread operator here is NECESSARY for live
        //  re-rendering of the flatlist component
        const tempData = [...data];
        tempData.push({postId: 'NEW MESSAGE ID', user: 'This guy', body: newPost});

        // Save function here or below
        setData(tempData);

      }
      // Cleans up the input to prevent double-submission
      if (textInput) {
        textInput.clear();
      }
      setPost('');
    }

    return (
      <View style={styles.container}>
        <TextInput
          // Adding ref here allows us to clear the input upon submission
          ref={input => {textInput = input}}
          style={styles.input}
          multiline={true}
          numberOfLines={6}
          placeholder="Type something in!"
          onChangeText={(post) => setPost(post)}/>
        <TouchableOpacity onPress={handleAdd}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
        {/* Recommendation: data here can pass in postID. That can be used all the way down in
             SinglePost to retrieve all comments using postID as parentID. */}
        <PostFlatList type="post" data={data}/>
      </View>
    );
}

const styles = StyleSheet.create({
  input: {
      fontSize:18,
      maxHeight:800,
      backgroundColor:"#fff",
      padding: 5,
      width:250
  },
  title: {
      alignSelf: "center",
      fontSize: 30,
      padding: 20
  },
  tinyLogo: {
      width:100,
      height:100,
      margin:10,
      marginTop:20
  },
  container: {
      flex: 1,
      alignItems: "flex-start"
  },
  container2: {
      flexDirection: "row",
      padding: 15
  },
  buttonText: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: "white",
      fontWeight: 'bold',
      fontSize: 16,
      backgroundColor: "#d64045",
      borderRadius: 30
    },
  headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      padding: 15
  },
  container3: {
      flexDirection:'row',
      alignSelf: 'flex-end',
      padding: 15
  }
})

export default PostList;