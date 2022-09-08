import { useState } from "react"
import { styles } from "./styles"
import { View, Text, Image } from "react-native"
import { TabsAds } from "../../../../../components/TabsAds"
import { StateGlobal } from "../../../../../context/context"
import { AboutUs } from "../../../../../components/AboutUs"
import { Media } from "../../../../../components/Media"
import { TouchableOpacity } from "react-native-gesture-handler"
export function MyAds() {
  const { subComponents } = StateGlobal()

  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../../../../../assets/images/LogoFornecedor.png")}
          />
          <View style={styles.contentHeader}>
            <Text style={styles.title}>Nome do Fornecedor</Text>
            <Text style={styles.subtitle}>
              Serviços: <Text style={styles.text}>Locação de Cadeiras</Text>
            </Text>
            <Text style={styles.subtitle}>
              Contato: <Text style={styles.text}>(15) 956847712</Text>
            </Text>
            <Text style={styles.subtitle}>
              Localização: <Text style={styles.text}>Sorocaba - SP</Text>
            </Text>
            <Text style={styles.subtitle}>
              Horários: <Text style={styles.text}></Text>
            </Text>
          </View>
        </View>
        <View style={styles.containerTabs}>
          <TabsAds />
        </View>
        <View>
          {subComponents === 0 ? (
            <AboutUs />
          ) : subComponents === 1 ? (
            <>
              <Media />

            </>
          ) : (
            ""
          )}
        </View>
      </View>
    </>
  )
}
