import { View, Image, TextInput, TouchableOpacity, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { theme } from "../../global/styles/theme"
import { useNavigation } from "@react-navigation/native"
import * as Animatable from "react-native-animatable"
import { useState } from "react"
import { api } from "../../services"
import { StateGlobal } from "../../context/context"
import Toast from "react-native-toast-message"
import { Button } from "../../components/Button"
import AsyncStorage from "@react-native-async-storage/async-storage"

export function Login() {
  const navigation = useNavigation()
  const { primary, secondary } = theme.colors
  const [email, setEmail] = useState("jonhwick@gmail.com")
  const [password, setPassword] = useState("123123")
  const [isLoading, setIsLoading] = useState(false)
  const { setIsAuthenticated } = StateGlobal()

  const showToast = ({ type, title, text }) => {
    Toast.show({
      type,
      text1: title,
      text2: text ? text : "",
    })
  }

  async function handleSubmit() {
    try {
      setIsLoading(true)
      const res = await api.post("api/anunciante/login", {
        email,
        password,
      })

      if (res.data.error === "false") {
        showToast({
          type: res.data.error === "false" ? "success" : "error",
          title: res.data.message,
        })
        setTimeout(() => {
          AsyncStorage.setItem("token", res.data.token)
          setIsAuthenticated(true)
          setIsLoading(false)
        }, 500)
      } else {
        setIsLoading(false)
        // setIsAuthenticated(false)
        showToast({
          type: res.data.error === "true" ? "error" : "success",
          title: res.data.message,
        })
      }
    } catch (err) {
      setIsLoading(false)
      console.log("err", err)
    }
  }

  return (
    <Animatable.View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={[secondary, primary]}
        start={{ x: 0.0, y: 0.45 }}
        end={{ x: 1, y: 0 }}
      >
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
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            placeholderTextColor={theme.colors.white}
            value={password}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={true}
          />
          <Text
            style={styles.passwordText}
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            Esqueci minha senha
          </Text>
          <Button
            text="Entrar"
            onPress={handleSubmit}
            isLoading={isLoading}
            disabled={isLoading}
          />
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
        </Animatable.View>
      </LinearGradient>
    </Animatable.View>
  )
}
