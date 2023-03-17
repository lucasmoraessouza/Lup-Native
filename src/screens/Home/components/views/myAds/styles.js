import { StyleSheet } from "react-native";
import { theme } from '../../../../../global/styles/theme'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingHorizontal: 40,

    },
    header: {
        flexDirection: 'row',
        paddingVertical: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    logo: {
        width: 116,
        height: 116,
        borderRadius: 116 / 2
    },
    contentHeader: {
        flexDirection: 'column',
    },
    title: {
        color: theme.colors.primary,
        fontFamily: theme.fonts.title600,
        fontSize: 18,
    },
    subtitle: {
        color: theme.colors.gray,
        fontFamily: theme.fonts.title600,
        fontSize: 13,
    },
    text: {
        color: theme.colors.gray,
        fontFamily: theme.fonts.text400,
        fontSize: 13,
    },
    containerTabs: {
        flexDirection: 'row'
    }
})