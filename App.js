import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.banner}>
                <Text style={styles.name}>Sruthi Johnson</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    banner: {
        width: '100%',
        padding: 20,
        backgroundColor: '#6200ea', 
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
    },
    name: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});
