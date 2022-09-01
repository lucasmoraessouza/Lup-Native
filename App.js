import "react-native-gesture-handler"
import React, { useEffect } from "react"
import { StatusBar } from "react-native"
import { useFonts } from "expo-font"
import  ContextProvider  from "./src/context/context"
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans"
import Routes from "./src/routes/Router"
import * as SplashScreen from "expo-splash-screen"

export default function App() {
  const [fontsLoaded] = useFonts({
    OpenSans_600SemiBold,
    OpenSans_400Regular,
    OpenSans_700Bold,
  })

  useEffect(() => {
    async function test() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync()
      }
    }
    test()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <ContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
        translucent={false}
      />
      <Routes />
    </ContextProvider>
  )
}
