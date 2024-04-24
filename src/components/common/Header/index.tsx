import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { distanceHorizontal } from "../../../utils/Define";
import { IconArrowBack } from "../../../../assets/icons";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { textSizeStyle } from "../TextSize";

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
        <IconArrowBack />
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
  },
  title: {
    ...textSizeStyle.biggest,
    fontWeight: "600",
    flexShrink: 1,
  },
});
