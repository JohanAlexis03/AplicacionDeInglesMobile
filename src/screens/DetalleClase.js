import React,{useState,useMemo,useLayoutEffect} from 'react';
import { Image, ScrollView, StyleSheet, Text, View, Alert} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import{useResponsive} from '../hooks/useResponsive';
import { colors, spacing, typography, sombra,radius} from '../theme';
import {formatoPrecio} from '../utils/formatoPrecio';

export default function DetalleClaseScreen({ route, navigation }) {
    const { clase } = route.params;
    const insets = useSafeAreaInsets();
    const { esTable } = useResponsive();

    useLayoutEffect(() => {}, 
    [navigation, clase.titulo]); // Actualiza el título de la pantalla con el nombre de la clase

    return (
        <View style ={styles.pantalla}>
            <ScrollView
            contentContainerStyle={{ paddingBottom: 120 }}
            showsVerticalScrollIndicator={false}
            >
            <Image source={{ uri: clase.imagen }} 
            style={[styles.portada,{height :esTable ?300:200}]} 
            resizeMode="cover"
            //Conpletar detalles clases Screem par apoder hacer el taller de recuperacion
            //estudiar todo lo que llevamos 
            //campos a mostrar en la pantalla de detalle de clase Descripcion, del profesor nombre del profesor completo
            //el precio de la clase, la duracion
            // los cupos y el horario y la foto al lado del nombre del profesor 
            //primero nombre del profesor y la foto, que queden en dos columnas
            //usar los estilos que tenemos y la profe nos paso 
            //al final del componente que diga realizar reserva, cuando uno le de click y ponerlo a funcionar, que nos lleve a la pantalla de reserva y que nos muestre el nombre de la clase y el precio de la clase
            />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    pantalla: { flex: 1, backgroundColor: colors.fondo },
    portada: { width: '100%', backgroundColor: colors.primarioSuave },
    datos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
    },
    dato: { alignItems: 'center', gap: 2 },
    datoValor: { fontSize: 16, fontWeight: '800', color: colors.texto },
    profesor: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    padding: spacing.lg,
    },
    avatar: { width: 48, height: 48, borderRadius: 24, backgroundColor: colors.borde },
    profesorNombre: { fontSize: 15, fontWeight: '700', color: colors.texto },
    descripcion: { ...typography.cuerpo, color: colors.textoSuave, lineHeight: 22, marginTop: spacing.sm },
    barra: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.superficie,
    borderTopWidth: 1,
    borderTopColor: colors.borde,
    paddingVertical: spacing.lg,
    paddingTop: spacing.lg
    },
    precio: { fontSize: 18, fontWeight: '800', color: colors.primario },
});