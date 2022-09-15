import React, {useState} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './style';

const LikeButton = props => {
  return (
    <>
      {props?.likeStatus ? (
        <TouchableOpacity
          style={styles.btnLike}
          onPress={props?.onPress}
          // onPress={btnLike}
          {...props?.otherProps}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign name="like2" size={14} color={'blue'} fill={'blue'} />
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'blue'}}>
              Bỏ thích
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.btnLike}
          // onPress={btnUnLike}
          onPress={() => props?.onPress()}
          {...props?.otherProps}>
          <View style={{flexDirection: 'row'}}>
            <AntDesign name="like2" size={14} color={'black'} />
            <Text style={{fontSize: 15, fontWeight: 'bold', color: 'silver'}}>
              Thích
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

LikeButton.defaultProps = {
  defaultValue: false,
};

export default LikeButton;
