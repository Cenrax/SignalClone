
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const blue = '#3777f8'
const grey = 'lightgrey'
const myID = "u1"
const Message = ({message}:any) => {

    const isMe = message.user.id === myID;
    return (
        <View style = {[
            styles.container, isMe ? styles.rightContainer : styles.leftContainer]}>
            <Text style = {{color: isMe? 'black' : 'white'}}>
                {message.content}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:10,
        margin:10,
        borderRadius:10,
        maxWidth: '75%',
    },
    leftContainer: {
        backgroundColor: blue,
        marginLeft: 10,
        marginRight: 'auto'
    },
    rightContainer: {
        backgroundColor: grey,
        marginLeft: 'auto',
        marginRight: 10
    },
    text : {
        color: 'white'
    }

});

export default Message;