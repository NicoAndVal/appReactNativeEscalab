
import React, {   createContext, useEffect, useReducer } from 'react';
import { userReducer } from './userReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const UserContext = createContext();

//Datos iniciales de usuario
const initialState = {
    nombre: 'Usuario 1',
    correo: 'correo@correo.cl',
    tel:'+56912345678'
}

const UserProvider = ({ children}) => {
    const [userState, dispatch] = useReducer(userReducer, initialState);
    const { nombre, correo, tel } = userState

    useEffect(async() => {
        const nombreBD = await AsyncStorage.getItem('nombreUsuario');
        const correoBD = await AsyncStorage.getItem('correoUsuario');
        const telBD = await AsyncStorage.getItem('telUsuario');

        //Si hay un usuario en la base de datos usa esos datos
        if (nombreBD) {
            dispatch({type:'usarNombreBD', payload:{nombre:nombreBD}})
        }
        //Si hay un correo en la base de datos usa esos datos
        if (correoBD) {
            dispatch({type:'usarCorreoBD', payload:{correo: correoBD}})
        }

        if (telBD) {
            dispatch({type:'usarTelBD', payload:{tel: telBD}})
        }



    },[nombre, correo, tel])

    const save = (nombre, correo, tel) => {
        dispatch({type: 'guardar', payload:{ nombre, correo, tel}})
    }
    return (
        <UserContext.Provider value={{
            nombre,
            tel,
            correo,
            save
        }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider