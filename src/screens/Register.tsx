import * as React from 'react';
import { Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { AuthStackParamList } from '../components/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Login from '../../LoginCognito';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import DateTimePicker from '@react-native-community/datetimepicker';

type RegisterScreenNavigationProp = StackNavigationProp<
    AuthStackParamList,
    'Register'
>

export default function RegisterScreen(this: any) {
    const navigation = useNavigation<RegisterScreenNavigationProp>();
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePass] = React.useState('');
    const [first, onChangeFirst] = React.useState('');
    const [last, onChangeLast] = React.useState('');

    const onTouch = async(e: {preventDefault: () => void}) => {
        // e.preventDefault();
        // const name = username.split("@")[0]
        // Login.createAccount(name, password, username, first, last, dob, "Default profile")
        // .then((signUpResult: ISignUpResult) => {
        //     navigation.navigate('Main');
        // }).catch(console.error);
    } 

    const ref1 = React.useRef();
    const ref2 = React.useRef();
    const ref3 = React.useRef();

    const [isPickerShow, setIsPickerShow] = React.useState(false);
    const [date, setDate] = React.useState(new Date(Date.now()));

    const showPicker = () => {
        setIsPickerShow(true);
    }

    const onChange = (e, val) => {
        setDate(val);
        if(Platform.OS === 'android') {
            setIsPickerShow(false);
        }
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.container2}>
                <Text style={styles.header}>Username</Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
                textContentType='username'
                autoCompleteType='email'
                keyboardType='email-address'
                returnKeyType='next'
                clearButtonMode='while-editing'
                autoFocus={true}
                onSubmitEditing={() => ref1.current.focus()}
                />
                <Text style={styles.header}>First Name</Text>
                <TextInput
                ref={ref1}
                style={styles.input}
                onChangeText={onChangeFirst}
                value={first}
                textContentType='givenName'
                autoCompleteType='name'
                returnKeyType='next'
                clearButtonMode='while-editing'
                autoFocus={true}
                onSubmitEditing={() => ref2.current.focus()}
                />
                <Text style={styles.header}>Last Name</Text>
                <TextInput
                ref={ref2}
                style={styles.input}
                onChangeText={onChangeLast}
                value={last}
                textContentType='familyName'
                autoCompleteType='name'
                returnKeyType='next'
                clearButtonMode='while-editing'
                autoFocus={true}
                onSubmitEditing={() => ref3.current.focus()}
                />
                <Text style={styles.header}>Password</Text>
                <TextInput
                ref={ref3}
                style={styles.input}
                onChangeText={onChangePass}
                value={password}
                secureTextEntry={true}
                returnKeyType='done'
                clearButtonMode='while-editing'
                autoFocus={true}
                />
                <View style={{flexDirection: 'row'}}>
                    {/* The button that used to trigger the date picker */}
                    {!isPickerShow && (
                        <TouchableOpacity style={styles.btnContainer} onPress={showPicker}>
                            <Text style={styles.buttonText2}>Birthdate</Text>
                        </TouchableOpacity>
                    )}

                    {/* The date picker */}
                    {isPickerShow && (
                        <DateTimePicker
                        value={date}
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onChange}
                        style={styles.datePicker}
                        />
                    )}
                    <Text style={styles.input2}>{date.toDateString()}</Text>
                </View>
                <View style={styles.container3}>
                    <TouchableOpacity onPress={onTouch}>
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.login}>I already have an account</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    input: {
        paddingHorizontal: 10,
        height: 50,
        borderWidth:2,
        backgroundColor: "#fff",
        borderRadius: 20,
        color: '#000'
    },
    input2: {
        marginStart:5,
        marginTop: 10,
        padding: 15,
        paddingHorizontal:30,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 20,
        color: '#000',
        alignSelf:'flex-end'
    },
    title: {
        alignSelf: "center",
        fontSize: 30
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
    },
    btnContainer:{
        alignSelf:'flex-start',
        marginTop: 15,
    },
    buttonText2: {
        paddingHorizontal: 25,
        paddingVertical: 10,
        color: "#1d3354",
        fontSize: 20,
        backgroundColor: "#9fc2cc",
        borderRadius: 20,
        height:50
    },
    // This only works on iOS
    datePicker: {
        width: 320,
        height: 260,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
})
