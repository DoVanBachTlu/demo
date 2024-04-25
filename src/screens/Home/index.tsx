import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  BackHandler,
  Dimensions,
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  IconAccount,
  IconApprove,
  IconHand,
  IconNoti,
  IconTranport,
  IconUploadFile,
} from "../../../assets/icons";
import { textSizeStyle } from "../../components/common/TextSize";
import { ScreenName } from "../../navigation/router/ScreenName";
import { distanceHorizontal } from "../../utils/Define";

const windowWidth = Dimensions.get("window").width;
const distanceBetweenCategory = 20;
const maxItemsPerRow = 3;
export default function Home(): React.ReactNode {
  const [backPressedOnce, setBackPressedOnce] = useState(false);

  const navigation = useNavigation();
  useEffect(() => {
    if (Platform.OS === "android") {
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        handleBackPress
      );
      const timerId = setTimeout(() => {
        setBackPressedOnce(false);
      }, 2000);
      return () => {
        backHandler.remove();
        clearTimeout(timerId);
      };
    }
  }, [backPressedOnce]);
  const handleBackPress = () => {
    if (!backPressedOnce) {
      setBackPressedOnce(true);
      ToastAndroid.show(
        "Ấn nút Back lần nữa để thoát ứng dụng",
        ToastAndroid.SHORT
      );
      return true;
    } else {
      BackHandler.exitApp();
      return true;
    }
  };
  const listCategories = [
    {
      icon: IconTranport,
      label: "Vận chuyển",
      onPress: () => {},
    },
    {
      icon: IconApprove,
      label: "Phê duyệt",
      onPress: () => {
        navigation.navigate(ScreenName.approve);
      },
    },
    {
      icon: IconUploadFile,
      label: "Upload File",
      onPress: () => {},
    },
    {
      icon: IconUploadFile,
      label: "Upload File",
      onPress: () => {},
    },
  ];
  const sizeCategoryButton =
    (windowWidth -
      distanceHorizontal * 2 -
      (maxItemsPerRow - 1) * distanceBetweenCategory) /
    maxItemsPerRow;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    imgBg: {
      flex: 1,
      height: "100%",
      width: "100%",
      alignItems: "center",
      // justifyContent: "space-between"
    },
    header: {
      flexDirection: "row",
      marginTop: 16,
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      paddingHorizontal: distanceHorizontal,
      marginBottom: 32,
    },
    viewCategory: {
      backgroundColor: "white",
      borderTopLeftRadius: 32,
      borderTopRightRadius: 32,
      width: "100%",
      paddingHorizontal: distanceHorizontal,
      paddingTop: 32,
      flex: 1,
    },
    listCategoriesView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      flexWrap: "wrap",
    },
    categoryBtn: {
      alignItems: "center",
      justifyContent: "center",
      width: sizeCategoryButton,
      height: sizeCategoryButton,
      borderRadius: 20,
      borderColor: "#00000016",
      borderWidth: 1,
      marginTop: distanceBetweenCategory,
    },
    wrapViewInfoCommon: { flexDirection: "row", flexShrink: 1 },
    wrapViewHello: { flex: 1, marginHorizontal: 12 },
    flexRow: {
      flexDirection: "row",
    },
    txtHello: { ...textSizeStyle.normal, color: "white" },
    txtWhiteBold: { fontWeight: "bold", color: "white" },
    txtTitle: {
      ...textSizeStyle.biggest,
      fontWeight: "600",
    },
    txtLabelCategory: { ...textSizeStyle.small, marginTop: 12 },
    viewtxtCategoryTitle: {
      marginBottom: 24,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgBg}
        source={require("../../../assets/background.jpg")}
      >
        <View style={styles.header}>
          <View style={styles.wrapViewInfoCommon}>
            <TouchableOpacity>
              <IconAccount />
            </TouchableOpacity>
            <View style={styles.wrapViewHello}>
              <View style={styles.flexRow}>
                <Text style={styles.txtHello}>Xin chào, </Text>
                <IconHand />
              </View>
              <Text style={styles.txtWhiteBold} numberOfLines={1}>
                NGUYEN VAN QUOC NGUYEN VAN QUOCNGUYEN VAN QUOCNGUYEN VAN
                QUOCNGUYEN VAN QUOCNGUYEN VAN QUOCNGUYEN VAN QUOCNGUYEN VAN
                QUOCNGUYEN VAN QUOCNGUYEN VAN QUOC
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <IconNoti />
          </TouchableOpacity>
        </View>
        <View style={styles.viewCategory}>
          <View style={styles.viewtxtCategoryTitle}>
            <Text style={styles.txtTitle}>Danh mục</Text>
          </View>
          <View style={styles.listCategoriesView}>
            {listCategories?.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={item.onPress}
                  key={index}
                  style={styles.categoryBtn}
                >
                  <item.icon />
                  <Text style={styles.txtLabelCategory}>{item.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
