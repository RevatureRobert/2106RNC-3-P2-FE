import React, { useRef, useState } from 'react';
import { GestureResponderEvent, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootStore } from '../redux/store';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

// The data object should have each of the below 8 attributes
export default function ProfileScreen() {
  const navigation = useNavigation();
  const currentUser = useSelector((state: RootStore) => state.auth.user);

  const [editable, toggleEditing] = useState(false);
  const [buttonText, setButtonText] = useState("Edit");
  const [username, setUsername] = useState(currentUser?.userName);
  //for the axios get function
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phone, setPhone] = useState('');
  const [preferred, setPreferred] = useState('');
  const [profile, setProfile] = useState('');

  //for the axios put function
  const [newUsername, setNewUsername] = useState(username) 
  const [newFirst, setNewFirst] = useState(first);
  const [newLast , setNewLast] = useState(last);
  const [newBirthday, setNewBirthday] = useState(birthday);
  const [newPhone, setNewPhone] = useState(phone);
  const [newPreferred, setNewPreferred] = useState(preferred);
  const [newProfile, setNewProfile] = useState(profile);

  //get the currentUser's info
  const currentUserData = axios({
    method: 'GET',
    url: 'https://thesocialjusticewarriors.com/api/home/all'}).then((res) => {
      //gets an array of users    
      const users = res.data.users.Items;
      for(let key of users) {
        if(key.username.toLowerCase().includes(currentUser?.userName)){
          setNewUsername(key.username);
          setFirst(key.first_name);
          setLast(key.last_name);
          setBirthday(key.birthday);
          setPhone(key.phone_number);
          setPreferred(key.public_name);
          setProfile(key.profile);
        }
      }
    }).catch((err) => {
      console.log(err);
  });
  
  const updateUser = async(
    username: string, 
    first:string, 
    last:string,
    birthday: string, 
    phone: string,
    preferred: string,
    profile: string
  ) => {
    try {
     await axios.put('https://thesocialjusticewarriors.com/api/home/update', {
      user: {
        userName: username,
        first_name: first,
        last_name: last,
        phone_number: phone,
        public_name: preferred,
        birthday: birthday,
        profile: profile
      }
    });
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandle = (e: GestureResponderEvent) => {
    e.preventDefault();
    toggleEditing(() => {return !editable});
    if (!editable) {
      setButtonText("Save");
    } else {
      setButtonText("Edit");
      // Here's where you can properly save edited data
      updateUser(
        newUsername,
        newFirst,
        newLast,
        newBirthday,
        newPhone,
        newPreferred,
        newProfile
      )
      navigation.navigate('Main');
      //console.log(userData);
    }
  }
  
  //to automatically move to the next line after hitting enter
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();

  return (
    <ScrollView style={styles.container}>
        <View style={styles.container2}>
            <Image
              style={styles.logo}
              source={require("../assets/images/blankprofpic.png")}
            />

           <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>Email</Text>
            <TextInput             
            style={{
              flex:1,
              height: 50,
              borderWidth:2,
              backgroundColor: "#9fc2cc",
              borderRadius: 20,
              color: '#000',
              paddingHorizontal:15
            }}  
            editable={false}
            >{newUsername}</TextInput>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>First Name</Text>
            <TextInput 
            style={styles.input} 
            editable={editable} 
            value={newFirst}
            onChangeText={(e:string) => setNewFirst(e)}
            autoFocus={true}
            onSubmitEditing={() => ref1.current.focus()}
            returnKeyType='next'>{newFirst}</TextInput>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>Last Name</Text>
            <TextInput 
            style={styles.input}
            value={newLast} 
            editable={editable} 
            onChangeText={(e: string) => setNewLast(e)}
            ref={ref1}
            autoFocus={true}
            onSubmitEditing={() => ref2.current.focus()}
            returnKeyType='next' 
            >{newLast}</TextInput>
          </View>  
        
          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>Birthday</Text>
            <TextInput 
            style={styles.input}
            value={newBirthday} 
            editable={editable} 
            onChangeText={(e: string) => setNewBirthday(e)}
            ref={ref2}
            autoFocus={true}
            onSubmitEditing={() => ref3.current.focus()} 
            returnKeyType='next' 
            >{newBirthday}</TextInput>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>Phone Number</Text>
            <TextInput 
            style={styles.input}
            value={newPhone} 
            editable={editable} 
            onChangeText={(e:string) => setNewPhone(e)}
            ref={ref3}
            autoFocus={true}
            onSubmitEditing={() => ref4.current.focus()}
            returnKeyType='next'    
            >{newPhone}</TextInput>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>Preferred Name</Text>
            <TextInput 
            style={styles.input}
            value={newPreferred} 
            placeholder={preferred}
            editable={editable} 
            onChangeText={(e:string) => setNewPreferred(e)} 
            ref={ref4}
            autoFocus={true}
            onSubmitEditing={() => ref5.current.focus()}
            returnKeyType='next' 
            >{newPreferred}</TextInput>
          </View>

            <View style={{flexDirection:'row'}}>
              <Text style={styles.header}>Profile</Text>
              <TextInput 
              style={styles.input2}
              multiline={true} 
              numberOfLines={3} 
              value={newProfile} 
              editable={editable} 
              onChangeText={(e:string) => setNewProfile(e)}
              ref={ref5}
              autoFocus={true}
              returnKeyType='done'
              >{newProfile}</TextInput>
            </View>
        </View>
        <View style={styles.container3}>
            <TouchableOpacity onPress={submitHandle}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    input: {
        flex: 1,
        paddingHorizontal: 15,
        height: 50,
        borderWidth:2,
        backgroundColor: "#fff",
        borderRadius: 20,
        color: '#000'
    },
    input2: {
      flex: 1,
      paddingHorizontal: 15,
      height: 80,
      borderWidth:2,
      backgroundColor: "#fff",
      borderRadius: 20,
      color: '#000'
  },
    header: {
        alignSelf: "flex-start",
        fontSize: 20,
        padding: 10,
        color: '#fff'
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
    btnContainer:{
        alignSelf:'flex-start',
        marginTop: 15,
    },
    logo: {
      alignSelf: "center",
      padding: 10, 
      width:70,
      height:70,
      backgroundColor: "#fff",
      borderRadius: 40,
      margin:20
    },
  });
