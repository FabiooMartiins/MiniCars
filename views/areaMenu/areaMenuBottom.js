import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { Text, View, Button, BackHandler, Alert, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Home, Profile, Cadastro } from '../index';

export default function AreaMenuBottom({ navigation }) {

    const Tab = createMaterialBottomTabNavigator();
    return (
        <Tab.Navigator
            activeColor='#97C8EB'
            inactiveColor='#fff'
            barStyle={styles.area__tab}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home';
                        color = focused ? "#001011" : "#FFF";
                        size = focused ? 25 : 30;
                    } else if (route.name === 'Cadastro') {
                        iconName = focused ? 'plus' : 'plus';
                        color = focused ? "#001011" : "#FFF";
                        size = focused ? 25 : 30;
                    } else if (route.name === 'Perfil') {
                        iconName = focused ? 'user' : 'user';
                        color = focused ? "#001011" : "#FFF";
                        size = focused ? 25 : 30;
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Cadastro"
                component={Cadastro}
            />
            <Tab.Screen
                name="Perfil"
                component={Profile}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    area__tab: {
        backgroundColor: '#001011',
        fontSize: '22px',
        fontWeight: 'bold',
    }
})