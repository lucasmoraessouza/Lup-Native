import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { StateGlobal } from "../../context/context"

export function TabsAds() {
  const navigation = useNavigation()
  const { subComponents, setSubComponents } = StateGlobal()

  return (
    <View style={styles.sectionTabs}>
      <View style={styles.sectionTabsAline}>
        <TouchableOpacity
          onPress={() => {
            setSubComponents(0)
          }}
        >
          <View
            style={
              subComponents === 0 ? styles.cardTabsBorder : styles.cardTabs
            }
          >
            <Image
              style={styles.iconsTabs}
              source={require("../../assets/images/home/info.png")}
              resizeMode="contain"
            />
            <Text style={styles.iconsText}>Sobre nós</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSubComponents(1)
          }}
        >
          <View
            style={
              subComponents === 1 ? styles.cardTabsBorder : styles.cardTabs
            }
          >
            <Image
              style={styles.iconsTabs}
              source={require("../../assets/images/home/media.png")}
              resizeMode="contain"
            />
            <Text style={styles.iconsText}>Fotos e Vídeos</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
