import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius, spacing } from '../theme';
import EtiquetaNivel from './EtiquetaNivel';

export default function Card({ clase, onPress }) {
    // Esto redirecciona a otra pantalla al presionar la tarjeta
    return (
        <Pressable onPress={onPress} style={styles.card}>
            <Image source={{ uri: clase.imagen }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.title}>{clase.titulo}</Text>
                <Text style={styles.description} numberOfLines={2}>
                    {clase.descripcion}
                </Text>
                <EtiquetaNivel nivel={clase.nivel} />
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.superficie,
        borderRadius: radius.lg,
        marginBottom: spacing.md,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: colors.borde,
    },
    image: {
        width: '100%',
        height: 160,
    },
    content: {
        padding: spacing.md,
    },
    title: {
        fontSize: 16,
        fontWeight: '700',
        color: colors.texto,
        marginBottom: spacing.xs,
    },
    description: {
        fontSize: 13,
        color: colors.textoSuave,
        lineHeight: 18,
        marginBottom: spacing.sm,
    },
});

//repasar manejo de parametro desde un formato tipo json
// librerias para crear estilos 
// usuario de github

