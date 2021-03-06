import React from 'react';
import { View, Image, Text , StyleSheet, Pressable} from 'react-native';
import Users from '../../assets/dummy-data/Users';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
export default function ChatRoomItem({chatRoom}:any){
    const userData = chatRoom.users[1];
    const navigation = useNavigation();
    const onPress = () =>{
        navigation.navigate('ChatRoom', {id : chatRoom.id});
    }
    return(
        <Pressable onPress = {onPress} style = {styles.container}>
            <Image source={{uri: userData.imageUri}} style = {styles.image}/>
            
            {chatRoom.newMessages && <View style = {styles.badgeContainer}>
                <Text style = {styles.badgeText}>{chatRoom.newMessages}</Text>
            </View>}


            <View style = {styles.rightContainer}>
                <View style = {styles.row}>
                    <Text style ={styles.name}>{userData.name}</Text>
                    <Text style = {styles.text}>{chatRoom.lastMessage.createdAt} </Text>
                </View>
                <Text numberOfLines={1} style = {styles.text}>
                    {chatRoom.lastMessage.content}
                </Text>
            </View>
        </Pressable>
    );
}
