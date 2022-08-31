import { View, Text, Image } from "react-native"
import { theme } from "../../global/styles/theme"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { Tabs } from "../Home/components/tabs"
export function Home() {
  const { primary, secondary } = theme.colors

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={[secondary, primary]}
        start={{ x: 0.0, y: 0.45 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/newLogo.png")}
            resizeMode="contain"
          />
        </View>
        <View style={styles.containerTabs}>
          <Tabs />

          









        </View>
      </LinearGradient>
    </View>
  )
}
