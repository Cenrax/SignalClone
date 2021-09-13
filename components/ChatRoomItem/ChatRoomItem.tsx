import React from 'react';
import { View, Image, Text , StyleSheet} from 'react-native';
import styles from './styles';
export default function ChatRoomItem(props : any){
    console.log(props)
    return(
        <View style = {styles.container}>
            <Image source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}} style = {styles.image}/>
            <View style = {styles.badgeContainer}>
                <Text style = {styles.badgeText}>4</Text>
            </View>
            <View style = {styles.rightContainer}>
                <View style = {styles.row}>
                    <Text style ={styles.name}>Soham Ghosh</Text>
                    <Text style = {styles.text}> 00:13 </Text>
                </View>
                <Text numberOfLines={1} style = {styles.text}>
                    "Suman er opore raag holeo suman sotti khub bhalo. Suman is a very kind and honest guy."
                </Text>

            </View>

        </View>

    );
}
