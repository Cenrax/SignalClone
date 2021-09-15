import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import { AntDesign, Feather, Ionicons, MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons';

const MessageInput = () =>{
    const [message, setMessage] = useState('');
    const sendMessage = () => {
        console.warn("sending :", message);
        setMessage('');
    }

    const onPlusClicked = () => {
        console.warn("On Plus Clicked")
    }
    const onPress = () => {
        if (message){
            sendMessage();
        } else{
            onPlusClicked();
        }
    }
    return (
        <View style={styles.root}>
            <View style = {styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color="grey" style = {styles.icon} />
                <TextInput 
                    style = {styles.input}
                    value = {message}
                    onChangeText ={(newMessage) => setMessage(newMessage)}
                    placeholder="Enter Your Message here..."
                />
                <Feather name="camera" size={24} color="#595959" />
                <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" />
            </View>
            <Pressable onPress={onPress} style = {styles.buttonContainer}>
                {message ? <Ionicons name="send" size={18} color="white" /> : <AntDesign name="plus" size={24} color="white" />}
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    root:{
        flexDirection: 'row'
    },
    inputContainer:{
        backgroundColor: '#F2F2F2',
        flex:1,
        flexDirection: 'row',
        marginRight:10,
        borderRadius:25,
        borderWidth:1,
        borderColor:'#DEDEDE',
        alignItems: 'center',
        padding:5
    },
    buttonContainer:{
        width:40,
        height:40,
        backgroundColor: 'blue',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 5
    },
    input:{
        flex:1,
        marginHorizontal: 5
    },
    icon:{
        marginHorizontal: 5
    },
    buttonText:{
        color: "white",
        fontSize: 35

    }
})
export default MessageInput;