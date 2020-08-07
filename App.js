import React, { useState, useEffect, useRef } from 'react';
// Import React Navigation
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import { setJSExceptionHandler, setNativeExceptionHandler } from 'react-native-exception-handler';

//Import Configuration
// import LinkingConfiguration from './LinkingConfiguration';

// Import the screens
import Chat from './screens/Chat';
import Login from './screens/Login';

// Create the navigator
const Stack = createStackNavigator();
console.disableYellowBox = true
const handleError = (error, isFatal) => {
    // fetch
    console.log(error, isFatal);
    // alert(error.name);
};

setJSExceptionHandler((error, isFatal) => {
    console.log('caught global error');
    console.log(error)
    handleError(error, isFatal);
}, true);
//
// setNativeExceptionHandler(errorString => {
//     // do the things
//     console.log(errorString)
// });
function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
              name="Login"
              component={Login}
              options={{
                  title: 'My home',
                  headerStyle: {
                      backgroundColor: '#29374a',
                  },
              }}
          />
          <Stack.Screen
              name="Chat"
              component={Chat}
          />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

// Export it as the root component
export default App