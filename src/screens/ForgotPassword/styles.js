import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    linear: {
        width: "100%",
        height: "100%",
    },
    header: {
        marginTop: 40,
        marginBottom: 40,
        alignItems: "center",
    },
    logo: {
        width: 180,
        height: 180,
        borderRadius: 8,
    },
    containerForm: {
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: "7%",
        paddingEnd: "7%",
    },
    input: {
        borderColor: theme.colors.white,
        borderBottomWidth: 1,
        height: 60,
        marginBottom: 12,
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        color: theme.colors.white,
    },
    button: {
        backgroundColor: theme.colors.white,
        width: "100%",
        borderRadius: 25,
        paddingVertical: 15,
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonOutlined: {
        background: 'transparent',
        color: theme.colors.white,
        fontSize: 14,
        borderColor: theme.colors.white,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 22,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,

    },
    buttonText: {
        color: theme.colors.secondary,
        fontSize: 20,
        fontFamily: theme.fonts.title600,
    },
    buttonTextOutlined: {
        color: theme.colors.white,
        fontSize: 20,
        fontFamily: theme.fonts.title600,
    },
    infoText: {
        color: theme.colors.white,
        fontSize: 24,
        fontFamily: theme.fonts.title700,
    },
})
