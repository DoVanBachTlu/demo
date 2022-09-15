import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ImageSourcePropType,
  Dimensions,
} from 'react-native';
import styles from './style';



const Widths = Dimensions.get('window').width;
const Heights = Dimensions.get('window').height;

const StoryItem = (props) => {
  return (
    <View style={{marginLeft: 10, width: Widths*0.28}}>
      <TouchableOpacity style={[styles.container, props.containerStyle]}>
        <ImageBackground source={props.background} style={[styles.imgBg]}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'blue',
              width: Widths / 11,
              height: Heights / 20,
              borderRadius: 50,
              marginTop: Heights / 140,
              marginLeft: Widths / 75,
            }}>
            <Image source={props.avatar} style={[styles.imgAvatar]} />
          </View>
          <Text style={[styles.txtName]}>{props.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default StoryItem;
