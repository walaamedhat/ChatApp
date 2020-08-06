import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Login({ navigation, route }) {
    return (
        <View
            style={{ flex: 1, backgroundColor: '#000'}}
        >
            <Text>
                Main
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});