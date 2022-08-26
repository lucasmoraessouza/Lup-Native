import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";
export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    linear: {
        width: '100%',
        height: '100%',
    },
    header: {
        marginTop: 40,
        marginBottom: 60,
        alignItems: "center",

    },
    logo: {
        width: 180,
        height: 180,
        borderRadius: 8,
    },
    containerForm: {
        flex: 1,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '7%',
        paddingEnd: '7%',
    },
    input: {
        borderColor: theme.colors.white,
        borderBottomWidth: 1,
        height: 60,
        marginBottom: 12,
        fontSize: 16,
        fontFamily: theme.fonts.text400,
        color: theme.colors.white
    },
    passwordText: {
        alignSelf: 'flex-end',
        color: theme.colors.white,
        fontSize: 14,
        fontFamily: theme.fonts.text400,
        marginBottom: 30,
    },
    button: {
        backgroundColor: theme.colors.white,
        width: '100%',
        borderRadius: 25,
        paddingVertical: 15,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: theme.colors.secondary,
        fontSize: 20,
        fontFamily: theme.fonts.title700
    },
    infoText: {
        marginTop: 30,
        alignSelf: 'center',
        color: theme.colors.white,
        fontSize: 18,
        fontFamily: theme.fonts.text400
    },
    containerButtons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: '3%',
        paddingEnd: '3%',
        marginTop: 10
    },
    buttonFacebook: {
        backgroundColor: '#3B5998',
        width: 160,
        borderRadius: 25,
        paddingVertical: 15,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonGoogle: {
        backgroundColor: theme.colors.white,
        width: 160,
        borderRadius: 25,
        paddingVertical: 15,
        marginTop: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonTextFacebook: {
        color: theme.colors.white,
        fontSize: 20,
        fontFamily: theme.fonts.title700
    },
    buttonTextGoogle: {
        color: '#828282',
        fontSize: 20,
        fontFamily: theme.fonts.title700
    },
    boldText: {
        marginTop: 30,
        marginLeft: 5,
        alignSelf: 'center',
        color: theme.colors.white,
        fontSize: 18,
        fontFamily: theme.fonts.title700
    },
    containerText: {
        flexDirection: 'row',
        justifyContent: 'center'
    }
});
