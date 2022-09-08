import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 120,
    },
    linear: {
        width: "100%",
    },
    header: {
        alignItems: "center",
    },
    logo: {
        width: 80,
        height: 80,
    },
    containerLogoCompany: {
        alignItems: 'center',
        marginVertical: 10,
    },
    logoCompany: {
        width: 120,
        height: 120
    },
    textPhoto: {
        fontFamily: theme.fonts.title600,
        fontSize: 14,
        color: theme.colors.on,
        marginTop: 10,
    },
    content: {
        backgroundColor: theme.colors.white,
        width: "100%",
        marginTop: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 35,
        paddingVertical: 35
    },
    title: {
        color: theme.colors.primary,
        fontFamily: theme.fonts.title600,
        fontSize: 24,
        marginBottom: 10,
    },
    subtitle: {
        fontFamily: theme.fonts.title700,
        fontSize: 18,
        color: theme.colors.purple,
        marginTop: 10,
    },
    form: {
        marginVertical: 10,
    },
    label: {
        color: theme.colors.gray,
        fontSize: 13,
        fontFamily: theme.fonts.text400,
        marginBottom: 5,
    },
    input: {
        borderColor: theme.colors.light_gray,
        borderWidth: 1,
        borderRadius: 10,
        height: 45,
        marginBottom: 12,
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        color: theme.colors.white,
    },
    button: {
        backgroundColor: theme.colors.on,
        width: "100%",
        borderRadius: 25,
        paddingVertical: 15,
        marginTop: 25,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
    },
    buttonOutlined: {
        background: 'transparent',
        color: theme.colors.line,
        fontSize: 14,
        borderColor: theme.colors.line,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 22,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,

    },
    buttonText: {
        color: theme.colors.white,
        fontSize: 20,
        fontFamily: theme.fonts.title600,
    },
    buttonTextOutlined: {
        color: theme.colors.line,
        fontSize: 20,
        fontFamily: theme.fonts.title600,
    },
    textAreaContainer: {
        borderColor: theme.colors.light_gray,
        borderRadius: 22,
        borderWidth: 1,
        padding: 5
    },
    textArea: {
        height: 120,
        justifyContent: "flex-start"
    },
    textEnd: {
        fontFamily: theme.fonts.text400,
        fontSize: 13,
        color: theme.colors.gray,
        textAlign: 'right'
    }

})
