import React,{useState,useEffect} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
const styles = StyleSheet.create({
    container: {
        width: "50%"
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

const User = {
    nombre: 'UserCat123',
    password: '12345678'
}


export const Formulario = ({navigation,signIn}) => {
    const [nombre, setNombre] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(async() => {
        if (await AsyncStorage.getItem('isLogin') === User.nombre) {
            navigation.navigate('Home')
        }
    }, [])
    

    //Llama al dispatch del context y cambia a la pantalla de home
    const login = async() => {
        if (User.nombre == nombre && User.password === password) {
            signIn();
            try {
                await AsyncStorage.setItem('isLogin', User.nombre);
                navigation.navigate("Home");
            } catch (error) {
                await AsyncStorage.setItem('isLogin', '');
                showAlert();
            }
        } else {
            showAlert();
        }
    }
    //Mostrar Alerta
    const showAlert = () =>
    Alert.alert(
        "Error",
        "El usuario o la contraseña son incorrecto",
        [
        {
            text: "Aceptar",
            style: "default",
        },
        ],
        {
        cancelable: true
        }
    );

    return (
        <View style={styles.container}>
            <TextInput
                    style={styles.input}
                    placeholder='Nombre de usuario'
                    onChangeText={setNombre}
                    value={nombre}
            />
            <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
            />
                
             <TouchableOpacity
                    style={styles.boton}
                    onPress={() => login()}
                    
             >
                <Text style={styles.textoBoton}>Ingresar</Text>
            </TouchableOpacity>
        </View>
    )
}
