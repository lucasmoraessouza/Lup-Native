import { View, Image, TextInput, TouchableOpacity, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { useNavigation } from "@react-navigation/native"
import { theme } from "../../global/styles/theme"
import * as Animatable from 'react-native-animatable'

export function ForgotPassword() {
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
                    <Text style={styles.infoText}>Esqueceu a senha?</Text>
                    <TextInput
                        placeholder="Email de cadastro"
                        style={styles.input}
                        placeholderTextColor={theme.colors.white}
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Enviar senha temporária</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonOutlined} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.buttonTextOutlined} >Voltar</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </Animatable.View >
    )
}
