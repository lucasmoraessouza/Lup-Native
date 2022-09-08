import { View, Image, TextInput, TouchableOpacity, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { theme } from "../../global/styles/theme"
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native"


export function Register() {
  const navigation = useNavigation()

  const { primary, secondary } = theme.colors

  return (
    <Animatable.View style={styles.container} animation="fadeInLeft">
      <LinearGradient style={styles.linear} colors={[secondary, primary]} start={{ x: 0.0, y: 0.45 }} end={{ x: 1, y: 0 }}>
        <Animatable.View style={styles.header} animation="flipInY" delay={600}>
          <Image
            source={require("../../assets/images/Logo.png")}
            style={styles.logo}
          />
        </Animatable.View>
        <View style={styles.containerForm}>
          <Text style={styles.infoText}>Criar nova conta</Text>
          <TextInput
            placeholder="Nome Completo"
            style={styles.input}
            placeholderTextColor={theme.colors.white}
          />
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
          <TextInput
            placeholder="Confirmar Senha"
            style={styles.input}
            placeholderTextColor={theme.colors.white}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Criar conta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonOutlined} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.buttonTextOutlined} >Voltar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </Animatable.View>
  )
}
