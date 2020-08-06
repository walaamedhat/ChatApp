import React, { useState, useEffect, useRef } from 'react';
// Import React Navigation
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

//Import Configuration
import LinkingConfiguration from './LinkingConfiguration';

// Import the screens
import Chat from '../screens/Chat';
import Login from '../screens/Login';

// Create the navigator
const Stack = createStackNavigator();
console.disableYellowBox = true

function Main() {
    return (
        <NavigationContainer linking={LinkingConfiguration}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Chat"
                    // options={{header: () => <CustomHeader />}}
                    component={Chat}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Export it as the root component
export default Main



// <Stack.Screen
// name="Home"
// // options={{header: () => <CustomHeader />}}
// component={Home}
// />
// <Stack.Screen
//     name="Notification"
//     // options={{header: () => <CustomHeader />}}
//     component={NotificationScreen}
// />