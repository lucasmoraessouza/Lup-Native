import { View, Image, TextInput, TouchableOpacity, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { theme } from "../../global/styles/theme"
import * as Animatable from 'react-native-animatable'
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import { api } from '../../services'
import Toast from 'react-native-toast-message'
import { Button } from "../../components/Button"

export function Register() {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [aux_password, setAux_password] = useState('')
  const [data_user, setData_user] = useState({
    name: '',
    email: '',
    password: ''
  })
  const { primary, secondary } = theme.colors

  const showToast = ({ type, title, text }) => {
    Toast.show({
      type,
      text1: title,
      text2: text ? text : ''
    });
  }

  async function handleSubmit() {
    try {
      setIsLoading(true)
      setDisabled(true)
      const res = await api.post('api/anunciante/register', data_user)
      if (res.data.error === "false") {
        showToast({ type: res.data.error === 'false' ? 'success' : 'error', title: res.data.message })
        setTimeout(() => {
          navigation.navigate("Login")
          setIsLoading(false)
          setDisabled(false)
        }, 500)
      } else {
        showToast({ type: res.data.error === 'true' ? 'error' : 'success', title: res.data.message })
        setIsLoading(false)
        setDisabled(false)

      }
    } catch (err) {
      setIsLoading(false)
      console.log(err)
    }
  }

  function isButtonDisabled() {
    if (data_user.name !== '' && data_user.email !== '' && data_user.password !== '' && data_user.password === aux_password) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  useEffect(() => {
    isButtonDisabled()
  }, [data_user, aux_password])

  return (
    <Animatable.View style={styles.container} >
      <LinearGradient style={styles.linear} colors={[secondary, primary]} start={{ x: 0.0, y: 0.45 }} end={{ x: 1, y: 0 }}>
        <Animatable.View style={styles.header} animation="flipInY" delay={600}>
          <Image
            source={require("../../assets/images/Logo.png")}
            style={styles.logo}
          />
        </Animatable.View >
        <Animatable.View style={styles.containerForm} animation="fadeInUp">
          <Text style={styles.infoText}>Criar nova conta</Text>
          <TextInput
            placeholder="Nome Completo"
            style={styles.input}
            placeholderTextColor={theme.colors.white}
            value={data_user.name}
            onChangeText={(value) => setData_user({ ...data_user, name: value })}
          />
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            placeholderTextColor={theme.colors.white}
            value={data_user.email}
            onChangeText={(value) => setData_user({ ...data_user, email: value })}

          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            placeholderTextColor={theme.colors.white}
            value={data_user.password}
            onChangeText={(value) => setData_user({ ...data_user, password: value })}
            secureTextEntry={true}

          />
          <TextInput
            placeholder="Confirmar Senha"
            style={styles.input}
            placeholderTextColor={theme.colors.white}
            value={aux_password}
            onChangeText={(value) => setAux_password(value)}
            secureTextEntry={true}

          />
          <Button text="Criar conta" onPress={handleSubmit} isLoading={isLoading} disabled={disabled} />
          <TouchableOpacity style={styles.buttonOutlined} onPress={() => navigation.navigate("Login")}>
            <Text style={styles.buttonTextOutlined} >Voltar</Text>
          </TouchableOpacity>
        </Animatable.View>
      </LinearGradient>
    </Animatable.View>
  )
}
