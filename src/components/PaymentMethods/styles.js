import { StyleSheet } from "react-native"
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    shadowProp: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: "center",
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "#171717",
        shadowOpacity: 0.2,
        shadowRadius: 3,
        // boxShadow: "0px 0px 4px 1px #00000054",
    },
    containerCard: {
        width: "100%",
        backgroundColor: theme.colors.white,
        borderRadius: 20,
        paddingHorizontal: 35,
        paddingVertical: 15,
        boxShadow: "0px 0px 4px 1px #00000054",
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    circle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: theme.colors.white,
        borderWidth: 1,
        borderColor: theme.colors.light_gray
    },
    title: {
        fontFamily: theme.fonts.title600,
        fontSize: 18,
        color: theme.colors.gray,
    }
})