import React, {Dispatch, SetStateAction} from 'react';
import {View, TextInput, ImageSourcePropType, Image} from 'react-native';
import styles from './style';


const TxtInput = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.groupIconInput}>
        <TextInput
          {...props.otherProps}
          style={styles.input}
          placeholder={props.placeHolder}
          placeholderTextColor={props.placeHolderColor}
          secureTextEntry={props.isPassword ? true : false}
        />
      </View>
    </View>
  );
};
export default TxtInput;
