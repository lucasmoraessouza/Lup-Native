import { View, Image, TextInput, TouchableOpacity, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { theme } from "../../global/styles/theme"
import * as Animatable from 'react-native-animatable'
import { useState, useEffect } from "react"
import { api } from "../../services"
import Toast from 'react-native-toast-message'
import { Button } from "../../components/Button"

export function ForgotPassword() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')
    const [disabled, setDisabled] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
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
            const res = await api.post('api/anunciante/password_reset', {
                email
            })
            if (res.data.error === "false") {
                showToast({ type: res.data.error === 'false' ? 'success' : 'error', title: res.data.message })
                setTimeout(() => {
                    navigation.navigate("Login")
                    setIsLoading(false)
                    setDisabled(false)
                }, 500)
            } else {
                setIsLoading(false)
                setDisabled(false)
                showToast({ type: res.data.error === 'true' ? 'error' : 'success', title: res.data.message })
            }
        } catch (err) {
            setIsLoading(false)
            setDisabled(false)
            console.log('err', err)
        }
    }

    function isButtonDisabled() {
        if (email !== '') {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }

    useEffect(() => {
        isButtonDisabled()
    }, [email])

    return (
        <View style={styles.container} >
            <LinearGradient style={styles.linear} colors={[secondary, primary]} start={{ x: 0.0, y: 0.45 }} end={{ x: 1, y: 0 }}>
                <Animatable.View style={styles.header} animation="flipInY" delay={600}>
                    <Image
                        source={require("../../assets/images/Logo.png")}
                        style={styles.logo}
                    />
                </Animatable.View>
                <Animatable.View style={styles.containerForm} animation="fadeInUp">
                    <Text style={styles.infoText}>Esqueceu a senha?</Text>
                    <TextInput
                        placeholder="Email de cadastro"
                        style={styles.input}
                        placeholderTextColor={theme.colors.white}
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
                    <Button text="Enviar senha temporária" onPress={handleSubmit} isLoading={isLoading} disabled={disabled} />
                    <TouchableOpacity style={styles.buttonOutlined} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.buttonTextOutlined} >Voltar</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </LinearGradient>
        </View >
    )
}
