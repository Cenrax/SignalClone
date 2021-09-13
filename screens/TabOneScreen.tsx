import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

import ChatRooms from '../assets/dummy-data/ChatRooms';

const chatRoom1 = ChatRooms[0];
export default function TabOneScreen() {
  return (
    <View style = {styles.page}>
      <ChatRoomItem chatRoom = {chatRoom1} name = "a"/>
      <ChatRoomItem/>
    
    </View>
  );
}

const styles = StyleSheet.create({
  page:{
    backgroundColor:"white"
  }
})
