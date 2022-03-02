import { Dimensions, StyleSheet } from "react-native"

//! this prevents items from moving off the screen
const offscreenDifference = 30

const deviceWidth = Dimensions.get("window").width

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: deviceWidth - offscreenDifference,
    marginTop: 10,
  },
})
