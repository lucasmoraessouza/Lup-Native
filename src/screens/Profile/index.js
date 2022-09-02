import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import { theme } from "../../global/styles/theme"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { ScrollView } from "react-native-gesture-handler"

export function Profile() {
    const { primary, secondary } = theme.colors

    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.linear}
                colors={[secondary, primary]}
                start={{ x: 0.0, y: 0.45 }}
                end={{ x: 1, y: 0 }}
            >
                <View style={styles.header}>
                    <Image
                        style={styles.logo}
                        source={require("../../assets/images/newLogo.png")}
                        resizeMode="contain"
                    />
                </View>
                <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

                    <Text style={styles.title}>Editar Perfil</Text>
                    <Text style={styles.subtitle}>Dados pessoais</Text>
                    <View style={styles.form}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.label}>Telefone</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.label}>Celular</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.label}>E-mail</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.subtitle}>Atualizar senha</Text>
                        <Text style={styles.label}>Senha atual</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.label}>Nova senha</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.label}>Confirmar nova senha</Text>
                        <TextInput style={styles.input} />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Salvar Alterações</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonOutlined}>
                            <Text style={styles.buttonTextOutlined}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </LinearGradient>
        </View>
    )
}
