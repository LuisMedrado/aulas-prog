import { Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import {
    Rajdhani_700Bold,
    useFonts,
} from '@expo-google-fonts/rajdhani';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppDataProvider } from '../context/AppDataContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Rajdhani_700Bold,
    Inter_400Regular,
    Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <AppDataProvider>
        <Slot />
      </AppDataProvider>
    </SafeAreaProvider>
  );
}