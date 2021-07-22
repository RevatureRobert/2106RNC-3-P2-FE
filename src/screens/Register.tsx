import * as React from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { AuthStackParamList } from '../components/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Login from '../../LoginCognito';
import { ISignUpResult } from 'amazon-cognito-identity-js';

type RegisterScreenNavigationProp = StackNavigationProp<
    AuthStackParamList,
    'Register'
>

export default function RegisterScreen() {
    const navigation = useNavigation<RegisterScreenNavigationProp>();
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePass] = React.useState('');
    const [first, onChangeFirst] = React.useState('');
    const [last, onChangeLast] = React.useState('');
    const [dob, onChangeDob] = React.useState('');

    const onTouch = async(e: {preventDefault: () => void}) => {
        e.preventDefault();
        const name = username.split("@")[0]
        Login.createAccount(name, password, username, first, last, dob, "Default profile")
        .then((signUpResult: ISignUpResult) => {
            navigation.navigate('Main');
        }).catch(console.error);
    } 

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.container2}>
                <Text style={styles.header}>Username</Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
                />
                <Text style={styles.header}>First Name</Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeFirst}
                value={first}
                />
                <Text style={styles.header}>Last Name</Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeLast}
                value={last}
                />
                <Text style={styles.header}>Date of Birth</Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeDob}
                value={dob}
                />
                <Text style={styles.header}>Password</Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangePass}
                value={password}
                />
                <View style={styles.container3}>
                    <TouchableOpacity onPress={onTouch}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.login}>I already have an account</Text>
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
        backgroundColor: "#fff",
        borderRadius: 30
    },
    title: {
        alignSelf: "center",
        fontSize: 30,
        padding: 20,
        marginTop: 50
    },
    header: {
        alignSelf: "flex-start",
        fontSize: 20,
        padding: 10
    },
    tinyLogo: {
        width: 50,
        height: 50,
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        alignContent: "center",
        backgroundColor:'#343a40',
        padding: 40
    },
    container2: {
        flex: 1,
        alignContent: "center",
        backgroundColor: '#343a40'
    },
    container3: {
        flexDirection:'row',
        alignSelf: 'center',
        margin: 20,
        borderRadius:30,
        fontSize: 50
    },
    buttonText: {
        paddingHorizontal: 30,
        paddingVertical: 5,
        color: "white",
        fontWeight: 'bold',
        fontSize: 25,
        backgroundColor: "#d64045",
        borderRadius: 20
    },
    login:{
        alignSelf: "center",
        textDecorationLine: "underline",
        fontSize:20
    }
})