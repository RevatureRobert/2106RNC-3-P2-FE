import * as React from 'react';
import { Platform, ScrollView, StyleSheet, TextInput, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { Text, View } from '../components/Themed';
import { AuthStackParamList } from '../components/types';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Login from '../../LoginCognito';
import { ISignUpResult } from 'amazon-cognito-identity-js';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useDispatch, useSelector } from 'react-redux';
import { RootStore } from '../redux/store';
import { setError, signup } from '../redux/actions/Authentication';
import { User } from '../redux/action-types/UserActionTypes';
import axios from 'axios';

type RegisterScreenNavigationProp = StackNavigationProp<
    AuthStackParamList,
    'Register'
>

export default function RegisterScreen() {
    const navigation = useNavigation<RegisterScreenNavigationProp>();
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePass] = React.useState('');
    const [first_name, onChangeFirst] = React.useState('');
    const [last_name, onChangeLast] = React.useState('');

    const {error} = useSelector((state: RootStore) => state.auth);
    const dispatch = useDispatch();

    React.useEffect(() => {
        return () => {
            if(error) {
                dispatch(setError(''));
            }
        }
    }, [error, dispatch]);

    const createAccount = async (username: string, first_name: string, last_name: string, birthday: string) => {
        try {
            await axios.post('https://thesocialjusticewarriors.com/api/home/add', {
            user: {
                userName: username,
                firstName: first_name,
                lastName: last_name,
                birthday: birthday
                }
            });
        } catch (err) {
            console.log(err)
            setError('');
        }
    }


    const onTouch = async(e: GestureResponderEvent) => {
        e.preventDefault();
        const name = username.split("@")[0]
        Login.createAccount(name, password, username, first_name, last_name, convertDate(birthday), "Default profile")
        .then((signUpResult: ISignUpResult) => {
            if(signUpResult) {
                createAccount(name.toLowerCase(), first_name, last_name, convertDate(birthday));
                navigation.navigate('Login');
            } else {
                setError('');
                navigation.navigate('Register');
            }
        }).catch(console.error);



    } 

    const ref1 = React.useRef();
    const ref2 = React.useRef();
    const ref3 = React.useRef();

    const [isPickerShow, setIsPickerShow] = React.useState(false);
    const [birthday, setBirthday] = React.useState(new Date(Date.now()));

    const showPicker = () => {
        setIsPickerShow(true);
    }

    const onChange = (e, val) => {
        if(val) {
            setBirthday(val);
            setIsPickerShow(false);
        } else {
            setBirthday(new Date(Date.now()))
            setIsPickerShow(false);
        }
    }

    function convertDate(date: string | number | Date) {
        function pad(s: string | number) { return (s < 10) ? '0' + s : s; }
        var d = new Date(date)
        return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-');
    }

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Register</Text>
            <View style={styles.container2}>
                <Text style={styles.header}>Email</Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
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
                value={first_name}
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
                value={last_name}
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
                    <View style={{flexDirection:'column'}}>
                    {/* The button that used to trigger the date picker */}
                    {!isPickerShow && (
                        <TouchableOpacity style={styles.btnContainer} onPress={showPicker}>
                            <Text style={styles.buttonText2}>Birthdate</Text>
                        </TouchableOpacity>
                    )}

                    {/* The date picker */}
                    {isPickerShow && (
                        <DateTimePicker
                        value={birthday}
                        mode={'date'}
                        display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                        onChange={onChange}
                        style={styles.datePicker}
                        />
                    )}
                    </View>
                    <View style={{flexDirection:'column'}}>
                        <Text style={styles.input2}>{convertDate(birthday)}</Text>
                    </View>
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
        marginTop: 14,
        padding:15,
        paddingHorizontal: 45,
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 20,
        color: '#000',
        alignSelf:'flex-end',
        flexWrap: 'wrap'
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

