import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ClasesScreen from "../screens/ClasesScreen";

const Stack = createNativeStackNavigator();

export default function ClasesStacks() {
    //aca se ponen todos los stacks de la aplicacion
    return (
        <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={ClasesScreen}
            options={{headerShown:true, title:"Clases de ingles"}}
            />

            <Stack.Screen
                name="DetalleClase"
                component={DetalleClaseScreen}
                options={{title:'Detalle', headerBackTitle:'Atras'}}
            />

        </Stack.Navigator>
    )

}

