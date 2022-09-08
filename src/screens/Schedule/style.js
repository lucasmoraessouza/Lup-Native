import { StyleSheet } from "react-native"
import { theme } from "../../global/styles/theme"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linear: {
    width: "100%",
  },

  containerTab: {
    backgroundColor: theme.colors.white,
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingBottom: 230,
    paddingTop: 25
  },

  containerSchedule: {
    marginTop: 10,
  },

  title: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.title600,
    fontSize: 24,
    // marginBottom: 10,
  },

  containerTitle: {
    width: "90%",
    marginLeft: 50,
  },

  containerSubtitle: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 15,
  },

  subContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    margin: 5,
  },

  labelCircleColor1: {
    marginRight: 5,
    backgroundColor: "#9980FA",
    width: 15,
    height: 15,
    borderRadius: 50,
  },

  labelCircleColor2: {
    marginRight: 5,
    backgroundColor: "#12CBC4",
    width: 15,
    height: 15,
    borderRadius: 50,
  },

  events: {
    margin: 5,
    padding: 15,
    borderTopColor: theme.colors.gray,
    borderTopWidth: 0.5,
  },

  eventTitle: {
    marginTop: 10,
    fontFamily: theme.fonts.title600,
  },

  eventCard: {
    marginTop: 20,
    backgroundColor: theme.colors.primary,
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  eventCard2: {
    marginTop: 20,
    backgroundColor: theme.colors.secondary,
    borderRadius: 10,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textCard: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.white,
  },
})
