import * as React from 'react';
import { StyleSheet, TextInput, Image } from 'react-native';
import { Text, View } from '../components/Themed';

export default function RegisterScreen() {
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePass] = React.useState('');

    return (
        <View style={styles.container}>
            <Image
                style={styles.tinyLogo}
                source={require("../assets/images/logo.png")}
            />
            <View style={styles.container2}>
                <Text style={styles.title}>Username</Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangeUsername}
                value={username}
                />
                <Text style={styles.title}>Password</Text>
                <TextInput
                style={styles.input}
                onChangeText={onChangePass}
                value={password}
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
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        alignContent: "center",
        paddingBottom: 50,
        backgroundColor:'#f1ecce'
    },
    container2: {
        flex: 1,
        alignContent: "center",
        padding: 50,
        backgroundColor: '#f1ecce'
    }
})