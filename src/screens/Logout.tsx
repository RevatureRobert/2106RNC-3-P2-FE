import React, { useState } from 'react';
import { StyleSheet, TextInput, Image, NativeSyntheticEvent, TextInputChangeEventData, Button, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import LoginCognito from '../../LoginCognito';
import { CognitoUser } from 'amazon-cognito-identity-js';


export default function LogoutScreen() {
    // const onTouch = async(e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    //     e.preventDefault();
    //     LoginCognito.login(username, password, false)
    //         .then((signUpResult: CognitoUser) => {
    //             //redirect to home
    //         }).catch(console.error)
    // }

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require("../assets/images/logo.png")}
            />
            <View style={styles.container2}>
                <Text style={styles.title}>Are you sure you want to leave?</Text>
                <TouchableOpacity style={styles.container3}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.container3}>
                    <Text style={styles.cancel}>I don't want to leave!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingTop: 50,
        height: 50,
        borderWidth:2,
        backgroundColor:"#fff"
    },
    title: {
        alignSelf: "center",
        fontSize: 30,
        padding: 20,
        textAlign: "center"
    },
    tinyLogo: {
        width: 50,
        height: 50,
        alignSelf: "center",
        padding: 50,
        margin: 20,
        marginTop: 60
    },
    container: {
        flex: 1,
        alignContent: "center",
        paddingBottom: 50,
    },
    container2: {
        flex: 1,
        alignContent: "center",
        padding: 50
    },
    container3: {
        flexDirection:'row',
        alignSelf: 'center',
        padding: 50,
        borderRadius:30,
        fontSize: 50
    },
    buttonText: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        color: "white",
        fontWeight: 'bold',
        fontSize: 20,
        backgroundColor: "#d64045",
        borderRadius: 20
    },
    cancel: {
        alignSelf: "center",
        textDecorationLine: "underline",
        fontSize: 20
    },
})