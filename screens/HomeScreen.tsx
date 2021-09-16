import * as React from 'react';
import { StyleSheet, Image, FlatList } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import ChatRooms from '../assets/dummy-data/ChatRooms';

export default function HomeScreen() {
  return (
    <View style = {styles.page}>
      <FlatList data = {ChatRooms} renderItem = {( {item})=> <ChatRoomItem chatRoom={item}/>} ListHeaderComponent={()=> <Text>Messages</Text>} />
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:"white",
    flex: 1
  }
})
