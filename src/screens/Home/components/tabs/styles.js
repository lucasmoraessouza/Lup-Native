import { StyleSheet } from "react-native"
import { theme } from "../../../../global/styles/theme"

export const styles = StyleSheet.create({
  sectionTabs: {
    width: "100%",
    alignItems: "center",
  },

  sectionTabsAline: {
    flexDirection: "row",
    width: "90%",
    height: 100,
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTabs: {
    alignItems: "center",
    width: "auto",
    paddingBottom: 10,
  },

  cardTabsBorder: {
    alignItems: "center",
    width: "auto",
    borderBottomColor: "#A5406E",
    borderBottomWidth: 3,
    paddingBottom: 5,
  },

  textTabs: {
    fontFamily: theme.fonts.text400,
  },

  iconsTabs: {
    width: 40,
    height: 25,
    marginBottom: 3,
  },
})
