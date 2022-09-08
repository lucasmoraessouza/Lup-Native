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
        marginTop: 35,
        alignItems: "center",
    },
    logo: {
        width: 80,
        height: 80,
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
    containerProductsAndServices: {
        marginTop: 20,
    },
    containerPaymentMethods: {
        marginTop: 20,
    },
    textMoreProducts: {
        marginTop: 10,
        fontFamily: theme.fonts.title600,
        fontSize: 14,
        lineHeight: 19,
        color: theme.colors.primary,
        textAlign: 'center'
    },
    textInfoPayment: {
        marginTop: 10,
        marginBottom: 5,
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.gray,
        lineHeight: 17
    },
    button: {
        backgroundColor: theme.colors.on,
        width: 160,
        height: 50,
        borderRadius: 25,
        paddingVertical: 15,
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
    },
    buttonOutlined: {
        width: 160,
        height: 50,
        background: 'transparent',
        color: theme.colors.on,
        fontSize: 14,
        borderColor: theme.colors.on,
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 25,
        paddingVertical: 15,

        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center'
    },
    textAreaContainer: {
        borderColor: theme.colors.light_gray,
        borderRadius: 22,
        borderWidth: 1,
        padding: 5,
    },
    textArea: {
        height: 80,
        justifyContent: "flex-start",
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
    },
    buttonText: {
        color: theme.colors.white,
        fontSize: 20,
        fontFamily: theme.fonts.title600,
    },
    buttonTextOutlined: {
        color: theme.colors.on,
        fontSize: 20,
        fontFamily: theme.fonts.title600,
    },
    containerCancel: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 170,
        marginTop: 20

    },
    textCancel: {
        fontFamily: theme.fonts.title600,
        fontSize: 15,
        color: theme.colors.line,
        alignSelf: 'center',
        marginLeft: 8
    },

})
