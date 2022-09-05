import { StyleSheet } from "react-native"
import { theme } from "../../../../global/styles/theme"

export const styles = StyleSheet.create({
  sectionTabs: {
    width: "100%",
    alignItems: "center",
  },

  sectionTabsAline: {
    flexDirection: "row",
    width: "70%",
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

  iconsTabs: {
    width: 35,
    height: 35,
    marginBottom: 3,
  },

  iconsText: {
    color: theme.colors.gray,
    fontFamily: theme.fonts.title600,
    fontSize: 14,
    lineHeight: 16,
  },

  title: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.title600,
    fontSize: 24,
    marginBottom: 5,
    marginTop: 40,
  },

  containerTitle: {
    width: '90%',
    marginLeft: 50
  },
})
