import React, { useState } from 'react';
import { StyleSheet, TextInput, Image, NativeSyntheticEvent, TextInputChangeEventData, Button, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import LoginCognito from '../../LoginCognito';
import { CognitoUser } from 'amazon-cognito-identity-js';

interface IProps {
    name: string;
}

export default function LandingScreen(props: IProps) {
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
                style={styles.logo}
                source={require("../assets/images/logo_name.png")}
            />
            <View style={styles.container3}>
                <TouchableOpacity onPress={() =>{}}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => {}}>
                    <Text style={styles.register}>I don't have an account</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        padding: 10,
        height: 50,
        borderWidth:2,
        backgroundColor:"#fff",
        borderRadius:20
    },
    title: {
        alignSelf: "center",
        fontSize: 30,
        padding: 20
    },
    logo: {
        width: 50,
        height: 50,
        alignSelf: "center",
        padding: 225,
        marginTop: 150
    },
    container: {
        flex: 1,
        alignContent: "center",
        paddingBottom: 50,
    },
    container3: {
        flexDirection:'row',
        alignSelf: 'center',
        padding: 20,
        borderRadius:30
    },
    buttonText: {
        paddingHorizontal: 30,
        paddingVertical: 10,
        color: "white",
        fontWeight: 'bold',
        fontSize: 16,
        backgroundColor: "#d64045",
        borderRadius: 20
    },
    register:{
        alignSelf: "center",
        textDecorationLine: "underline",
        fontSize: 20
    }
})