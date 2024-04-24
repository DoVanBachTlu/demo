import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { STATUS_APPROVE, distanceHorizontal } from "../../../utils/Define";
import moment from "moment";
import CommandCompleteProgress from "../../common/CommandCompleteProgress";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../../navigation/router/ScreenName";
import { textSizeStyle } from "../../common/TextSize";

interface SelectedFilter {
  id: number;
  label: string;
}
interface Props {
  selectedFilter?: SelectedFilter;
  dataItem?: {
    id?: string;
    status?: number;
    time?: string;
    code?: string;
    driver?: string;
    vehicleType?: string;
    licensePlate?: string;
    commandTotal?: number;
    commandComplelte?: number;
    treasuryOfficer?: string;
    securityProtection?: string;
    startPoint?: string;
    dateStart?: string;
    completeDate?: string;
  };
  atDetail?: boolean;
  atCommon?: boolean;
}
export default function ApproveItem(props: Props): React.ReactNode {
  const navigation = useNavigation();
  const itemInfo = [
    {
      status:
        props.dataItem.status === STATUS_APPROVE.START
          ? "Khởi hành"
          : "Phê duyệt",
      info: moment(props.dataItem.time).format("DD/MM/YYYY, h:mm A"),
      label: props.dataItem.code,
      isShow: props.atCommon || props.atDetail,
    },
    {
      label: "Lái xe",
      info: props.dataItem.driver,
      isShow: props.atCommon || props.atDetail,
      isBackgroundColor: props.atDetail,
    },
    {
      label: "Loại xe",
      info: props.dataItem.vehicleType,
      isShow: props.atCommon,
    },
    {
      label: "Loại xe/Biển số",
      info: `${props.dataItem.vehicleType}/${props.dataItem.licensePlate}`,
      isShow: props.atDetail,
    },
    {
      label: "Cán bộ kho quỹ",
      info: props.dataItem.treasuryOfficer,
      isShow: props.atDetail,
      isBackgroundColor: props.atDetail,
    },
    {
      label: "An ninh bảo vệ",
      info: props.dataItem.securityProtection,
      isShow: props.atDetail,
    },
    {
      label: "Điểm xuất phát",
      info: props.dataItem.startPoint,
      isShow: props.atDetail,
      isBackgroundColor: props.atDetail,
    },
    {
      label: "Ngày khởi hành",
      info: moment(props.dataItem.dateStart).format("DD/MM/YYYY"),
      isShow: props.atDetail,
    },
    {
      label: "Ngày hoàn thành",
      info: moment(props.dataItem.completeDate).format("DD/MM/YYYY"),
      isShow: props.atDetail,
      isBackgroundColor: props.atDetail,
    },
    {
      label: "Biển số",
      info: props.dataItem.licensePlate,
      isShow: props.atCommon,
    },
    {
      label: "Số lệnh hoàn thành",
      info: `${props.dataItem.commandComplelte}/${props.dataItem.commandTotal}`,
      isShow: props.atCommon,
    },
  ];
  const handlePress = () => {
    navigation.navigate(ScreenName.approveDetail, {
      selectedFilter: props?.selectedFilter,
      idItem: props.dataItem?.id,
    });
  };
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      paddingVertical: 12,
      borderBottomColor: props.atCommon ? "#E0E0E0" : null,
      borderBottomWidth: props.atCommon ? 1 : 0,
      alignItems: "center",
      justifyContent: "space-between",
    },
    itemCode: {
      color: "#0F6CBD",
      fontWeight: "600",
    },
    groupItemCode: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    status: {
      paddingVertical: 2,
      paddingHorizontal: 8,
      borderWidth: 1,
      borderColor: "transparent",
      alignItems: "center",
      justifyContent: "center",
      marginLeft: 8,
    },
    statusApprove: { backgroundColor: "#00B4FA", borderRadius: 20 },
    wrapViewContainer: {
      backgroundColor: "white",
      marginBottom: 12,
      paddingBottom: 12,
    },
    textStatusCode: {
      ...textSizeStyle.small,
      color: "white",
    },
    textLabel: {
      ...textSizeStyle.normal,
      color: "black",
    },
  });
  const WrapView = props.atCommon ? TouchableOpacity : View;
  return (
    <WrapView style={styles.wrapViewContainer} onPress={handlePress}>
      {itemInfo.map((item, index) => {
        const stylesItemInfo = StyleSheet.create({
          containerItem: {
            paddingHorizontal:
              (index === 0 && props.atCommon) || props.atDetail
                ? distanceHorizontal
                : 0,
            marginHorizontal:
              index !== 0 && props.atCommon ? distanceHorizontal : 0,
            backgroundColor: item.isBackgroundColor ? "#FAFAFA" : "white",
          },
        });
        return (
          <>
            {item.isShow ? (
              <View
                style={[styles.container, stylesItemInfo.containerItem]}
                key={index}
              >
                {index === 0 ? (
                  <View style={styles.groupItemCode}>
                    <Text style={styles.itemCode}>{item?.label}</Text>
                    <View style={[styles.status, styles.statusApprove]}>
                      <Text style={styles.textStatusCode}>{item?.status}</Text>
                    </View>
                  </View>
                ) : (
                  <Text style={styles.textLabel}>{item?.label}</Text>
                )}

                <Text style={textSizeStyle.normal}>{item?.info}</Text>
              </View>
            ) : null}

            {index === itemInfo.length - 1 && item.isShow ? (
              <CommandCompleteProgress
                completePercent={
                  (props.dataItem.commandComplelte /
                    props.dataItem.commandTotal) *
                  100
                }
              />
            ) : null}
          </>
        );
      })}
    </WrapView>
  );
}
