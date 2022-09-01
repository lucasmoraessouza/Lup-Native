import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    text: {
        fontFamily: theme.fonts.text400,
        fontSize: 16,
        lineHeight: 19,
        color: theme.colors.gray,
        textAlign: 'justify',
    }
})