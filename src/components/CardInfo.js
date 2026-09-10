import React from 'react';
import { View, Text, StyleSheet } from 'react-native'; 
import { colors, spacing, typography } from '../theme';
import { CLASES } from '../data/clases'; 

export default function CardInfo({ clase }) { 
    /* contenedor principal */
    /* muestra el precio recibido como prop */
    /* muestra el nombre del profesor recibido como prop */
    /* muestra el nivel recibido como prop */
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{clase.precio}</Text>
            <Text style={styles.text}>{clase.profesor}</Text>
            <Text style={styles.text}>{clase.nivel}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    text: {},
});