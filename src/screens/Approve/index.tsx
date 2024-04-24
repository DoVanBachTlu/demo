import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import Header from "../../components/common/Header";
import ApproveItem from "../../components/element/ApproveItem";
import { distanceHorizontal } from "../../utils/Define";
import { Colors } from "../../theme/Colors";
import { ListApprove } from "../../data/ListApprove";
import { ListFilterApprove } from "../../data/ListFilterApprove";

export default function Approve(): React.ReactNode {
  const [selectedFilterItem, setSelectFilterItem] = useState(
    ListFilterApprove[0]
  );
  const [dataApproveFiltered, setDataApproveFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleFilter = (item: any) => {
    setLoading(true);
    setSelectFilterItem(item);
  };
  useEffect(() => {
    console.log("useEffect-->", selectedFilterItem);
    const filteredData = ListApprove.filter(
      (item) => item?.parentId === selectedFilterItem?.id
    );
    setDataApproveFiltered(filteredData);
    setLoading(false);
  }, [selectedFilterItem]);
  return (
    <View style={styles.container}>
      <Header headerTitle="Phê duyệt Phê duyệt Phê duyệt Phê duyệt Phê duyệt Phê duyệt Phê duyệt Phê duyệt Phê duyệt Phê duyệt" />
      <View style={{ marginBottom: 10 }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.styleFllFilter}
          data={ListFilterApprove}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                style={[
                  styles.itemFilter,
                  {
                    marginLeft: index === 0 ? distanceHorizontal : 0,
                    backgroundColor:
                      selectedFilterItem?.id === item?.id ? "#0F6CBD" : "white",
                  },
                ]}
                key={index}
                onPress={() => handleFilter(item)}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 12,
                    fontWeight: "bold",
                    color:
                      selectedFilterItem?.id === item?.id ? "white" : "black",
                  }}
                >
                  {item?.label}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={Colors.bgButtonApprove} />
        </View>
      ) : dataApproveFiltered && dataApproveFiltered?.length > 0 ? (
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          style={styles.styleFll}
          data={dataApproveFiltered}
          renderItem={({ item, index }) => {
            return (
              <ApproveItem
                selectedFilter={selectedFilterItem}
                dataItem={item}
                key={index}
                atCommon
              />
            );
          }}
        />
      ) : (
        <View
          style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
        >
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Chưa có dữ liệu
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  styleFll: {
    flex: 1,
  },
  itemFilter: {
    borderWidth: 1,
    borderColor: "#D1D1D1",
    paddingHorizontal: 16,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    marginRight: 8,
  },
  styleFllFilter: {
    backgroundColor: "white",
    paddingVertical: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
