import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
    buttonPlus: {
        width: '100%',
        borderRadius: 25,
        paddingVertical: 10,
        marginTop: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.line,
    },
    buttonPlusText: {
        color: theme.colors.white,
        fontSize: 18,
        fontFamily: theme.fonts.title600,
    },

    buttonCancel: {
        width: '100%',
        borderRadius: 25,
        paddingVertical: 10,
        marginTop: 8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.on,
    },
    buttonCancelText: {
        color: theme.colors.white,
        fontSize: 18,
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
        marginTop: 10,
        flexDirection: "column",
        justifyContent: 'center',
    },

    logo: {
        marginTop: 15,
        width: 90,
        height: 90,
    },

    title: {
        fontSize: 18,
        fontFamily: theme.fonts.title600,
        color: theme.colors.gray,
        marginTop: 20,
    },
    content: {
        paddingVertical: 30,
    },
    text: {
        fontFamily: theme.fonts.title600,
        fontSize: 14,
        color: theme.colors.gray,
        textAlign: 'center'
    },
    containerInfo: {
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },
    titleInfo: {
        fontFamily: theme.fonts.title600,
        fontSize: 14,
        color: theme.colors.primary
    },
    textInfo: {
        fontFamily: theme.fonts.title600,
        fontSize: 12,
        color: '#A8A8A8',
        marginBottom: 10
    },
    containerModalInfo: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 20,
        paddingBottom: 5,
    },

    subCardInfo: {
        width: "40%",
        alignItems: "flex-start",
        justifyContent: "flex-start",
    },

    cardInfoTitle: {
        fontFamily: theme.fonts.title600,
        fontSize: 13,
        color: theme.colors.gray
    },
    cardInfoSubtitle: {
        fontFamily: theme.fonts.title400,
        fontSize: 13,
        color: theme.colors.gray
    }
})