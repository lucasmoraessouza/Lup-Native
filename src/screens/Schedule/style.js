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
    marginTop: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
})
