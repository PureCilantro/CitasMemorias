import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';

import image from "../assets/imgImport";

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Conoce a las mejores memorias!</Text>
            <View style={styles.imageContainer}>
                <Image source={image.splash} style={styles.image}/>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Memorias")}>
                    <Text style={styles.buttonText}>Comenzar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: "center",
    },
    imageContainer: {
        alignItems: "center",
    },
    image: {
        width: 250,
    },
    button: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#007BFF",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
});