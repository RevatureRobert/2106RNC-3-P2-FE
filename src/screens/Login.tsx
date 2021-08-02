import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, ScrollView, GestureResponderEvent } from 'react-native';
import { Text, View } from '../components/Themed';
import { AuthStackParamList } from '../components/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../redux/store';
import { login, setError } from '../redux/actions/Authentication';

type LoginScreenNavigationProp = StackNavigationProp<
    AuthStackParamList,
    'Login'
>

export default function LoginScreen() {
    const navigation = useNavigation<LoginScreenNavigationProp>();
    const [username, onChangeUsername] = useState('');
    const [password, onChangePass] = useState('');

    const { error } = useSelector((state: RootStore) => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            if (error) {
                dispatch(setError(''));
            }
            onChangeUsername('');
            onChangePass('');
        }
    }, [error, dispatch]);

    const onTouch = async(e: GestureResponderEvent) => {
        e.preventDefault();
        dispatch(login({ username, password }));
    }

    const ref1 = useRef();
    
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Sign in to your account</Text>
            <View style={styles.container2}>
                <Text style={styles.title}>Username</Text>
                <TextInput
                style={styles.input}
                onChangeText={(text: string) => onChangeUsername(text)}
                value={username}
                textContentType='username'
                returnKeyType='next'
                autoCompleteType='email'
                clearButtonMode='while-editing'
                keyboardType='email-address'
                autoFocus={true}
                onSubmitEditing={() => ref1.current.focus()}
                />
                <Text style={styles.title}>Password</Text>
                <TextInput
                style={styles.input}
                onChangeText={(text: string) => onChangePass(text)}
                value={password}
                secureTextEntry={true}
                autoCompleteType='password'
                textContentType='password'
                clearButtonMode='while-editing'
                returnKeyType='done'
                ref={ref1}
                autoFocus={true}
                />
            <View style={styles.container3}>
                <TouchableOpacity onPress={onTouch}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.register}>I don't have an account.</Text>
            </TouchableOpacity>
            </View>
        </ScrollView>
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
    header: {
        textAlign: "center",
        fontSize: 25,
        paddingVertical:20
    },
    title: {
        alignSelf: "center",
        fontSize: 30,
        padding: 10
    },
    tinyLogo: {
        height:100,
        width:100,
        alignSelf: "center",
        padding: 5,
        marginTop: 20,
        marginBottom:10
    },
    container: {
        flex: 1,
        alignContent: "center",
        padding: 20,
        backgroundColor:"#343a40",
        paddingTop: 100
    },
    container2: {
        flex: 1,
        alignContent: "center",
        paddingTop: 20
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
