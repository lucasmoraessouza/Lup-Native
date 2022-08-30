import { View, Image, TextInput, TouchableOpacity, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { theme } from "../../global/styles/theme"
import { useNavigation } from "@react-navigation/native"

export function Login() {
  const navigation = useNavigation()
  const { primary, secondary } = theme.colors

  return (
    <View style={styles.container}>
      <LinearGradient style={styles.linear} colors={[primary, secondary]}>
        <View style={styles.header}>
          <Image
            source={require("../../assets/images/Logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.containerForm}>
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            placeholderTextColor="#FFF"
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            placeholderTextColor="#FFF"
          />
          <Text style={styles.passwordText}>Esqueci minha senha</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.infoText}>Ou faça login usando</Text>
          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.buttonFacebook}>
              <Text style={styles.buttonTextFacebook}>Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonGoogle}>
              <Text style={styles.buttonTextGoogle}>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerText}>
            <Text style={styles.infoText}>Não tem uma conta?</Text>
            <Text
              style={styles.boldText}
              onPress={() => navigation.navigate("Register")}
            >
              Clique aqui
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  )
}
