import {
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { distanceHorizontal } from "../../utils/Define";
import { Colors } from "../../theme/Colors";
import useAllFonts from "../../hook/useAllFonts";
import TextInput from "../../components/common/TextInput";
import SVGIcon from "../../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../navigation/router/ScreenName";
import {
  localStorageModule,
  localStorageName,
} from "../../modules/AsyncStorage";
const widthImgLogo = 248;
const ratioImgLogo = 248 / 71;
const heightImgLogo = widthImgLogo * (1 / ratioImgLogo);
const sizeSelectedBox = 20;
const accountValue = "admin";
const passwordValue = "password";
export default function Login(): React.ReactNode {
  const navigation = useNavigation();
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [selectedSaveLogin, setSelectedSaveLogin] = useState(false);
  const fontsLoaded = useAllFonts();

  if (!fontsLoaded) {
    return null;
  }
  const handleLogin = () => {
    const realAccountName = accountName?.trim();
    const reallPassword = password?.trim();
    if (realAccountName?.length === 0 || reallPassword?.length === 0) {
      Alert.alert("Nhập đầy đủ tài khoản và mật khẩu");
      return;
    }
    if (realAccountName !== accountValue || reallPassword !== passwordValue) {
      Alert.alert("Tài khoản là admin, mật khẩu là password");
      return;
    }
    if (selectedSaveLogin) {
      localStorageModule.setItem(
        localStorageName.saveStatusLogined,
        selectedSaveLogin
      );
    }

    navigation.navigate(ScreenName.home);
    return;
  };
  console.log("selectedSaveLogin", selectedSaveLogin);
  return (
    <View style={styles.container}>
      <View style={styles.mainView}>
        <Image
          style={styles.imgLogo}
          source={require("../../../assets/logo.png")}
        />
        <Text style={styles.title}>Hệ thống FlexCash</Text>
        <TextInput
          placeHolder={"Tài khoản"}
          value={accountName}
          setValue={(text: string) => setAccountName(text)}
        />
        <TextInput
          rightIcon
          placeHolder={"Mật khẩu"}
          isPassword
          value={password}
          setValue={(text: string) => setPassword(text)}
        />
        <View style={styles.saveLogin}>
          <TouchableOpacity
            style={[
              styles.selectBox,
              {
                backgroundColor: selectedSaveLogin
                  ? Colors.bgButtonApprove
                  : null,
              },
            ]}
            onPress={() => setSelectedSaveLogin(!selectedSaveLogin)}
          >
            <SVGIcon.IconSelected
              style={{ opacity: selectedSaveLogin ? 1 : 0 }}
            />
          </TouchableOpacity>
          <Text>Lưu thông tin đăng nhập</Text>
          <View style={{ flex: 1 }} />
        </View>
        <TouchableOpacity style={styles.btnLogin} onPress={() => handleLogin()}>
          <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text style={{ color: Colors.bgButtonApprove, fontSize: 14 }}>
          FlexCash{" "}
        </Text>
        <Text style={{ color: Colors.grey, fontSize: 14 }}>
          - Version 1.2.6.8
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: distanceHorizontal,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: StatusBar.currentHeight,
  },
  mainView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  footer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  imgLogo: {
    width: widthImgLogo,
    height: heightImgLogo,
    marginVertical: 64,
  },
  title: {
    fontSize: 20,
    fontFamily: "Roboto-Bold",
    textAlign: "center",
    marginBottom: 24,
  },
  saveLogin: {
    flexDirection: "row",
  },
  selectBox: {
    borderColor: Colors.bgButtonApprove,
    borderRadius: 4,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: sizeSelectedBox,
    width: sizeSelectedBox,
    marginRight: 10,
  },
  btnLogin: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 16,
    paddingBottom: 18,
    backgroundColor: Colors.bgButtonApprove,
    borderRadius: 6,
    width: "100%",
    marginTop: 32,
  },
});
