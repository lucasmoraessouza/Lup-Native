import { View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { Headers } from "../../components/Header"
import { styles } from "./style"
import { theme } from "../../global/styles/theme"

export function Schedule() {
  const { primary, secondary } = theme.colors

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={[secondary, primary]}
        start={{ x: 0.0, y: 0.45 }}
        end={{ x: 1, y: 0 }}
      >
        <Headers />

        <View style={styles.containerTab}>
          
        </View>

      </LinearGradient>
    </View>
  )
}