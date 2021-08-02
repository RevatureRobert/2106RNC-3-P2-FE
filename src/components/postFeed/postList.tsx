import React, { useState } from 'react';
import { TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text, View } from '../Themed';
import PostFlatList from './postFlatlist';
import login from "../../../LoginCognito";
import { useSelector } from 'react-redux';
import { RootStore } from '../../redux/store';
import { Auth } from 'aws-amplify';

var axios = require('axios');

var getConfig = {
  method: 'get',
  url: 'https://zony09cx2d.execute-api.us-east-1.amazonaws.com/dev/api/home/post/getall',
  headers: { }
};

const PostList = (props: any) => {
  /*
    Ideal data object:
      {post_id (for unique key and comment query), user display name, post body, any likes/dislikes/etc}
  */
    const DEFAULT = [
        {post_id: 'JQWERY', username: 'Tester', post_text: 'What did you just say about me you little'},
        {post_id: 'NOTHNG', username: 'NoPost', post_text: 'This is test post data for testing data post data.'},
        {post_id: 'WORDSS', username: 'Dominic'},
        {post_id: 'TESTIN', username: 'Jackson'},
      ]

    const currentUser = useSelector((state: RootStore) => state.auth.user);

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(DEFAULT);
    const [user, setUser] = useState(currentUser?.userName);
    const [post, setPost] = useState('');
    const [buttonText, setButtonText] = useState('Wave')
    let textInput: TextInput | null;

    var getData: any;

    if (isLoading) {
      axios(getConfig)
        .then(function (response: any) {
          const resString = JSON.stringify(response.data.posts.Items);
          getData = JSON.parse(resString);
          //console.log(getData);
          setLoading(false);
          setData(getData);
        })
        .catch(function (error: any) {
          console.log(error);
        });
    }

    
    const sendPost = async (newPost: string) => {
      if(newPost === ""){
        newPost = "SQUAWWWWWKKKKKKKKKKKK!!!!!!!!"
      }
      try {
        // const x = String(await login.getUserName());
        // console.log(x, newPost);
        await axios.post("https://zony09cx2d.execute-api.us-east-1.amazonaws.com/dev/api/home/post/addpost", {
        socialPosts:{
              userName: user,
              postText: newPost,
            },
          }
        );
        setLoading(true);
      } catch (err) {
        console.log(err);
      }
    };

    function handleAdd() {
      // Gets the input from the state hook
      const newPost = post.trim();
      // Cleans up the input to prevent double-submission
      if (textInput) {
        textInput.clear();
      }
      setPost('');
      setButtonText('Wave');
      sendPost(newPost);
    }

    if (isLoading) {
      return (
  
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  
          <ActivityIndicator size="large" />
  
        </View>
        
      );
  
    }
    return (
      <View>
        <TextInput
          // Adding ref here allows us to clear the input upon submission
          ref={input => {textInput = input}}
          style={styles.input}
          multiline={true}
          numberOfLines={6}
          placeholder={`Type something in, ${user}!`}
          onChangeText={(post) => {
            if (post.trim() != '') {
              setButtonText('Post')
            } else {
              setButtonText('Wave')
            }
            setPost(post)
            }}/>
        <TouchableOpacity style={styles.button} onPress={handleAdd}>
          <Text style={styles.buttonText}>{buttonText}</Text>
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
      margin:10,
      padding: 5,
      width: 350,
      borderRadius:10
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
  container2: {
      flexDirection: "row",
      padding: 15
  },
  buttonText: {
      paddingHorizontal: 40,
      paddingVertical: 10,
      color: "white",
      fontWeight: 'bold',
      fontSize: 16,
      backgroundColor: "#d64045",
      borderRadius: 20
    },
  button: {
      alignSelf: "flex-end"
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