import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useContext } from 'react/cjs/react.development';
import {UserContext} from '../context/userContext/UserContext'
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        marginLeft: 20
    },
    header: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems:'center'
    },
    texto: {
        fontSize: 18,
      fontWeight:'bold'  
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        width: '100%',
        height: 50,
        borderRadius: 15,
        padding: 12,
        marginTop:20
    },
    boton: {
        marginTop: 20,
        backgroundColor: '#d35400',
        padding: 10,
        width: '100%',
        borderRadius: 15,
    },
    textoBoton: {
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        textTransform:'uppercase'
    }
    
})

export const SettingScreen = () => {
    
    const { nombre, correo, tel, save } = useContext(UserContext);
    const [nombreF, setnombreF] = useState(nombre)
    const [correoF, setcorreoF] = useState(correo)
    const [telF, settelF] = useState(tel)

    const newData = async () => {
        try {
            await AsyncStorage.setItem('nombreUsuario', nombreF);
            await AsyncStorage.setItem('correoUsuario', correoF);
            await AsyncStorage.setItem('telUsuario', telF);
        } catch (error) {
            console.log(error);
        }


        save(nombreF, correoF, telF);
    }
    return (
        <View style={styles.container}>
            {/* Nombre */}
            <View style={styles.header}>
                <Icon
                    name='account-circle'
                    size={30}
                    style={{marginRight:10}}
                />
                <Text style={{fontSize:20}}>{nombre}</Text>
            </View>
            {/* Correo */}
            <View style={styles.header}>
                <Icon
                    name='account-circle'
                    size={30}
                    style={{marginRight:10}}
                />
                <Text style={{fontSize:20}}>{correo}</Text>
            </View>
            {/* Tel */}
            <View style={styles.header}>
                <Icon
                    name='account-circle'
                    size={30}
                    style={{marginRight:10}}
                />
                <Text style={{fontSize:20}}>{tel}</Text>
            </View>
            <Text style={{ fontSize: 30, marginTop: 20 }}>Cambiar Datos</Text>
            
            {/* Formulario */}
            <View style={{width:'60%'}}>
                <TextInput
                    style={styles.input}
                    placeholder='Nombre'
                    onChangeText={setnombreF}
                    value={nombreF}
            />
            <TextInput
                    style={styles.input}
                    placeholder='Correo'
                    onChangeText={setcorreoF}
                    value={correoF}
            />
            <TextInput
                    style={styles.input}
                    placeholder='Télefono'
                    onChangeText={settelF}
                    value={telF}
            />
                
             <TouchableOpacity
                    style={styles.boton}
                    onPress={() => newData()}
                    
             >
                <Text style={styles.textoBoton}>Ingresar</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}
