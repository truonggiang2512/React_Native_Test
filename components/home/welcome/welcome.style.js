import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  introTag_position: {
    position: "absolute", bottom: 60, right: 30, zIndex: 2
  },
  introTag_background: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 41,
    width: 91,
    gap: 5,
    borderRadius: 10,
  },
  introTag_flex: {
    flex: 1, alignSelf: "center"
  },
  introTag_text: {
    color: "green", fontSize: SIZES.small
  },
  intro_background: {
    backgroundColor: "#00C366"
  },
  intro_container: {
    padding: 20
  },
  intro_flex: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  intro_item: {
    width: 48,
    height: 48,
    borderColor: "white",
    backgroundColor: "white",
    borderRadius: 30,
  },
  intro_title: {
    color: "white", fontSize: SIZES.medium
  },
  intro_text: {
    color: "white", fontSize: SIZES.small
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: -65,
    height: 40,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.medium,
    height: "100%",

  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: 250
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: "center",
    gap: 10
  },
  iconContainer: {
    paddingRight: 30
  },

});

export default styles;
