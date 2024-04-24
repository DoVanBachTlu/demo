import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React from "react";
import { distanceHorizontal } from "../../utils/Define";
import SVGIcon from "../../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../navigation/router/ScreenName";

const windowWidth = Dimensions.get("window").width;
const distanceBetweenCategory = 20;

export default function Home(): React.ReactNode {
  const navigation = useNavigation();

  const listCategories = [
    {
      icon: SVGIcon.IconTranport,
      label: "Vận chuyển",
      onPress: () => {},
    },
    {
      icon: SVGIcon.IconApprove,
      label: "Phê duyệt",
      onPress: () => {
        navigation.navigate(ScreenName.approve);
      },
    },
    {
      icon: SVGIcon.IconUploadFile,
      label: "Upload File",
      onPress: () => {},
    },
  ];
  const lengthListCategories = listCategories.length;
  const sizeCategoryButton =
    (windowWidth -
      distanceHorizontal * 2 -
      (lengthListCategories - 1) * distanceBetweenCategory) /
    lengthListCategories;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      marginTop: StatusBar.currentHeight,
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
      marginTop: 24,
      alignItems: "center",
      justifyContent: "space-around",
    },
    categoryBtn: {
      alignItems: "center",
      justifyContent: "center",
      width: sizeCategoryButton,
      height: sizeCategoryButton,
      borderRadius: 20,
      borderColor: "#00000016",
      borderWidth: 1,
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imgBg}
        source={require("../../../assets/background.jpg")}
      >
        <View style={styles.header}>
          <View style={{ flexDirection: "row", flexShrink: 1 }}>
            <TouchableOpacity>
              <SVGIcon.IconAccount />
            </TouchableOpacity>
            <View style={{ flex: 1, marginHorizontal: 12 }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ color: "white", fontSize: 14 }}>Xin chào, </Text>
                <SVGIcon.IconHand />
              </View>
              <Text
                style={{ fontWeight: "bold", color: "white" }}
                numberOfLines={1}
              >
                NGUYEN VAN QUOC NGUYEN VAN QUOCNGUYEN VAN QUOCNGUYEN VAN
                QUOCNGUYEN VAN QUOCNGUYEN VAN QUOCNGUYEN VAN QUOCNGUYEN VAN
                QUOCNGUYEN VAN QUOCNGUYEN VAN QUOC
              </Text>
            </View>
          </View>
          <TouchableOpacity>
            <SVGIcon.IconNoti />
          </TouchableOpacity>
        </View>
        <View style={styles.viewCategory}>
          <Text style={{ fontSize: 24, fontWeight: "600" }}>Danh mục</Text>
          <View style={styles.listCategoriesView}>
            {listCategories?.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={item.onPress}
                  key={index}
                  style={styles.categoryBtn}
                >
                  <item.icon />
                  <Text style={{ fontSize: 12, marginTop: 12 }}>
                    {item.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
