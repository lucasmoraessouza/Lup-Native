import { useNavigation } from "@react-navigation/native"
import { Image, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"

export function Headers() {
  const navigation = useNavigation()

  return (
    <View style={styles.header}>
      <View style={styles.containerMenu}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.menu}
            source={require("../../assets/images/home/menu.png")}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/newLogo.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.containerMenu}>
        {/* <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image
                style={styles.menu}
                source={require("../../assets/images/home/menu.png")}
                resizeMode="contain"
              />
            </TouchableOpacity> */}
      </View>
    </View>
  )
}
