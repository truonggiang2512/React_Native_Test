import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants";

const styles = StyleSheet.create({
  footerWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 6,
    shadowColor: "#171717",
    shadowOffset: { width: 10, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    height: 60,
  },
  text: {
    color: "#13844E",
    fontSize: SIZES.small
  }

})
export default styles;