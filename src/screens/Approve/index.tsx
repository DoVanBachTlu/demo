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
import Header from "@commonComponent/Header";
import ApproveItem from "@components/element/ApproveItem";
import { distanceHorizontal } from "@utils/Define";
import { Colors } from "@theme/Colors";
import { ListApprove } from "@dataFake/ListApprove";
import { ListFilterApprove } from "@dataFake/ListFilterApprove";
import { SafeAreaView } from "react-native-safe-area-context";
import { textSizeStyle } from "@commonComponent/TextSize";

const limitPerPage = 5;
export default function Approve(): React.ReactNode {
  const [selectedFilterItem, setSelectFilterItem] = useState(
    ListFilterApprove[0]
  );
  const [dataApproveFiltered, setDataApproveFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleDataCount, setVisibleDataCount] = useState(limitPerPage);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const handleFilter = (item: any) => {
    setLoading(true);
    setSelectFilterItem(item);
  };
  const loadMoreData = () => {
    setIsLoadingMore(true);
    setVisibleDataCount((prevCount) => prevCount + limitPerPage);
  };
  useEffect(() => {
    const filteredData = ListApprove.filter(
      (item) => item?.parentId === selectedFilterItem?.id
    );
    setDataApproveFiltered(filteredData);
    setLoading(false);
    setIsLoadingMore(false);
    setVisibleDataCount(limitPerPage);
  }, [selectedFilterItem]);
  return (
    <SafeAreaView style={styles.container}>
      <Header headerTitle="Phê duyệt Phê duyệt Phê duyệt Phê duyệt Phê duyệt Phê duyệt Phê duyệt Phê duyệt Phê duyệt Phê duyệt" />
      <View style={styles.listFilter}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.styleFllFilter}
          data={ListFilterApprove}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => {
            const itemFilterStyles = StyleSheet.create({
              item: {
                marginLeft: index === 0 ? distanceHorizontal : 0,
                backgroundColor:
                  selectedFilterItem?.id === item?.id ? "#0F6CBD" : "white",
              },
              txtLabelFilter: {
                ...textSizeStyle.small,
                fontWeight: "bold",
                color: selectedFilterItem?.id === item?.id ? "white" : "black",
              },
            });
            return (
              <TouchableOpacity
                style={[styles.itemFilter, itemFilterStyles.item]}
                key={index}
                onPress={() => handleFilter(item)}
              >
                <Text numberOfLines={1} style={itemFilterStyles.txtLabelFilter}>
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
          data={dataApproveFiltered.slice(0, visibleDataCount)}
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
          onEndReached={loadMoreData}
          ListFooterComponent={() => {
            return isLoadingMore &&
              dataApproveFiltered.length > visibleDataCount ? (
              <View style={styles.loadingFooter}>
                <ActivityIndicator
                  size="small"
                  color={Colors.bgButtonApprove}
                />
              </View>
            ) : null;
          }}
          onEndReachedThreshold={0.1}
        />
      ) : (
        <View style={styles.emptyStatus}>
          <Text>Chưa có dữ liệu</Text>
        </View>
      )}
    </SafeAreaView>
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
  listFilter: {
    marginBottom: 10,
  },
  emptyStatus: { alignItems: "center", justifyContent: "center", flex: 1 },
  textEmpty: {
    ...textSizeStyle.large,
    fontWeight: "600",
  },
  loadingFooter: {
    paddingVertical: 20,
  },
});
