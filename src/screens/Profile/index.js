import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import { theme } from "../../global/styles/theme"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { ScrollView } from "react-native-gesture-handler"
import { Header } from "../../components/Header"
import { StateGlobal } from '../../context/context'
import { api } from "../../services"
import Toast from 'react-native-toast-message'
import { ButtonGreen } from "../../components/ButtonGreen"
import { useState } from "react"
import { useNavigation } from "@react-navigation/native"
export function Profile() {
  const { primary, secondary } = theme.colors
  const [isLoading, setIsLoading] = useState(false)
  const { setDataUser, dataUser, setComponents } = StateGlobal()
  const navigation = useNavigation()

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
      const res = await api.put('api/anunciante/update', dataUser)
      if (res.data.error === "false") {
        showToast({ type: res.data.error === 'false' ? 'success' : 'error', title: res.data.message })
        setIsLoading(false)
      } else {
        setIsLoading(false)
        showToast({ type: res.data.error === 'true' ? 'error' : 'success', title: res.data.message })
      }
      console.log('res', res)
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linear}
        colors={[secondary, primary]}
        start={{ x: 0.0, y: 0.45 }}
        end={{ x: 1, y: 0 }}
      >
        <Header />

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Editar Perfil</Text>
          <Text style={styles.subtitle}>Dados pessoais</Text>
          <View style={styles.form}>
            <Text style={styles.label}>Nome</Text>
            <TextInput style={styles.input} value={dataUser?.name} onChangeText={(value) => setDataUser({ ...dataUser, name: value })} />
            <Text style={styles.label}>Telefone</Text>
            <TextInput style={styles.input} value={dataUser?.telefone} onChangeText={(value) => setDataUser({ ...dataUser, telefone: value })} />
            <Text style={styles.label}>Celular</Text>
            <TextInput style={styles.input} value={dataUser?.celular} onChangeText={(value) => setDataUser({ ...dataUser, celular: value })} />
            <Text style={styles.label}>E-mail</Text>
            <TextInput style={styles.input} value={dataUser?.email} onChangeText={(value) => setDataUser({ ...dataUser, email: value })} />
            <Text style={styles.subtitle}>Atualizar senha</Text>
            <Text style={styles.label}>Senha atual</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Nova senha</Text>
            <TextInput style={styles.input} />
            <Text style={styles.label}>Confirmar nova senha</Text>
            <TextInput style={styles.input} />
            <View style={{ paddingBottom: 160 }}>
              <ButtonGreen text="Salvar Alterações" onPress={handleSubmit} isLoading={isLoading} disabled={isLoading} />
              <TouchableOpacity style={styles.buttonOutlined} onPress={() => navigation.navigate("Inicio")}>
                <Text style={styles.buttonTextOutlined}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  )
}
