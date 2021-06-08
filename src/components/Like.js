import React,{useState,useEffect} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',  
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'
    },
    onPress: {
        color: 'red',
        marginRight:10
    },
    icon: {
        color: 'black',
        marginRight:10
    }
})
export const Like = ({ name }) => {
    
    const [like, setlike] = useState(false)

    useEffect(async() => {
        try {
            const likeDb = await AsyncStorage.getItem(name);
            if (likeDb) {
                //pasar el like a true 
                setlike(true);
            } else {
                //pasar el like a false
                setlike(false)
            }
        } catch (error) {
            console.log(error)
        }
    }, [like])

    const darLike = async () => {
        try {
            if (like) {
                setlike(false)
                await AsyncStorage.removeItem(name)
            } else {
                await AsyncStorage.setItem(name, JSON.stringify('true'));
                setlike(true)
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={()=>{darLike()}}
            >
                <Icon
                    name='favorite'
                    size={30}
                    style={(like) ? styles.onPress : styles.icon}
                    />
            </TouchableOpacity>
            {
                name &&
                <Text style={styles.title}>{name}</Text>
            }
        </View>
    )
}
