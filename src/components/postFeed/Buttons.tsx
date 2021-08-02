import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { TouchableOpacity, View, Modal, Text, StyleSheet } from "react-native";


export default function Buttons() {
    const [modalVisible, setModalVisible] = useState(false);
    const [text, setText] = useState('');
    
    const onClose = () => {
        setModalVisible(false);
    }

    const onLike = () => {
        setModalVisible(true);
        setText("You've liked this post!");
    }
    
    const onCancel = () => {
        setModalVisible(true);
        setText("You've cancelled this post! Their families, bosses and the police have been contacted. Good Job!!");
    }

    const onComment = () => {
        //place to add a comment extension function
        setModalVisible(true);
        setText("Do you want to add a comment?");
    }

    return(
    <View style={{ flexDirection: 'row', paddingTop: 10}}>
        <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
        setModalVisible(false)
        }}
        >
            <View style={styles.modal}>
                <TouchableOpacity onPress={onClose}>
                    <CloseIcon name='closecircleo' color='#fff' />
                </TouchableOpacity>
                <Text style={styles.text}>{text}</Text>
            </View>
        </Modal>

        <TouchableOpacity onPress={onLike}>
            <LikeIcon name='like1' color='#1d3354'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={onComment}>
            <CommentIcon name='message1' color='#1d3354' />
        </TouchableOpacity>
        <TouchableOpacity onPress={onCancel}>
            <CancelIcon name='cancel' color='#d64045' />
        </TouchableOpacity>        
    </View>
    )
}

function LikeIcon(props: { name: React.ComponentProps<typeof AntDesign>['name']; color: string }) {
    return <AntDesign size={20} style={{marginBottom: -3, margin: 5, paddingRight: 10}} {...props} />;
}

function CancelIcon(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>['name']; color: string }) {
    return <MaterialCommunityIcons size={20} style={{marginBottom: -3, margin: 5}} {...props} />;
}

function CommentIcon(props: { name: React.ComponentProps<typeof AntDesign>['name']; color: string }) {
    return <AntDesign size={20} style={{marginBottom: -3, margin: 5, paddingRight: 10}} {...props} />;
}

function CloseIcon(props: { name: React.ComponentProps<typeof AntDesign>['name']; color: string }) {
    return <AntDesign size={20} style={{marginBottom: -3, padding:2, alignSelf: 'flex-end'}} {...props} />;
}

const styles = StyleSheet.create({
    text:{
        alignSelf: 'center',
        justifyContent:'center',
        color: '#fff',
        paddingHorizontal: 50,
        paddingVertical: 10,
        borderRadius: 20,
        fontWeight: 'bold',
        flexDirection: 'column'
    },
    modal: {
        alignSelf: 'center',
        justifyContent: "center",
        backgroundColor: '#1d3354',
        borderWidth:5,
        borderColor:'#d64045',
        paddingHorizontal: 2.5,
        paddingVertical: 2.5,
        borderRadius: 20,
        marginTop: 350
    }
})