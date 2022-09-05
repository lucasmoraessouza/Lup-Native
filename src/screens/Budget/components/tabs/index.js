import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { StateGlobal } from "../../../../context/context"

export function TabsBudget() {
  const navigation = useNavigation()
  const { subComponents, setSubComponents } = StateGlobal()

  return (
    <View style={styles.sectionTabs}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Orçamentos</Text>
      </View>
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
              source={require("../../../../assets/images/budget/history.png")}
              resizeMode="contain"
            />
            <Text style={styles.iconsText}>Histórico</Text>
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
              source={require("../../../../assets/images/budget/timeline.png")}
              resizeMode="contain"
            />
            <Text style={styles.iconsText}>Resumo</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
