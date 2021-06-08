import React, { Component } from 'react'
import { Button, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { Formulario } from '../components/Formulario';
import {AuthContext} from '../context/authContext/AuthContext'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#ecf0f1'
    },
    texto: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom:30
    }
})

export default class Login extends Component {

    static contextType = AuthContext;


    render() {

        const { navigation } = this.props;
        const {signIn} = this.context;
        return (
            <View style={styles.container}>
                <Text style={styles.texto}> Bievenido, ingresa tus datos </Text>
                <Formulario navigation={navigation} signIn={signIn} />
                
            </View>
        )
    }
}
