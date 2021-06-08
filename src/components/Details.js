import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
    bubble: {
        paddingHorizontal: 25,
        paddingVertical:18,
        borderRadius: 50,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d35400'
    },
    titleBubble: {
        color: 'black',
        marginBottom: 10,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop:10
    },
    textBubble: {
        color: 'white',
        fontSize:15
    }
})

export default class Details extends Component {
    render() {
        const { title, nameIcon, text } = this.props;
        
        return (
          <View>
             <Text style={styles.titleBubble}>{title}</Text>
             <View style={styles.bubble}>
                 <Icon name={nameIcon} size={30} color="#ecf0f1" />
               <Text style={styles.textBubble}>{ text}</Text>
             </View>
         </View>
        )
    }
}
