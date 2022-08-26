import * as React from 'react';;
import { StatusBar } from 'react-native';
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from '@expo-google-fonts/open-sans';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_600SemiBold,
    OpenSans_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer >
      <StatusBar barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

