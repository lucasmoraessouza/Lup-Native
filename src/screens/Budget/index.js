import { View, Image } from "react-native"
import { theme } from "../../global/styles/theme"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./style"
import { StateGlobal } from "../../context/context"
import { TabsBudget } from "./components/tabs"
import { Historic } from "./components/views/historic"
import { Summary } from "./components/views/summary"
import { Header } from "../../components/Header"

export function Budget() {
  const { primary, secondary } = theme.colors
  const { subComponents } = StateGlobal()

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
          <TabsBudget />

          {subComponents === 0 ? (
            <Historic />
          ) : subComponents === 1 ? (
            <Summary />
          ) : (
            ""
          )}
        </View>
      </LinearGradient>
    </View>
  )
}
