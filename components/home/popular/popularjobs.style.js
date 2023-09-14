import { StyleSheet } from "react-native";

import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    marginTop: SIZES.large,
    marginRight: SIZES.small,
    marginLeft: SIZES.small

  },
  title_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title_container_row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  title_container_text: {
    color: "#0089C4",
    fontSize: 12

  },
  list_card_container: {
    paddingTop: 10, paddingBottom: 10
  },
  list_card_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 5,
    alignItems: "center",
  },
  card: {
    backgroundColor: "#EFEFEF",
    borderRadius: 4,
    paddingVertical: 12,
    flex: 1,
  },
  numText: {
    textAlign: "center", fontSize: 14
  },
  stringText: {
    textAlign: "center", fontSize: 12
  },
});

export default styles;
