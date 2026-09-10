import { useWindowDimensions } from "react-native";



export default function useResponsive() {
    const { width, height } = useWindowDimensions();
    const istablet = width >= 768; // Considera tablet si el ancho es mayor o igual a 768px
    const isHorizontal = width > height; // Considera horizontal si el ancho es mayor que la altura
    return { 
        width, 
        height, 
        stablet, 
        isHorizontal,
        columnas: istablet ? 2 : 1, // Si es tablet, muestra 2 columnas; si no, 1 columna para dispositivos móviles
        ancho: istablet ? 320 :  Math.min(width * 0.72,300), // Ancho de la tarjeta: 320px para tablet, 72% del ancho de la pantalla para móviles, con un máximo de 300px
    };
        
}