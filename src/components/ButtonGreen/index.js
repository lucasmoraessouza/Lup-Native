import { TouchableOpacity, Text, ActivityIndicator } from "react-native"
import { theme } from '../../global/styles/theme'
import { styles } from './styles'

export function ButtonGreen({ text, onPress, isLoading = false, disabled }) {
    const opacity = disabled ? 0.5 : 1

    return (
        <>
            <TouchableOpacity onPress={onPress} style={[styles.button, { opacity }]} disabled={isLoading || disabled}>
                {isLoading ? <ActivityIndicator color={theme.colors.secondary} /> :
                    <Text style={styles.buttonText}>{text}</Text>}
            </TouchableOpacity>
            
        </>
    )
}