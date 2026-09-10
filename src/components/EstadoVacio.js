import react from "react";
import {view,Text,StyleSheet} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing} from "../theme";

export default function EstadoVacio({icono, mensaje, titulo,textoAccion, onAction}) {
    return(
        <view style={styles.container}>
            <view style={styles.iconContainer}>
                <Ionicons name={icono} size={30} color={colors.primario} /> 

            </view>  
            <Text style={styles.titulo}>{titulo}</Text>
            <Text style={styles.mensaje}>{mensaje}</Text>
        </view>
    )
}
const style = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.xxl,
  },
  circulo: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primarioSuave,
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
});