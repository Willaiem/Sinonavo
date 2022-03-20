import { typeAsDripsyStyles } from "../../utils/typeAsDripsyStyles";

export const styles = typeAsDripsyStyles({
  outerModal: {
    flex: 1,
  },
  innerModal: {
    flexDirection: "row",
    flexWrap: "wrap",
    margin: 10
  },
  innerModalInput: {
    borderWidth: 1,
    width: "80%",
    marginLeft: 15
  }
})
