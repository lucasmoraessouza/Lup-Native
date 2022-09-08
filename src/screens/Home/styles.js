import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linear: {
    width: "100%",
  },
  header: {
    marginTop: 35,
    flexDirection: "row",
    alignItems: "center",
  },

  logo: {
    width: 80,
    height: 80,
  },

  containerLogo: {
    width: "50%",
    alignItems: "center",

  },

  containerMenu: {
    width: "25%",
    alignItems: "center",
  },

  menu: {
    width: 50,
    height: 50,
  },

  containerTabs: {
    backgroundColor: "#fff",
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
