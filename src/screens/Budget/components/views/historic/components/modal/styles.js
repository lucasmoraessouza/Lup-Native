import { StyleSheet } from "react-native"
import { theme } from "../../../../../../../global/styles/theme"

export const styles = StyleSheet.create({
  modalBackGround: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00000070",
  },

  modalContainer: {
    width: "95%",
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 25,
    height: "80%",
  },

  containerCloseModal: {
    width: "100%",
    alignItems: "flex-end",
    marginRight: 50,
    height: 25,
  },

  closeModal: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.purple,
    fontSize: 20,
  },

  containerTitle: {
    alignItems: "center",
  },

  titleInfo: {
    fontSize: 20,
    fontFamily: theme.fonts.title700,
  },

  subTitleInfo: {
    fontSize: 20,
    fontFamily: theme.fonts.title700,
    color: theme.colors.purple,
    marginTop: 20,
  },

  infoBold: {
    fontWeight: "bold",
  },

  containerModalInfo: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 10,
    paddingBottom: 5,
  },

  subCardInfo: {
    width: "40%",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },

  subDataCardInfo: {
    width: 300,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  subDataInfo: {
    width: "auto",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    paddingRight: 12,
  },

  titleFinancial: {
    fontFamily: theme.fonts.title700,
    fontSize: 20,
    margin: 14,
  },

  containerBlur: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  button: {
    backgroundColor: theme.colors.secondary,
    width: "100%", 
    borderRadius: 25,
    paddingVertical: 15,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: 20,
    fontFamily: theme.fonts.title700,
  },

  buttonCancel: {
    backgroundColor: theme.colors.white,
    width: "100%", 
    borderRadius: 25,
    paddingVertical: 15,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTextCancel: {
    color: theme.colors.line,
    fontSize: 20,
    fontFamily: theme.fonts.title700,
  },

})
