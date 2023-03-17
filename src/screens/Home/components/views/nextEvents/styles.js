import { StyleSheet } from "react-native"
export const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
    // flex: 1,
    flexDirection: "column",
    zIndex: 5,
  },
  filter: {
    flex: 1,
    backgroundColor: "red",
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 60,
    // width: "100%",
    zIndex: 10,
    justifyContent: "space-between",
    // marginBottom: 100,
  },
  picker: {
    // height: 30,
    width: 150,
    // flex: 1,
    // margin: "0 5px",
    padding: 0,
  },
})
