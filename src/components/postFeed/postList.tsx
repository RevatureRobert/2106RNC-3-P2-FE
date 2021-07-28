import React, { useState } from 'react';
import { TextInput, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Text, View } from '../Themed';
import PostFlatList from './postFlatlist';

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
    
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState(DEFAULT);
    const user = props.user || 'DefaultUser@email.com';
    const [post, setPost] = useState('');
    const [buttonText, setButtonText] = useState('Wave')
    let textInput: TextInput | null;

    var getData: any;

    if (isLoading) {
      axios(getConfig)
        .then(function (response: any) {
          const resString = JSON.stringify(response.data.posts.Items);
          getData = JSON.parse(resString);
          console.log(getData);
          setLoading(false);
          setData(getData);
        })
        .catch(function (error: any) {
          console.log(error);
        });
    }

    const sendPost = async (newPost: string) => {
      try {
        await axios.post("http://localhost:3001/api/home/post/addpost", {
        socialPosts:{
              userName: user,
              postText: newPost,
            },
          }
        );
        // routeChange();
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

      if (newPost != '') {

        // Use of the spread operator here is NECESSARY for live
        //  re-rendering of the flatlist component
        // const tempData = [...data];


        // const postData = {
        //   socialPosts: {
        //     postText: newPost,
        //     userName: user
        //   }
        // };

        // var postConfig = {
        //   method: 'post',
        //   url: 'https://zony09cx2d.execute-api.us-east-1.amazonaws.com/dev/api/home/post/addpost',
        //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        //   data : postData
        // };

        sendPost(newPost);

        // axios(postConfig)
        //   .then(function (response: any) {
        //     console.log(JSON.stringify(response.data));
        //     setLoading(true);
        //   })
        //   .catch(function (error: any) {
        //     console.log(error);
        //   });
        
        /*Deprecated* - used when post data was hardcoded, for testing purposes*/
        // Herein is the data saved for a visible update
        // tempData.unshift({postId: 'NEW MESSAGE ID', user: user, body: newPost});

        // Save function here or below
        // setData(tempData);
        // *Deprecated*/
      }
    }

    if (isLoading) {
      return (
  
       <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  
          <ActivityIndicator size="large" />
  
        </View>
        
      );
  
    }

    return (
      <View style={styles.container}>
        <TextInput
          // Adding ref here allows us to clear the input upon submission
          ref={input => {textInput = input}}
          style={styles.input}
          multiline={true}
          numberOfLines={6}
          placeholder={`Type something in, ${user}!"`}
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
  container: {
      flex: 1,
      alignItems: "center",
      padding: 20
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