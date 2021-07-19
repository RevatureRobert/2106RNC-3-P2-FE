import React, { useState } from 'react';
import { StyleSheet, TextInput, Image, Button, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import LoginCognito from '../../LoginCognito';
import { CognitoUser } from 'amazon-cognito-identity-js';
import { DarkTheme, useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

export default function AddPostScreen() {
    const [post, setPost] = useState('');

    const navigation = useNavigation();

    function buttonClickListener(){
        alert("Clicked");
    }

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="close" size={30} color="#fff" />
                </TouchableOpacity>
            </View>

            <View style={styles.container2}>
                <Image
                    style={styles.tinyLogo}
                    source={require("../assets/images/blankprofpic.png")}
                />
                <TextInput
                style={styles.input}
                value={post}
                onChangeText={(value) => setPost(value)}
                multiline={true}
                numberOfLines={6}
                />
            </View>

            <View style={styles.container3}>
                <TouchableOpacity>
                    <Text style={styles.buttonText}>Post</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
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