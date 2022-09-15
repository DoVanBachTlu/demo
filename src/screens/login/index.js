import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity,Alert } from 'react-native';
import TxtInput from '../../components/TextInput';
import styles from './style';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = (props) => {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(true);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.inputGroup}>
      <TxtInput
        placeHolder="Nhập tài khoản"
        placeHolderColor={'grey'}
        otherProps={{
          onChangeText: (text) => {
            setUserName(text);
          },
          value: userName,
        }}
      />
      <View style={styles.passwordInput}>
        <TextInput
          style={styles.passInput}
          placeholder={'Nhập mật khẩu của bạn'}
          placeholderTextColor={'grey'}
          secureTextEntry={showPassword}
          onChangeText={(text) => {
            setPassword(text);
          }}>
        </TextInput>
        <TouchableOpacity
          onPress={() => {
            setShowPassword(!showPassword);
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 10,
          }}>
          <AntDesign name="eye" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          width: '40%',
          borderWidth: 1,
          paddingVertical: '5%',
          borderRadius: 7,
          marginTop: 15,
          backgroundColor: 'silver',
        }}
        onPress={() => {
          if (userName && password == 'admin')
            navigation.navigate('HomeScreen');
          else Alert.alert('Tài khoản, mật khẩu: admin')
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 16,
          }}>
          Đăng nhập
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;