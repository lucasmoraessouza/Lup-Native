import { StyleSheet } from "react-native"
import { theme } from '../../../../../global/styles/theme'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        flexDirection: "row"
    },
    time: {
        width: '10%',
        textAlign: 'center',
        color: '#5F5F5F',
        borderRadius: 13,
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: -5,
    },
})
