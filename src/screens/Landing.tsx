import React, { useState } from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { 
    StyleSheet, 
    Image, 
    TouchableOpacity
} from 'react-native';
import { Text, View } from '../components/Themed';
import { AuthStackParamList } from '../components/types';

type LandingScreenNavigationProp = StackNavigationProp<
    AuthStackParamList,
    'Landing'
>

const LandingScreen = () => {
    const navigation = useNavigation<LandingScreenNavigationProp>();
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/images/logo_name.png")}
            />
            <View style={styles.container3}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={styles.register}>I don't have an account</Text>
            </TouchableOpacity>
        </View>
    );
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
        alignSelf: "center",
        padding: 150,
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
        fontSize: 25,
        backgroundColor: "#d64045",
        borderRadius: 30
    },
    register:{
        alignSelf: "center",
        textDecorationLine: "underline",
        fontSize: 20
    }
})

export default LandingScreen;

