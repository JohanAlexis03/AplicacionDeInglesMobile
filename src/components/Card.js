import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import EtiquetaNivel from './EtiquetaNivel';
import { colors, spacing, typography } from '../theme';
import { NIVELES } from '../data/clases';
import {CLASES} from '../data/clases';

export default function Card({ clase, onPress }) {
    // Esto redirecciona a otra pantalla al presionar la tarjeta
    // Muestra la imagen de la clase
    // Contenedor para el contenido de la tarjeta
    // Muestra el título de la clase
    // Muestra la descripción de la clase
    // Muestra el nivel de la clase con el componente EtiquetaNivel
    // Mostrar precio nivel y nombre del profe ya miramos si lo hacemos dentro de este
    // componente o en otro componente que se llame CardInfo
    return (
        <Pressable onPress={onPress} style={styles.card}> 
            <Image source={{ uri: clase.imagen }} style={styles.image} />
            <View style={styles.content}>   
                <Text style={styles.title}>{clase.titulo}</Text>
                <Text style={styles.description}>{clase.descripcion}</Text>
                <EtiquetaNivel nivel={clase.nivel} />   
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    title: {fontSize: 16, color: colors.text,}
});

//repasar manejo de parametro desde un formato tipo json
// librerias para crear estilos 
// usuario de github

