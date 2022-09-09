import { StyleSheet } from "react-native"
import { theme } from '../../../../global/styles/theme'

export const styles = StyleSheet.create({
    buttonAdd: {
        width: 140,
        borderRadius: 25,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.on,
    },
    buttonAddText: {
        color: theme.colors.white,
        fontSize: 18,
        fontFamily: theme.fonts.title600,
    },

    buttonDelete: {
        width: 140,
        borderRadius: 25,
        paddingVertical: 10,
        justifyContent: "center",
        alignItems: "center",
        borderColor: theme.colors.line,
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 22,
        marginRight: 10,
    },
    buttonDeleteText: {
        color: theme.colors.line,
        fontSize: 15,
        fontFamily: theme.fonts.title600,
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
        color: theme.colors.gray,
        padding: 5

    },
    inputAndLabel: {
        flexDirection: 'column'
    },
    smallInput: {
        width: 152,
        borderColor: theme.colors.light_gray,
        borderWidth: 1,
        borderRadius: 10,
        height: 45,
        marginBottom: 12,
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        color: theme.colors.gray,

        padding: 5
    },

    containerInputsInRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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