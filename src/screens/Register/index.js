import { View, Image, TextInput, TouchableOpacity, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';
import { theme } from '../../global/styles/theme';
import { useNavigation } from '@react-navigation/native'

export function Register() {
    const navigation = useNavigation()
    const { primary, secondary } = theme.colors;

    return (

        <View style={styles.container}>
            <LinearGradient
                style={styles.linear}
                colors={[primary, secondary]}
            >
                <View style={styles.header}>
                    <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />
                </View>
                <View style={styles.containerForm}>
                    <Text style={styles.infoText}>Criar nova conta</Text>
                    <TextInput placeholder='Nome Completo' style={styles.input} placeholderTextColor="#FFF" />
                    <TextInput placeholder='E-mail' style={styles.input} placeholderTextColor="#FFF" />
                    <TextInput placeholder='Senha' style={styles.input} placeholderTextColor="#FFF" />
                    <TextInput placeholder='Confirmar Senha' style={styles.input} placeholderTextColor="#FFF" />
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Criar conta</Text>
                    </TouchableOpacity>

                </View>
            </LinearGradient>
        </View>
    );
}