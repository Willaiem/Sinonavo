import { Dimensions } from "react-native"
import { typeAsDripsyStyles } from "../../utils/typeAsDripsyStyles"

//! this prevents items from moving off the screen
const offscreenDifference = 30

const deviceWidth = Dimensions.get("window").width

export const styles = typeAsDripsyStyles({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: deviceWidth - offscreenDifference,
    marginTop: 10,
  },
})
