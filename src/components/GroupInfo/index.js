import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './style';
const GroupInfor = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.groupAvatar}>
        <View
          style={{
            borderWidth: 2,
            width: '70%',
            height: '90%',
            borderRadius: 17,
          }}>
          <Image
            style={styles.groupCoverImg}
            source={{
              uri: 'https://bom.to/K9pTJSVnhL',
            }}
          />
        </View>
        <View
          style={{
            borderWidth: 2,
            width: '45%',
            height: '56%',
            borderRadius: 50,
            borderColor: 'white',
            position: 'absolute',
            right: 10,
            bottom: 0,
          }}>
          <Image
            style={styles.postPersonAvatar}
            source={{uri: 'https://bom.to/7Ed7kjdU5Y'}}
          />
        </View>
      </View>
      <View style={styles.group}>
        <View style={{justifyContent: 'space-between'}}>
          <TouchableOpacity style={styles.nameGroup}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>
              VIETNAMESE STREET STYLE GROUP
            </Text>
          </TouchableOpacity>
          <View style={styles.namePerson}>
            <Text style={{fontSize: 12, color: 'silver'}}>
              Bài viết nhóm của Dương Nhung
            </Text>
            <Text style={{fontSize: 12, color: 'silver'}}>11 giờ</Text>
            <Image
              style={styles.iconGroup}
              source={{
                uri: 'https://bom.to/II07s6rN5K',
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default GroupInfor;
