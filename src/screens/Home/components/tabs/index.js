import { View, Text, Image, TouchableOpacity } from "react-native"
import { styles } from "../tabs/styles"
import { useNavigation } from "@react-navigation/native"

export function Tabs(props) {
  const navigation = useNavigation()

  return (
    <View style={styles.sectionTabs}>
      <View style={styles.sectionTabsAline}>
        <TouchableOpacity onPress={() => navigation.navigate("Inicio")}>
          <View style={styles.cardTabsBorder}>
            <Image
              style={styles.iconsTabs}
              source={require("../../../../assets/images/home/envelope.png")}
              resizeMode="contain"
            />
            <Text>Solicitações</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Eventos")}>
          <View style={styles.cardTabs}>
            <Image
              style={styles.iconsTabs}
              source={require("../../../../assets/images/home/heart.png")}
              resizeMode="contain"
            />
            <Text>Próximos Eventos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Anúncio")}>
          <View style={styles.cardTabs}>
            <Image
              style={styles.iconsTabs}
              source={require("../../../../assets/images/home/user.png")}
              resizeMode="contain"
            />
            <Text>Meu Anúncio</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}
