import { StyleSheet } from "react-native"

const backgroundColor = "#fff"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  textArea: {
    width: 200,
    textAlignVertical: "top",
    borderWidth: 1,
  },
  textAreaContainer: {
    marginTop: 100,
  },
})
