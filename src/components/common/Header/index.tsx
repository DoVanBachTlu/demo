import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { distanceHorizontal } from "../../../utils/Define";
import SVGIcon from "../../../../assets/icons";
import { CommonActions, useNavigation } from "@react-navigation/native";

interface Props {
  headerTitle?: string;
  containerStyle?: any;
}
export default function Header(props: Props): React.ReactNode {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, props.containerStyle]}>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(CommonActions.goBack());
        }}
      >
        <SVGIcon.IconArrowBack />
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={1}>
        {props.headerTitle}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: distanceHorizontal,
    backgroundColor: "white",
    paddingTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    flexShrink: 1,
  },
});
