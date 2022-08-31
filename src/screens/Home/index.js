import { View, Text, Image } from "react-native"
import { theme } from "../../global/styles/theme"
import { LinearGradient } from "expo-linear-gradient"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"

export function Home() {
  const navigation = useNavigation()
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
          />
        </View>
        <View style={styles.sectionTabs}>
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "80%",
                height: 100,
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text>Solicitações</Text>
              </View>
              <View>
                <Text>Próximos Eventos</Text>
              </View>
              <View>
                <Text>Meu Anúncio</Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}
