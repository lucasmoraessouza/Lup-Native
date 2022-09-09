import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    buttonPlus: {
        width: 140,
        borderRadius: 25,
        paddingVertical: 10,
        marginTop: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.line,
    },
    buttonPlusText: {
        color: theme.colors.white,
        fontSize: 15,
        fontFamily: theme.fonts.text400,
    },

    buttonCancel: {
        width: 140,
        borderRadius: 25,
        paddingVertical: 10,
        marginTop: 8,
        justifyContent: "center",
        alignItems: "center",
        borderColor: theme.colors.gray,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 22,
        marginRight: 10,
    },
    buttonCancelText: {
        color: theme.colors.gray,
        fontSize: 15,
        fontFamily: theme.fonts.text400,
    },

    modalBackground: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000070",
    },

    modalContainer: {
        width: "85%",
        backgroundColor: theme.colors.white,
        padding: 20,
        borderRadius: 25,
    },

    containerPhoto: {
        alignItems: "center",
    },

    containerModalBtn: {
        flexDirection: "row",
        justifyContent: 'center',
    },

    title: {
        fontSize: 18,
        fontFamily: theme.fonts.title600,
        color: theme.colors.gray
    },
    content: {
        paddingVertical: 30,
    },
    text: {
        fontFamily: theme.fonts.title600,
        fontSize: 14,
        color: theme.colors.gray,
        textAlign: 'center'
    }
})