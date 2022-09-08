import { View, Image, TextInput, TouchableOpacity, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { theme } from "../../global/styles/theme"
import { useNavigation } from "@react-navigation/native"
import * as Animatable from 'react-native-animatable'

export function Login() {
  const navigation = useNavigation()
  const { primary, secondary } = theme.colors

  return (
    <Animatable.View style={styles.container} >
      <LinearGradient style={styles.linear} colors={[secondary, primary]} start={{ x: 0.0, y: 0.45 }} end={{ x: 1, y: 0 }}>
        <Animatable.View style={styles.header} animation="flipInY" delay={600}>
          <Image
            style={styles.logo}
            source={require("../../assets/images/Logo.png")}
          />
        </Animatable.View>
        <Animatable.View style={styles.containerForm} animation="fadeInUp">
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            placeholderTextColor={theme.colors.white}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            placeholderTextColor={theme.colors.white}
          />
          <Text style={styles.passwordText} onPress={() => navigation.navigate("ForgotPassword")}>Esqueci minha senha</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <Text style={styles.infoText} >Ou faça login usando</Text>
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
        </Animatable.View>
      </LinearGradient>
    </Animatable.View>
  )
}
