import {
  Alert,
  Image,
  Keyboard,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { distanceHorizontal } from "../../utils/Define";
import { Colors } from "../../theme/Colors";
import useAllFonts from "../../hook/useAllFonts";
import TextInput from "../../components/common/TextInput";
import { IconSelected } from "../../../assets/icons";
import { useNavigation } from "@react-navigation/native";
import { ScreenName } from "../../navigation/router/ScreenName";
import {
  localStorageModule,
  localStorageName,
} from "../../modules/AsyncStorage";
import { useDispatch, useSelector } from "react-redux";
import { saveCredentials } from "../../sliceRedux/Authen";
import { textSizeStyle } from "../../components/common/TextSize";
const widthImgLogo = 248;
const ratioImgLogo = 248 / 71;
const heightImgLogo = widthImgLogo * (1 / ratioImgLogo);
const sizeSelectedBox = 20;
const accountValue = "admin";
const passwordValue = "password";
export default function Login(): React.ReactNode {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [accountName, setAccountName] = useState("");
  const [password, setPassword] = useState("");
  const [selectedSaveLogin, setSelectedSaveLogin] = useState(false);
  const credential = useSelector((state) => state.authen);
  const fontsLoaded = useAllFonts();
  console.log("savedAccount", credential);
  useEffect(() => {
    if (!credential?.savedAccount && !credential?.savedPassword) return;
    setAccountName(credential.savedAccount);
    setPassword(credential.savedPassword);
  }, [credential]);

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
      dispatch(saveCredentials({ accountValue, passwordValue }));
    }

    navigation.navigate(ScreenName.home);
    return;
  };

  if (!fontsLoaded) {
    return null;
  }
  console.log("selectedSaveLogin", selectedSaveLogin);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: distanceHorizontal,
      alignItems: "center",
      justifyContent: "space-between",
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
      ...textSizeStyle.biggest,
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
      backgroundColor: selectedSaveLogin ? Colors.bgButtonApprove : null,
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
    iconSelected: { opacity: selectedSaveLogin ? 1 : 0 },
    txtLogin: {
      ...textSizeStyle.large,
      fontWeight: "bold",
      color: "white",
    },
    txtNameApp: {
      ...textSizeStyle.normal,
      color: Colors.bgButtonApprove,
    },
    txtVersion: {
      ...textSizeStyle.normal,
      color: Colors.grey,
    },
  });
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
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
              style={styles.selectBox}
              onPress={() => setSelectedSaveLogin(!selectedSaveLogin)}
            >
              <View style={styles.iconSelected}>
                <IconSelected />
              </View>
            </TouchableOpacity>
            <Text>Lưu thông tin đăng nhập</Text>
            <View style={{ flex: 1 }} />
          </View>
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={() => handleLogin()}
          >
            <Text style={styles.txtLogin}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.footer}>
          <Text style={styles.txtNameApp}>FlexCash </Text>
          <Text style={styles.txtVersion}>- Version 1.2.6.8</Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}
