import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// The data object should have each of the below 8 attributes
export default function ProfileScreen(props: any) {
  const [editable, toggleEditing] = useState(false);
  const [buttonText, setButtonText] = useState("Edit");
  const [userData, setUserData] = useState(props.data || {
      Email: "",
      FirstName: "",
      LastName: "",
      BirthDate: "",
      PhoneNumber: "",
      NickName: "",
      PreferredName: "",
      Profile: "",
  });

  const InputField = (props) => {
    return (
        <View style={styles.container}>
            <View style={{margin: 6}}><Text style={{color: "#eee"}}>{props.label}</Text></View>
            <TextInput style={{margin: 5, borderWidth: 1}} {...props} />
        </View>
    );
  };

  const submitHandle = (e: any) => {
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

  return (
    <View style={styles.container}>
      <View style={{flexDirection:"row"}}>
        <InputField style={styles.input} placeholder="Email" label="Email/Username" inText={userData.Email} editable={false} />
      </View>
      <View style={{flexDirection:"row"}}>
        <View style={{flexDirection:"column"}}>
          <Text style={styles.text}>First Name</Text>
          <TextInput style={styles.input2} value={userData.FirstName} placeholder='First Name' editable={editable} onChange={(e) => manageEdits('FirstName', e)} />
        </View>
        <View style={{flexDirection:"column"}}>
          <Text style={styles.text}>Last Name</Text>
          <TextInput style={styles.input2} value={userData.LastName} placeholder='Last Name' editable={editable} onChange={(e) => manageEdits('LastName', e)} />
        </View>
      </View>
      <View style={{flexDirection:"row"}}>
        <View style={{flexDirection:"column"}}>
          <Text style={styles.text}>Birthday</Text>
          <TextInput style={styles.input2} value={userData.BirthDate} placeholder='MM/DD/YYYY' editable={editable} onChange={(e) => manageEdits('BirthDate', e)} />
        </View>
      </View>
      <View style={{flexDirection:"row"}}>
        <View style={{flexDirection:"column"}}>
          <Text style={styles.text}>Phone Number</Text>
          <TextInput style={styles.input2} value={userData.PhoneNumber} placeholder='Phone number' editable={editable} onChange={(e) => manageEdits('PhoneNumber', e)} />
        </View>
      </View>
      <View style={{flexDirection:"row"}}>
        <View style={{flexDirection:"column"}}>
          <Text style={styles.text}>Nickname</Text>
          <TextInput style={styles.input2} value={userData.NickName} placeholder='Nickname' editable={editable} onChange={(e) => manageEdits('NickName', e)} />
        </View>
      </View>
      <View style={{flexDirection:"row"}}>
        <View style={{flexDirection:"column"}}>
          <Text style={styles.text}>Preferred Name</Text>
          <TextInput style={styles.input2} value={userData.PreferredName} placeholder='Preferred Name' editable={editable} onChange={(e) => manageEdits('PreferredName', e)} />
        </View>
      </View>
      <View style={{flexDirection:"row"}}>
        <View style={{flexDirection:"column"}}>
          <Text style={styles.text}>Profile</Text>
          <TextInput style={styles.input2} multiline={true} numberOfLines={3} value={userData.Profile} placeholder='Write something about you!' editable={editable} onChange={(e) => manageEdits('Profile', e)} />
        </View>
      </View>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={submitHandle}>
          <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:"#343a40",
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
      paddingHorizontal:30
    },
    buttonText: {
      paddingHorizontal:10,
      paddingVertical:5,
      textAlign:"center",
      margin: 10,
      color: "white",
      fontWeight: 'bold',
      fontSize:20,
      backgroundColor: "#d64045",
      borderRadius: 10
    },
    text: {
        color: "#fff",
        textAlign:"center",
        alignSelf:"center",
        paddingVertical:2
    }
  });
  