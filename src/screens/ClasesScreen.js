//importaciones de librerías y hooks
import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet,FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';



// Importaciones de iconos y componentes personalizados
import { Ionicons } from '@expo/vector-icons';

// Importaciones de datos y temas
import {useResponsive}from '../hooks/useResponsive';
import Card from '../components/Card';
import NivelFiltro from '../components/NivelFiltro';
import { spacing, colors } from '../theme';
import { NIVELES, CLASES } from '../data/clases';
import EstadoVacio from '../components/EstadoVacio';


export default function ClasesScreen({ navigation }) {
    // Hooks de estado y safe area
    const [nivel, setNivel] = useState("Todos");
    const [busqueda, setBusqueda] = useState('');
    const insets = useSafeAreaInsets();
    const { columnas, paddingHorizontal } =useResponsive ();

    // Lógica del filtrado de clases por nivel y búsqueda
    const resultados = useMemo(()=>{
        const textBusqueda =busqueda.trim().toLowerCase();
        return CLASES.filter(clase => {
            const coincideNivel = nivel === "Todos" || clase.nivel === nivel;
            const coincideTextoBusqueda = clase.titulo.toLowerCase().includes(textBusqueda);
            return coincideNivel && coincideTextoBusqueda;
        }
    )}, [busqueda, nivel]);

    return (
        <View style={[styles.pantalla,{ 
            paddingTop: insets.top,
            paddingLeft: insets.left, 
            paddingRight: insets.right 
        }]}>
            <Text style={styles.headerTitulo}>Aplicacion de clases de ingles</Text>

            {/* Barra de búsqueda con icono a la derecha */}
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Buscar clase"
                    placeholderTextColor="#666"
                    value={busqueda}
                    onChangeText={setBusqueda}
                    autoCorrect={false}
                    autoCapitalize="none"
                />

                {/* Si hay texto muestra la X para borrar; si está vacío muestra la lupa */}
                {busqueda.length > 0 ? (
                    <Ionicons
                        name="close-circle"
                        size={20}
                        color="#444"
                        onPress={() => setBusqueda('')}
                    />
                ) : (
                    <Ionicons 
                        name="search" 
                        size={20} 
                        color="#444" 
                    />
                )}
            </View>

            {/* Filtros horizontales */}
            <ScrollView 
                style={{ flexGrow: 0 }}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.nivelesContainer}
            >
                {NIVELES.map((item) => (
                    <NivelFiltro 
                        key={item}
                        etiqueta={item}
                        activo={nivel === item}
                        onPress={() => setNivel(item)}
                    />
                ))}
        </ScrollView>
        <FlatList
            data={resultados}
            keyExtractor={(item => item.id)}
            renderItem={({item}) => (
                <Card
                    clase={item}
                    onPress={() => navigation.navigate('DetalleClase', { clase: item })}
                />
            )}
            numColumns={columnas}
            showsHorizontalScrollIndicator ={false}
            contentContainerStyle ={{paddingHorizontal,
                flexGrow:1,
                paddingBottom: spacing.xl
            }}
            ListEmptyComponent={
                <EstadoVacio
                    icono="search-outline"
                    titulo="No hay resultados"
                    mensaje="No se encontraron clases que coincidan con tu búsqueda."
                    textoAccion="Borrar filtros"
                    onAction={() => {
                        setNivel("Todos");
                        setBusqueda('');
                    }}
                />
            }

        />
        </View>
    )
}

const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: spacing[4],
    },
    headerTitulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: spacing[4],
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e2e8f0',
        borderRadius: 8,
        paddingHorizontal: spacing[3],
        paddingVertical: spacing[2],
        marginBottom: spacing[4],
    },
    searchInput: {
        flex: 1, // Empuja todo el espacio hacia la derecha
        fontSize: 18,
        color: '#000',
        paddingRight: spacing[2],
    },
    nivelesContainer: {
        flexDirection: 'row',
        marginBottom: spacing[4],
        gap: spacing[2],
    },
});