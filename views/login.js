import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import * as LocalAuthentication from 'expo-local-authentication';
import AsyncStorage from '@react-native-async-storage/async-storage';
import config from '../config/config.json';

export default function Login({ navigation }) {
    const [display, setDisplay] = useState('none');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [login, setLogin] = useState(false);

    useEffect(() => {
        verifyLogin();
    }, []);

    useEffect(() => {
        if (login === true) {
            biometric();
        }
    }, [login])

    //Verifica se o usuário já possui algum login
    async function verifyLogin() {
        let response = await AsyncStorage.getItem('userData');
        let json = await JSON.parse(response);
        if (json !== null) {
            setEmail(json.email);
            setPassword(json.password);
            setLogin(true);
        }
    }

    //biometria
    async function biometric() {
        let compatible = await LocalAuthentication.hasHardwareAsync();
        if (compatible) {
            let biometricRecords = await LocalAuthentication.isEnrolledAsync();
            if (!biometricRecords) {
                alert('Biometria não cadastrada');
            } else {
                let result = await LocalAuthentication.authenticateAsync();
                if (result.success) {
                    sendForm();
                } else {
                    setUser(null);
                    setPassword(null);
                }
            }
        }
    }

    //envio do formulário de Login
    async function sendForm() {
        let response = await fetch(`${config.urlRoot}login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        let json = await response.json();
        if (json === 'error') {
            setDisplay('flex');
            setTimeout(() => {
                setDisplay('none');
            }, 5000);
            await AsyncStorage.clear();
        } else {
            await AsyncStorage.setItem('userData', JSON.stringify(json));
            navigation.navigate('AreaMenuBottom');
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    style={{ width: '100%', height: '100%', resizeMode: 'stretch' }}
                    source={require('../assets/minicars-logo2.png')}
                />
            </View>

            <Text style={styles.login__msg(display)}>Usuário ou senha inválidos!</Text>

            <Text style={styles.text}>Login</Text>
            <TextInput style={styles.input} placeholder='E-mail' onChangeText={(text) => setEmail(text)}></TextInput>

            <Text style={styles.text}>Senha</Text>
            <TextInput style={styles.input} placeholder='Senha' onChangeText={(text) => setPassword(text)}></TextInput>

            <TouchableOpacity style={styles.btnLogin} onPress={() => sendForm()}>
                <Text style={styles.textBtn}>Entrar</Text>
            </TouchableOpacity>
            <View style={styles.areaRegister}>
                <Text style={styles.btnCadastro}>não possui login? </Text>
                <TouchableOpacity style={{justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.navigate('Register')} > 
                    <Text style={{ color: '#FFF', fontSize: 22, textDecorationLine: 'underline' }}>cadastre-se</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#093A3E',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: '13%',
        marginBottom: 50
    },
    input: {
        width: '80%',
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        fontSize: 22
    },
    text: {
        color: '#FFF',
        fontSize: 22,
        marginBottom: 5,
        alignSelf: 'flex-start',
        marginLeft: '12%'
    },
    btnLogin: {
        width: '30%',
        backgroundColor: '#97C8EB',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginTop: 10
    },
    textBtn: {
        fontSize: 22,
        color: '#093A3E',
        fontWeight: 'bold'
    },
    btnCadastro: {
        color: '#FFF',
        fontSize: 22,
    },
    login__msg: (text = 'none') => ({
        fontWeight: 'bold',
        fontSize: 15,
        color: 'red',
        marginTop: 15,
        marginBottom: 15,
        display: text
    }),
    areaRegister:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }
})