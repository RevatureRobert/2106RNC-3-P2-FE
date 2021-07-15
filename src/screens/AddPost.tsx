import React, { useState } from 'react';
import { StyleSheet, TextInput, Image, NativeSyntheticEvent, TextInputChangeEventData, Button } from 'react-native';
import { Text, View } from '../components/Themed';
import LoginCognito from '../../LoginCognito';
import { CognitoUser } from 'amazon-cognito-identity-js';

export default function LoginScreen() {
    const [text, onChangeText] = useState('');

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require("../assets/images/logo.png")}
            />
            <View style={styles.container2}>
                <Text style={styles.title}>Write a Post</Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                />
                <Button
                    title="POST"
                    color="#d64045"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingTop: 50,
        height: 50,
        borderWidth:2
    },
    title: {
        alignSelf: "center",
        fontSize: 30,
        padding: 20
    },
    tinyLogo: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        padding: 50,
        margin: 20
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
    }
})