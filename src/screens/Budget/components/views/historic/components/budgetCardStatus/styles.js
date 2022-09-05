import { StyleSheet } from "react-native"
import { theme } from "../../../../../../../global/styles/theme"

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
    width: "90%",
    height: 150,
    backgroundColor: theme.colors.white,
    borderRadius: 20,
    padding: 20,
    boxShadow: "0px 0px 4px 1px #00000054",
  },

  containerInfo: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  titleInfo: {
    fontSize: 16,
    fontFamily: theme.fonts.title600,
  },

  titleInfoStatus: {
    fontSize: 16,
    fontFamily: theme.fonts.title600,
    color: "#C4E538",
  },

  subTitleInfoBold: {
    fontSize: 15,
    fontFamily: theme.fonts.text400,
    fontWeight: "bold",
    marginRight: 5,
  },

  subTitleInfo: {
    fontSize: 15,
    fontFamily: theme.fonts.text400,
  },

  containerBtn: {
    alignItems: "flex-end",
  },

  buttonPlus: {
    width: 140,
    borderRadius: 25,
    paddingVertical: 5,
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C4E538",
  },
  buttonPlusText: {
    color: "#5F5F5F",
    fontSize: 40,
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
    backgroundColor: "#00000025",
  },

  modalContainer: {
    width: "85%",
    backgroundColor: theme.colors.white,
    padding: 20,
    borderRadius: 25,
  },

  containerModalBtn: {
    flexDirection: "row",
  },

  rowStyleInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
})
