import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "../tabs/styles"
import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { StateGlobal } from "../../../../context/context"

export function Tabs() {
  const navigation = useNavigation()
  const { components, setComponents } = StateGlobal()

  return (
    <View style={styles.sectionTabs}>
      <View style={styles.sectionTabsAline}>
        <TouchableOpacity
          onPress={() => {
            setComponents(0)
          }}
        >
          <View
            style={components === 0 ? styles.cardTabsBorder : styles.cardTabs}
          >
            <Image
              style={styles.iconsTabs}
              source={require("../../../../assets/images/home/envelope.png")}
              resizeMode="contain"
            />
            <Text style={styles.textTabs}>Solicitações</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setComponents(1)
          }}
        >
          <View
            style={components === 1 ? styles.cardTabsBorder : styles.cardTabs}
          >
            <Image
              style={styles.iconsTabs}
              source={require("../../../../assets/images/home/heart.png")}
              resizeMode="contain"
            />
            <Text style={styles.textTabs}>Próximos Eventos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setComponents(2)
          }}
        >
          <View
            style={components === 2 ? styles.cardTabsBorder : styles.cardTabs}
          >
            <Image
              style={styles.iconsTabs}
              source={require("../../../../assets/images/home/user.png")}
              resizeMode="contain"
            />
            <Text style={styles.textTabs}>Meu Anúncio</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
