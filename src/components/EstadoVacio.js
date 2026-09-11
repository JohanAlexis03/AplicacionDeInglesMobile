import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from "../theme";

export default function EstadoVacio({ icono, mensaje, titulo, textoAccion, onAction }) {
    return(
        <View style={styles.contenedor}>
            <View style={styles.circulo}>
                <Ionicons name={icono} size={30} color={colors.primario} /> 

            </View>  
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.mensaje}>{mensaje}</Text>
            {onAction != null && (
                <Text style={styles.accion} onPress={onAction}>{textoAccion}</Text>
            )}
        </View>
    )
}
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xl,
  },
  circulo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primario,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  titulo: { fontSize: 17, fontWeight: '700', color: colors.texto, textAlign: 'center' },
  mensaje: {
    fontSize: 14,
    color: colors.textoSuave,
    textAlign: 'center',
    marginTop: spacing.sm,
    lineHeight: 20,
  },
  accion: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primario,
    textAlign: 'center',
    marginTop: spacing.md,
  },
});