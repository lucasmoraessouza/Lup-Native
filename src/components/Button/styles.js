import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.white,
        width: "100%",
        height: 50,
        borderRadius: 25,
        marginTop: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: theme.colors.secondary,
        fontSize: 20,
        fontFamily: theme.fonts.title700,
    },
})