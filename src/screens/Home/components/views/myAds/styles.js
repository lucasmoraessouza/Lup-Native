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
        width: 100,
        height: 100,
    },
    contentHeader: {
        flexDirection: 'column',
    },
    title: {
        color: theme.colors.primary,
        fontFamily: theme.fonts.title600,
        fontSize: 20,
    },
    subtitle: {
        color: theme.colors.gray,
        fontFamily: theme.fonts.title600,
        fontSize: 15,
    },
    text: {
        color: theme.colors.gray,
        fontFamily: theme.fonts.text400,
        fontSize: 15,
    },
    containerTabs: {
        flexDirection: 'row'
    }
})