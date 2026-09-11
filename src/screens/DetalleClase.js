import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import EtiquetaNivel from '../components/EtiquetaNivel';
import { colors, spacing, typography } from '../theme';

export default function DetalleClaseScreen({ route }) {
    const { clase } = route.params;
    const insets = useSafeAreaInsets();

    return (
        <ScrollView
            style={styles.pantalla}
            contentContainerStyle={{
                paddingTop: insets.top + spacing.md,
                paddingBottom: insets.bottom + spacing.xl,
                paddingLeft: insets.left + spacing.md,
                paddingRight: insets.right + spacing.md,
            }}
        >
            <Image source={{ uri: clase.imagen }} style={styles.imagen} />
            <EtiquetaNivel nivel={clase.nivel} />
            <Text style={styles.titulo}>{clase.titulo}</Text>
            <Text style={styles.descripcion}>{clase.descripcion}</Text>
            <Text style={styles.info}>Profesor: {clase.profesor?.nombre}</Text>
            <Text style={styles.info}>Modalidad: {clase.modalidad}</Text>
            <Text style={styles.info}>Duración: {clase.duracion} min</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    pantalla: {
        flex: 1,
        backgroundColor: colors.fondo,
    },
    imagen: {
        width: '100%',
        height: 220,
        borderRadius: 12,
        marginBottom: spacing.md,
    },
    titulo: {
        ...typography.title,
        marginTop: spacing.sm,
        marginBottom: spacing.sm,
        color: colors.texto,
    },
    descripcion: {
        ...typography.body,
        color: colors.textoSuave,
        marginBottom: spacing.md,
    },
    info: {
        ...typography.body,
        color: colors.texto,
        marginBottom: spacing.xs,
    },
});