import React, { useEffect } from "react"
import { StatusBar } from "react-native"
import { useFonts } from "expo-font"

import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans"
import { NavigationContainer } from "@react-navigation/native"
import Routes from "./src/routes"
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
        // This tells the splash screen to hide immediately! If we call this after
        // `setfontsLoaded`, then we may see a blank screen while the app is
        // loading its initial state and rendering its first pixels. So instead,
        // we hide the splash screen once we know the root view has already
        // performed layout.
        await SplashScreen.hideAsync()
      }
    }
    test()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
        translucent={false}
      />
      <Routes />
    </NavigationContainer>
  )
}
