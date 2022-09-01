import { StyleSheet } from "react-native"
import { theme } from "../../../../../../../global/styles/theme"

export const styles = StyleSheet.create({
  titleInfo: {
    fontSize: 20,
    fontFamily: theme.fonts.title600,
  },

  subTitleInfo: {
    fontSize: 15,
    fontFamily: theme.fonts.text400,
  },

  imgClient: {
    width: 100,
    height: 100,
    marginTop: 10,
    marginBottom: 10,
  },

  containerBtn: {
    alignItems: "flex-end",
  },

  buttonPlus: {
    width: 140,
    borderRadius: 25,
    paddingVertical: 10,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C4E538",
  },
  buttonPlusText: {
    color: theme.colors.white,
    fontSize: 15,
    fontFamily: theme.fonts.text400,
  },

  buttonCancel: {
    width: 140,
    borderRadius: 25,
    paddingVertical: 10,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#a8a8a8",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 22,
    marginRight: 10,
  },
  buttonCancelText: {
    color: "#a8a8a8",
    fontSize: 15,
    fontFamily: theme.fonts.text400,
  },

  modalBackGround: {
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
  },
})
