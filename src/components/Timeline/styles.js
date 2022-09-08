import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerDate: {
        justifyContent: "center",
        alignItems: 'center',
        marginRight: 15,
    },
    line: {
        flex: 1,
        width: 2,
        marginRight: 20
    },
    content: {
        marginVertical: 15,
        flex: 1,
        backgroundColor: theme.colors.primary,
        padding: 15,
        borderRadius: 10,
    },
    circle: {
        width: 10,
        height: 10,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: theme.colors.light_gray,
        alignSelf: 'center'
    },
    day: {
        marginBottom: 0,
        fontFamily: theme.fonts.title700,
        fontSize: 36,
        color: theme.colors.gray,
    },
    month: {
        marginTop: -5,
        fontFamily: theme.fonts.text400,
        fontSize: 18,
        lineHeight: 20,
        color: theme.colors.gray,

    },
    contentTitle: {
        fontFamily: theme.fonts.title600,
        fontSize: 14,
        color: theme.colors.white
    },
    contentText: {
        fontFamily: theme.fonts.text400,
        fontSize: 14,
        color: theme.colors.white
    }
})