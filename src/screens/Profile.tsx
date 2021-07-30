import { Auth } from 'aws-amplify';
import React, { useRef, useState } from 'react';
import { GestureResponderEvent, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import login from '../../LoginCognito';
import { RootStore } from '../redux/store';


// The data object should have each of the below 8 attributes
export default function ProfileScreen() {
  const currentUser = useSelector((state: RootStore) => state.auth.user);
  console.log(currentUser);

  const [editable, toggleEditing] = useState(false);
  const [buttonText, setButtonText] = useState("Edit");
  const [userData, setUserData] = useState({
      Email: currentUser?.userName,
      FirstName: currentUser?.firstName,
      LastName: currentUser?.lastName,
      BirthDate: currentUser?.birthDate,
      PhoneNumber: currentUser?.phoneNumber,
      NickName: currentUser?.nickName,
      PreferredName: currentUser?.publicName,
      Profile: currentUser?.profile,
  });


  const submitHandle = (e: GestureResponderEvent) => {
    e.preventDefault();
    toggleEditing(() => {return !editable});
    if (!editable) {
      setButtonText("Save");
    } else {
      setButtonText("Edit");
      // Here's where you can properly save edited data
      Auth.currentCredentials();
      Auth.updateUserAttributes(currentUser, {
        'firstName': userData.FirstName,
        'lastName': userData.LastName,
        'birthDate': userData.BirthDate,
        'nickName': userData.NickName,
        'publicName': userData.PreferredName,
        'profile': userData.Profile
      });
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
            >{userData.Email}</TextInput>
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>First Name</Text>
            <TextInput 
            style={styles.input}
            value={userData.FirstName} 
            placeholder={userData.FirstName}
            editable={editable} 
            onChange={(e) => manageEdits('FirstName', e)}
            autoFocus={true}
            onSubmitEditing={() => ref1.current.focus()}
            returnKeyType='next' 
            />
          </View>

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>Last Name</Text>
            <TextInput 
            style={styles.input}
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
        
          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>Birthday</Text>
            <TextInput 
            style={styles.input}
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

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>Phone Number</Text>
            <TextInput 
            style={styles.input}
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

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>Nickname</Text>
            <TextInput 
            style={styles.input}
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

          <View style={{flexDirection:'row'}}>
            <Text style={styles.header}>Preferred Name</Text>
            <TextInput 
            style={styles.input}
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

            <View style={{flexDirection:'row'}}>
              <Text style={styles.header}>Profile</Text>
              <TextInput 
              style={styles.input}
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
  