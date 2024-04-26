import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Header from "@commonComponent/Header";
import { DetailApprove } from "@dataFake/DetailApprove";
import { Colors } from "@theme/Colors";
import ApproveItem from "@components/element/ApproveItem";
import { STATUS_APPROVE, distanceHorizontal } from "@utils/Define";
import moment from "moment";
import { SafeAreaView } from "react-native-safe-area-context";

interface RouteParams {
  selectedFilter?: {
    id: number;
    label: string;
  };
  idItem?: number;
}
const windowWidth = Dimensions.get("window").width;
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
  const CustomSubCommand = ({ item }) => {
    const subCommand = [
      {
        label: item?.subCode,
        info:
          item.status === STATUS_APPROVE.APPROVE ? "Phê duyệt" : "Khởi hành",
      },
      {
        label: "Loại lệnh",
        info: item?.commandType,
      },
      {
        label: "Tên quỹ",
        info: item?.fundType,
      },
      {
        label: "Ngày tạo",
        info: moment(item?.createdDate).format("DD/MM/YYYY"),
      },
    ];
    return (
      <View style={styles.subCommandWrap}>
        {subCommand.map((item, index) => {
          const stylesSubCommand = StyleSheet.create({
            wrapSubCommand: {
              marginHorizontal: index === 0 ? 0 : 16,
              paddingHorizontal: index === 0 ? 16 : 0,
              borderBottomWidth: index === subCommand.length - 1 ? 0 : 1,
              borderBottomColor:
                index === subCommand.length - 1 ? null : "#E0E0E0",
            },
            textCodeSubCommand: {
              color: index === 0 ? Colors.bgButtonApprove : "#575757",
            },
            textStatusSubCommand: { color: "white" },
          });
          return (
            <View
              style={[styles.subCommandView, stylesSubCommand.wrapSubCommand]}
              key={index}
            >
              <Text style={stylesSubCommand.textCodeSubCommand}>
                {item?.label}
              </Text>
              {index === 0 ? (
                <View style={styles.subCommandCode}>
                  <Text style={stylesSubCommand.textStatusSubCommand}>
                    {item?.info}
                  </Text>
                </View>
              ) : (
                <Text>{item?.info}</Text>
              )}
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header headerTitle={`Chi tiết ${selectedFilter?.label}`} />
      </View>
      <View style={styles.mainView}>
        <ScrollView>
          {loading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color={Colors.bgButtonApprove} />
            </View>
          ) : (
            approveDetail?.map((item, index) => {
              return (
                <>
                  <ApproveItem key={index} atDetail dataItem={item} />
                  {item?.subCommand?.map((subItem, subIndex) => {
                    return <CustomSubCommand item={subItem} />;
                  })}
                </>
              );
            })
          )}
        </ScrollView>
        <View style={styles.wrapViewButton}>
          <TouchableOpacity style={[styles.btnFooter, styles.bgColorStartBtn]}>
            <Text style={styles.txtStart}>Khởi hành</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btnFooter, { backgroundColor: "red" }]}
          >
            <Text style={styles.txtWhiteBold}>Từ chối</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.btnFooter,
              { backgroundColor: Colors.bgButtonApprove },
            ]}
          >
            <Text style={styles.txtWhiteBold}>Phê duyệt</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subCommandWrap: {
    borderRadius: 8,
    marginHorizontal: distanceHorizontal,
    backgroundColor: "white",
    marginBottom: 16,
  },
  subCommandView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
  },
  btnFooter: {
    width: (windowWidth - distanceHorizontal * 2 - 16) / 3,
    height: 38,
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapViewButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginBottom: 8,
    paddingHorizontal: distanceHorizontal,
    paddingVertical: 10,
  },
  mainView: {
    justifyContent: "space-between",
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
  subCommandCode: {
    backgroundColor: "#00B4FA",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  bgColorStartBtn: {
    backgroundColor: "#EAA300",
  },
  txtStart: { color: "black", fontWeight: "600" },
  txtWhiteBold: { color: "white", fontWeight: "600" },
});
