import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Header from "../../components/common/Header";
import { DetailApprove } from "../../data/DetailApprove";
import { Colors } from "../../theme/Colors";
import ApproveItem from "../../components/element/ApproveItem";

interface RouteParams {
  selectedFilter?: {
    id: number;
    label: string;
  };
  idItem?: number;
}
export default function ApproveDetail(): React.ReactNode {
  const route = useRoute();
  const { selectedFilter, idItem }: RouteParams = route.params;
  const [approveDetail, setApproveDetail] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const filterDataApproveDetail = DetailApprove?.filter(
      (item) => item?.idApprove === idItem
    );
    setApproveDetail(filterDataApproveDetail);
    setLoading(false);
  }, []);
  console.log("approveDetail", approveDetail);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header headerTitle={`Chi tiết ${selectedFilter?.label}`} />
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.bgButtonApprove} />
        </View>
      ) : (
        approveDetail?.map((item, index) => {
          return <ApproveItem key={index} atDetail dataItem={item} />;
        })
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingBottom: 16,
    borderBottomColor: "#D1D1D1",
    borderBottomWidth: 1,
    backgroundColor: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
