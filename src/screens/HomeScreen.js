import React from 'react'
import { View, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native'
import { CatPoster } from '../components/CatPoster'
import { useCats } from '../hooks/useCats'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../context/authContext/AuthContext';
import { UserContext } from '../context/userContext/UserContext';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:20
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerUser: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 40,
        marginTop:20
    }
})

export const HomeScreen = ({navigation}) => {
    
    const { isLoading, cats } = useCats();
    const { user } = useContext(AuthContext);
    const { nombre } = useContext(UserContext);
    

    return (
        <View style={styles.container}>
            <View style={styles.containerUser}>
                <TouchableOpacity
                    onPress={()=>navigation.navigate('Setting')}
                >
                    <Icon
                        name='account-circle'
                        size={40}
                        style={{marginRight:10}}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Bienvenido {nombre}</Text>
 
            </View>

            {
                !isLoading ?
                <FlatList
                    data={cats}
                    renderItem={({ item }) => <CatPoster cat={item} navigation={navigation} />}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    /> :
                    <ActivityIndicator
                    size={100}
                    color='#d35400'
                />
            }

        </View>
    )
}
