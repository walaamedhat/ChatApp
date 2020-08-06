import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Chat() {
    return(
            <View style={styles.container}>
                <Text>
                    Chat
                </Text>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    }
});