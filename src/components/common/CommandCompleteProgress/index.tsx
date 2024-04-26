import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { distanceHorizontal } from "@utils/Define";

interface Props {
  completePercent?: number;
}
export default function CommandCompleteProgress(props: Props): React.ReactNode {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#E6E6E6",
      height: 4,
      borderRadius: 8,
      marginHorizontal: distanceHorizontal,
    },
    completeProgress: {
      width: `${props.completePercent}%`,
      flex: 1,
      borderRadius: 8,
      backgroundColor:
        props.completePercent == 100
          ? "green"
          : props.completePercent < 100 && props.completePercent >= 50
          ? "#EAA300"
          : "red",
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.completeProgress} />
    </View>
  );
}
