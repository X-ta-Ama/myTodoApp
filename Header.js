import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function Header(){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>My Todos</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 38,
        height: 80,
        backgroundColor: "coral",
    },
    title: {
        textAlign: "center",
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 20,
    },
});
