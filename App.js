import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './views/areaMenu/home'
import Login from './views/login';
import Register from './views/register'
import AreaMenuBottom from './views/areaMenu/areaMenuBottom';
import Information from './views/information';
import Carsinformation from './views/carsinformation';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="AreaMenuBottom" component={AreaMenuBottom} options={{ headerShown: false }} />
        <Stack.Screen name="Information" component={Information} options={{ headerShown: false }} />
        <Stack.Screen name="Carsinformation" component={Carsinformation} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}