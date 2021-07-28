import { Auth } from 'aws-amplify';
import React, { useRef, useState } from 'react';
import { GestureResponderEvent, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoginCognito from '../../LoginCognito';
import { RootStore } from '../redux/store';


// The data object should have each of the below 8 attributes
export default function ProfileScreen(props: any) {
  const currentUser = useSelector((state: RootStore) => state.auth.user);
  const [editable, toggleEditing] = useState(false);
  const [buttonText, setButtonText] = useState("Edit");
  const [userData, setUserData] = useState(props.data || {
      Email: currentUser,
      FirstName: "",
      LastName: "",
      BirthDate: "",
      PhoneNumber: "",
      NickName: "",
      PreferredName: "",
      Profile: "",
  });

  const fetchUserData = (text: any, content: any) => {
    //get the current user
    Auth.currentCredentials();
    return

  }

  const submitHandle = (e: GestureResponderEvent) => {
    e.preventDefault();
    toggleEditing(() => {return !editable});
    if (!editable) {
      setButtonText("Save");
    } else {
      setButtonText("Edit");
      // Here's where you can properly save edited data
      console.log(userData);
    }
  }

  const manageEdits = (key: string, e: any) => {
    const target = e.target;
      setUserData({
          ...userData,
          [key]: target.value});
  }
  
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  return (
    <ScrollView style={{backgroundColor: '#343a40'}}>
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/images/blankprofpic.png")}
      />
      <View style={{flexDirection:"row", margin: 10}}>
        <View style={{flexDirection:"column", alignSelf: 'flex-start', justifyContent: 'flex-start' }}>
          <Text style={styles.text}>Email/Username</Text>
        </View>
        <View style={{flexDirection:"column", justifyContent: 'flex-end', marginStart:10 }}>
          <TextInput style={styles.input3} placeholder= 'Email' editable={false}>{userData.email}</TextInput>
        </View>
      </View>

      <View style={{flexDirection:"row", margin: 10 }}>
        <View style={{flexDirection:"column", alignSelf: 'flex-start', justifyContent: 'flex-start' }}>
          <Text style={styles.text}>First Name</Text>
        </View>
        <View style={{flexDirection:"column", justifyContent: 'flex-end', marginStart:10}}>
          <TextInput 
          style={styles.input2} 
          value={userData.FirstName} 
          placeholder='First Name' 
          editable={editable} 
          onChange={(e) => manageEdits('FirstName', e)}
          autoFocus={true}
          onSubmitEditing={() => ref1.current.focus()}
          returnKeyType='next'
          />
        </View>
      </View>

      <View style={{flexDirection:"row", margin: 10 }}>
        <View style={{flexDirection:"column", alignSelf: 'flex-start', justifyContent: 'flex-start'}}>
          <Text style={styles.text}>Last Name</Text>
        </View>
        <View style={{flexDirection:"column", justifyContent: 'flex-end', marginStart:10}}>
          <TextInput 
          style={styles.input2} 
          value={userData.LastName} 
          placeholder='Last Name' 
          editable={editable} 
          onChange={(e) => manageEdits('LastName', e)}
          ref={ref1}
          autoFocus={true}
          onSubmitEditing={() => ref2.current.focus()}
          returnKeyType='next' 
          />
        </View>
      </View>

      <View style={{flexDirection:"row", margin: 10 }}>
        <View style={{flexDirection:"column", alignSelf: 'flex-start', justifyContent: 'flex-start'}}>
          <Text style={styles.text}>Birthday</Text>
        </View>
        <View style={{flexDirection:"column", justifyContent: 'flex-end', marginStart:10}}>
          <TextInput 
          style={styles.input2} 
          value={userData.BirthDate} 
          placeholder='MM/DD/YYYY' 
          editable={editable} 
          onChange={(e) => manageEdits('BirthDate', e)}
          ref={ref2}
          autoFocus={true}
          onSubmitEditing={() => ref3.current.focus()} 
          returnKeyType='next' 
          />
        </View>
      </View>

      <View style={{flexDirection:"row", margin: 10 }}>
        <View style={{flexDirection:"column", alignSelf: 'flex-start', justifyContent: 'flex-start'}}>
          <Text style={styles.text}>Phone Number</Text>
        </View>
        <View style={{flexDirection:"column", justifyContent: 'flex-end', marginStart:10}}>
          <TextInput 
          style={styles.input2} 
          value={userData.PhoneNumber} 
          placeholder='Phone number' 
          editable={editable} 
          onChange={(e) => manageEdits('PhoneNumber', e)}
          ref={ref3}
          autoFocus={true}
          onSubmitEditing={() => ref4.current.focus()}
          returnKeyType='next'         
          />
        </View>
      </View>

      <View style={{flexDirection:"row", margin: 10 }}>
        <View style={{flexDirection:"column", alignSelf: 'flex-start', justifyContent: 'flex-start'}}>
          <Text style={styles.text}>Nickname</Text>
        </View>
        <View style={{flexDirection:"column", justifyContent: 'flex-end', marginStart:10}}>
          <TextInput 
          style={styles.input2} 
          value={userData.NickName} 
          placeholder='Nickname' 
          editable={editable} 
          onChange={(e) => manageEdits('NickName', e)}
          ref={ref4}
          autoFocus={true}
          onSubmitEditing={() => ref5.current.focus()}
          returnKeyType='next'  
          />
        </View>
      </View>

      <View style={{flexDirection:"row", margin: 10 }}>
        <View style={{flexDirection:"column", alignSelf: 'flex-start', justifyContent: 'flex-start'}}>
          <Text style={styles.text}>Preferred Name</Text>
        </View>
        <View style={{flexDirection:"column", justifyContent: 'flex-end', marginStart:10}}>
          <TextInput 
          style={styles.input2} 
          value={userData.PreferredName} 
          placeholder='Preferred Name' 
          editable={editable} 
          onChange={(e) => manageEdits('PreferredName', e)} 
          ref={ref5}
          autoFocus={true}
          onSubmitEditing={() => ref6.current.focus()}
          returnKeyType='next' 
          />
        </View>
      </View>

      <View style={{flexDirection:"row", margin: 10 }}>
        <View style={{flexDirection:"column", alignSelf: 'center', justifyContent: 'flex-start'}}>
          <Text style={styles.text}>Profile</Text>
        </View>
        <View style={{flexDirection:"column", justifyContent: 'flex-end', marginStart:10}}>
          <TextInput 
          style={styles.input2} 
          multiline={true} 
          numberOfLines={3} 
          value={userData.Profile} 
          placeholder='Write something about you!' 
          editable={editable} 
          onChange={(e) => manageEdits('Profile', e)}
          ref={ref6}
          autoFocus={true}
          returnKeyType='done'
          />
        </View>
      </View>

      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={submitHandle}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#343a40",
      padding: 20
    },
    input: {
      backgroundColor:"#fff",
      borderRadius: 10,
      paddingHorizontal:50,
      paddingVertical:2.5
    },
    input2:{
      margin: 5, 
      borderWidth: 1, 
      backgroundColor:"#fff", 
      borderRadius: 10, 
      paddingHorizontal:20,
      maxWidth: 300

    },
    input3:{
      paddingVertical: 2.5,
      backgroundColor:"#9fc2cc", 
      borderRadius: 10, 
      paddingHorizontal:50
    },
    buttonText: {
      paddingHorizontal:20,
      paddingVertical:5,
      textAlign:"center",
      margin: 20,
      color: "white",
      fontWeight: 'bold',
      fontSize:20,
      backgroundColor: "#d64045",
      borderRadius: 30
    },
    text: {
        color: "#fff",
        textAlign:"center",
        alignSelf:"center",
        paddingVertical:2
    },
    logo: {
      alignSelf: "center",
      padding: 10, 
      width:70,
      height:70
    },
  });
  