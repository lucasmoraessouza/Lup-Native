import "react-native-gesture-handler"
import React, { useEffect } from "react"
import { StatusBar } from "react-native"
import { useFonts } from "expo-font"
import ContextProvider from "./src/context/context"
import {
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_700Bold,
} from "@expo-google-fonts/open-sans"
import Routes from "./src/routes/Router"
import * as SplashScreen from "expo-splash-screen"
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';


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

  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: (props) => (
      <BaseToast
        {...props}
        style={{ borderLeftColor: 'green' }}
        contentContainerStyle={{ paddingHorizontal: 15, justifyContent: 'center', alignContent: 'center' }}
        text1Style={{
          fontSize: 17,
          fontWeight: '500'
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: (props) => (
      <ErrorToast
        {...props}
        text1Style={{
          fontSize: 17,
          fontWeight: '500'

        }}
        text2Style={{
          fontSize: 15
        }}
      />
    ),
    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    tomatoToast: ({ text1, props }) => (
      <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>
      </View>
    )
  };



  return (
    <ContextProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
        translucent={false}
      />
      <Routes />
      <Toast config={toastConfig} />
    </ContextProvider>
  )
}
