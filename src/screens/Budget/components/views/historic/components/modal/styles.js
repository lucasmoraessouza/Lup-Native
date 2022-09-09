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
    height: "90%",
  },

  modalContainerDelete: {
    width: "95%",
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 25,
    height: "auto",
  },

  containerCloseModal: {
    width: "100%",
    alignItems: "flex-end",
    height: 25,
  },

  closeModal: {
    width: 40,
    height: 40,
    fontFamily: theme.fonts.title700,
    color: theme.colors.purple,
    fontSize: 25,
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
    marginTop: 10,
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
    flexDirection: "row",
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
    fontSize: 18,
    fontFamily: theme.fonts.title700,
  },

  buttonCancel: {
    flexDirection: "row",
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
    fontSize: 18,
    fontFamily: theme.fonts.title700,
  },

  iconSpace: {
    margin: 5,
  },

  containerPhoto: {
    alignItems: "center",
  },

  title: {
    fontSize: 18,
    fontFamily: theme.fonts.title600,
    color: theme.colors.gray,
  },

  content: {
    paddingVertical: 30,
  },
  text: {
    fontFamily: theme.fonts.title600,
    fontSize: 14,
    color: theme.colors.gray,
    textAlign: "center",
  },

  containerModalBtn: {
    flexDirection: "row",
    justifyContent: 'center',
},

modalButtonCancel: {
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
modalButtonCancelText: {
  color: theme.colors.gray,
  fontSize: 15,
  fontFamily: theme.fonts.text400,
},

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


})
