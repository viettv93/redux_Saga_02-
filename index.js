/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screen/Screen1';
import Main from './src/Main';
import { Provider } from 'react-redux';
import Store from './src/store/Store'
const Stack = createNativeStackNavigator()
function Screen() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login"
                    component={Login}
                    options={{ headerShown: false }} />
                <Stack.Screen name="Main"
                    component={Main}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Screen;
const Redux = () => (
    <Provider store={Store}>
        <Screen />
    </Provider>
)

AppRegistry.registerComponent(appName, () => Redux);
