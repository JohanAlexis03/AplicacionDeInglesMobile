import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import ClasesStacks from './src/navigation/ClasesStacks';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <ClasesStacks />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}