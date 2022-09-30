import { View, Text, Image, TouchableOpacity } from "react-native"
import { theme } from "../../global/styles/theme"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { Tabs } from "../Home/components/tabs"
import { Requests } from "./components/views/requests"
import { MyAds } from "./components/views/myAds"
import { NextEvents } from "./components/views/nextEvents"
import { StateGlobal } from "../../context/context"
import { useNavigation } from "@react-navigation/native"
import { Header } from "../../components/Header"
import { api } from "../../services"
import { useEffect } from "react"

export function Home() {
  const navigation = useNavigation()
  const { primary, secondary } = theme.colors
  const { components, setDataUser } = StateGlobal()

  async function getData() {
    try {
      const res = await api.get('api/anunciante')
      setDataUser(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={[secondary, primary]}
        start={{ x: 0.0, y: 0.45 }}
        end={{ x: 1, y: 0 }}
      >

        <Header />

        <View style={styles.containerTabs}>
          <Tabs />

          {components === 0 ? (
            <Requests />
          ) : components === 1 ? (
            <NextEvents />
          ) : components === 2 ? (
            <MyAds />
          ) : (
            ""
          )}
        </View>
      </LinearGradient>
    </View>
  )
}
