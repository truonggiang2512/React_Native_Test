import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    padding: 20, backgroundColor: "#00C366"
  },
  feater: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  feater_listItem: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 18,
  },
  feater_listItem_Items: {
    backgroundColor: "#EFEFEF",
    margin: 5,
    padding: 10,
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: SIZES.small
  },
});

export default styles;
