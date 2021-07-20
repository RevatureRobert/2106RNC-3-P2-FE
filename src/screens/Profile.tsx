import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';

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

  const InputField = (props: any) => {
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
        <View style={styles.outerForm}>
              <View style={{flexDirection: "row"}}>
                  <InputField style={styles.input} placeholder="Email" label="Email/Username" inText={userData.Email} editable={false} />
              </View>
              <View style={{flexDirection: "row"}}>
              <View style={styles.container}>
                    <View style={{margin: 6}}><Text style={{color: "#eee"}}>First Name</Text></View>
                    <TextInput style={{margin: 5, borderWidth: 1, backgroundColor:"#fff", borderRadius: 10, paddingHorizontal:30}} value={userData.FirstName} placeholder='First Name' editable={editable} onChange={(e) => manageEdits('FirstName', e)} />
                  </View>
                  <View style={styles.container}>
                    <View style={{margin: 6}}><Text style={{color: "#eee"}}>Last Name</Text></View>
                    <TextInput style={{margin: 5, borderWidth: 1, backgroundColor:"#fff", borderRadius: 10, paddingHorizontal:30}} value={userData.LastName} placeholder='Last Name' editable={editable} onChange={(e) => manageEdits('LastName', e)} />
                  </View>
              </View>
              <View style={styles.container}>
                <View style={{margin: 6}}><Text style={{color: "#eee"}}>Birthday</Text></View>
                <TextInput style={{margin: 5, borderWidth: 1, backgroundColor:"#fff", borderRadius: 10, paddingHorizontal:30}} value={userData.BirthDate} placeholder='MM/DD/YYYY' editable={editable} onChange={(e) => manageEdits('BirthDate', e)} />
              </View>
              <View style={styles.container}>
                <View style={{margin: 6}}><Text style={{color: "#eee"}}>Phone Number</Text></View>
                <TextInput style={{margin: 5, borderWidth: 1, backgroundColor:"#fff", borderRadius: 10, paddingHorizontal:30}} value={userData.PhoneNumber} placeholder='Phone number' editable={editable} onChange={(e) => manageEdits('PhoneNumber', e)} />
              </View>
              <View style={styles.container}>
                <View style={{margin: 6}}><Text style={{color: "#eee"}}>Nickname</Text></View>
                <TextInput style={{margin: 5, borderWidth: 1, backgroundColor:"#fff", borderRadius: 10, paddingHorizontal:30}} value={userData.NickName} placeholder='Nickname' editable={editable} onChange={(e) => manageEdits('NickName', e)} />
              </View>
              <View style={styles.container}>
                <View style={{margin: 6}}><Text style={{color: "#eee"}}>Preferred Name</Text></View>
                <TextInput style={{margin: 5, borderWidth: 1, backgroundColor:"#fff", borderRadius: 10, paddingHorizontal:30}} value={userData.PreferredName} placeholder='Preferred Name' editable={editable} onChange={(e) => manageEdits('PreferredName', e)} />
              </View>
              <View style={styles.container}>
                <View style={{margin: 6}}><Text style={{color: "#eee"}}>Profile</Text></View>
                <TextInput style={{margin: 5, borderWidth: 1, backgroundColor:"#fff", borderRadius: 10, paddingHorizontal:30}} multiline={true} numberOfLines={3} value={userData.Profile} placeholder='Write something about you!' editable={editable} onChange={(e) => manageEdits('Profile', e)} />
              </View>
              <View>
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
      borderRadius:20
    },
    outerForm: {
      flexDirection: "column",
      height: 700,
      width: 400,
      padding: 20,
      backgroundColor: "#343a40",
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
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: "hidden"
    },
    image: {
        flex: 1,
        height: undefined,
        width: undefined
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    text: {
        color: "#f1ecce"
    },
    input: {
      backgroundColor:"#fff",
      borderRadius: 10,
      paddingHorizontal:50
    }
  });
  