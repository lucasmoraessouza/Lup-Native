import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linear: {
    width: "100%",
  },
  header: {
    marginTop: 35,
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
  },
  containerTabs: {
    backgroundColor: theme.colors.white,
    width: "100%",
    height: "100%",
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  sectionTabs: {
    width: "100%",
    alignItems: "center",
  },

  sectionTabsAline: {
    flexDirection: "row",
    width: "90%",
    height: 120,
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardTabs: {
    alignItems: "center",
    width: 90,
  },

  cardTabs2: {
    alignItems: "center",
    width: 130,
  },

  iconsTabs: {
    width: 50,
    height: 35,
  },
})
