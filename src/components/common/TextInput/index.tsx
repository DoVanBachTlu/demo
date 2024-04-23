import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import SVGIcon from "../../../../assets/icons";
import React, { useState } from "react";
import { Colors } from "../../../theme/Colors";
interface Props {
  placeHolder?: string;
  isPassword?: boolean;
  setValue?: (text: string) => void;
  value?: string;
  leftIcon?: string;
  rightIcon?: boolean;
}
export default function TxtInput(props: Props): React.ReactNode {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <TouchableWithoutFeedback onPressIn={Keyboard.dismiss} accessible={false}>
      <View style={{ marginBottom: 20 }}>
        <View style={styles.container}>
          {props.rightIcon ? <SVGIcon.IconPassword /> : <SVGIcon.IconUser />}
          <TextInput
            placeholder={props.placeHolder}
            value={props.value}
            onChangeText={props.setValue}
            style={styles.txtInput}
            placeholderTextColor={Colors.grey}
            secureTextEntry={
              props.isPassword ? (hidePassword ? true : false) : false
            }
          />
          {props.rightIcon ? (
            <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
              <SVGIcon.IconShowPassword />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.grey,
    borderWidth: 1,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
  },
  txtInput: {
    width: "100%",
    height: 50,
    paddingLeft: 5,
    color: Colors.grey,
    flex: 1,
  },
});
