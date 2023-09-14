import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import { BoxSVG } from "../../../assets/svg/BoxSVG";
import { CartSVG } from "../../../assets/svg/CartSVG";
import { CustomerSVG } from "../../../assets/svg/CustomerSVG";
import { DebtSVG } from "../../../assets/svg/DebtSVG";
import { SupportSVG } from "../../../assets/svg/SupportSVG";
import { TimeSVG } from "../../../assets/svg/TimeSVG";

import styles from "./feature.style";
const Feature = () => {
  return (
    <View style={styles.container}>
      <View style={styles.feater}>
        <View style={styles.feater_listItem}>
          <View style={styles.feater_listItem_Items}>
            <SvgXml xml={BoxSVG} width="40" height="40" alignSelf="center" />
          </View>
          <Text style={styles.text}>Tạo đơn hàng</Text>
        </View>
        <View style={styles.feater_listItem}>
          <View style={styles.feater_listItem_Items}>
            <SvgXml xml={CartSVG} width="40" height="40" alignSelf="center" />
          </View>
          <Text style={styles.text}>Giỏ hàng</Text>
        </View>
        <View style={styles.feater_listItem}>
          <View style={styles.feater_listItem_Items}>
            <SvgXml
              xml={CustomerSVG}
              width="40"
              height="40"
              alignSelf="center"
            />
          </View>
          <Text style={styles.text}>Khách hàng</Text>
        </View>
        <View style={styles.feater_listItem}>
          <View style={styles.feater_listItem_Items}>
            <SvgXml xml={TimeSVG} width="40" height="40" alignSelf="center" />
          </View>
          <Text style={styles.text}>Hiệu quả bán hàng</Text>
        </View>
        <View style={styles.feater_listItem}>
          <View style={styles.feater_listItem_Items}>
            <SvgXml xml={DebtSVG} width="40" height="40" alignSelf="center" />
          </View>
          <Text style={styles.text}>Công nợ</Text>
        </View>
        <View style={styles.feater_listItem}>
          <View style={styles.feater_listItem_Items}>
            <SvgXml
              xml={SupportSVG}
              width="40"
              height="40"
              alignSelf="center"
            />
          </View>
          <Text style={styles.text}>Trung tâm hỗ trợ</Text>
        </View>
      </View>
    </View>
  );
};

export default Feature;
