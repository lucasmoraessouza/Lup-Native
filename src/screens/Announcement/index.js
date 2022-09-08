import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import { theme } from "../../global/styles/theme"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from "./styles"
import { ScrollView } from "react-native-gesture-handler"
import { Header } from "../../components/Header"

export function Announcement() {
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
                    <Header/>
                </View>
                <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

                    <Text style={styles.title}>Atualizar anúncio</Text>
                    <View style={styles.containerLogoCompany}>
                        <Image
                            resizeMode="contain"
                            style={styles.logoCompany}
                            source={require("../../assets/images/LogoFornecedor.png")}
                        />
                        <Text style={styles.textPhoto}> Alterar foto</Text>
                    </View>
                    <Text style={styles.subtitle}>Dados da empresa</Text>
                    <View style={styles.form}>
                        <Text style={styles.label}>Nome</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.label}>Tipo de serviço</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.label}>Contato</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.label}>Localização</Text>
                        <TextInput style={styles.input} />

                    </View>
                    <Text style={styles.subtitle}>Descrição</Text>
                    <View style={styles.form}>
                        <Text style={styles.label}>Sobre nós</Text>
                        <View style={styles.textAreaContainer}>
                            <TextInput style={styles.textArea} multiline={true}
                                numberOfLines={4} />
                        </View>
                        <Text style={styles.textEnd}>Até 500 caracteres</Text>
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
