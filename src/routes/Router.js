
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react"
import { StateGlobal } from "../context/context";

import { AppStack } from "./AppStack"
import { AuthStack } from "./AuthStack";

export default function Routes() {
  const { isAuthenticated } = StateGlobal()

  return (
    <>
      <NavigationContainer>
        {isAuthenticated === true ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </>
  )
}
