import React, { useState, useEffect } from 'react';
import {StatusBar, StyleSheet, View, Image} from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import {heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";


export default function Login({ navigation, route }) {
    navigation.setOptions({ headerShown: false });
    const [name, setName] = useState('');
    const validateName = () => {
        console.log(!name || name.trim() !== '', 'nammme')
        if (!name || name.trim() === ''){
            setName('')
            alert('Please Enter your name')
        }else {
            navigation.navigate('Chat', { name })
        }
    }
    return (
        <View
            style={{ flex: 1, backgroundColor: '#29374a', justifyContent: 'center', padding:20}}
        >
            {/*<StatusBar barStyle="light-content" />*/}
            <View style={{justifyContent: 'space-around', height: heightPercentageToDP(40)}}>
                <Image
                    source={require('../assets/icon-chat.png')}
                    resizeMode="stretch"
                    style={{
                        alignSelf: 'center',
                        width: '40%',
                        height: '40%',
                    }}
                />
                <TextInput
                    label="Enter Your Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    underlineColorAndroid="transparent"
                    autoCapitalize="none"
                    theme={{colors: {primary: 'blue'}}}
                />
                <Button icon="login" mode="contained" color='#77b3d4' onPress={() => validateName()}>
                    Join
                </Button>
            </View>
        </View>
    )
}

const offset = 24;
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nameInput: { // 3. <- Add a style for the input
        height: offset * 2,
        margin: offset,
        paddingHorizontal: offset,
        borderColor: '#111111',
        borderWidth: 1,
    },
});