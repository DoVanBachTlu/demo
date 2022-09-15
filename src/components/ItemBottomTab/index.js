import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
const  ItemBottomTab = (props) => {
    return (
      <View style={[styles.container, {borderTopWidth: props.isFocused?3:0},{borderTopColor: props.isFocused?'blue':'white'}]}>
        <TouchableOpacity style={styles.button}>
          <Image
            style={[
              styles.icon,
              {width: props.size},{height: props.size}
            ]}
            source={props.imgUri}
          />
        </TouchableOpacity>
      </View>
    );
}
export default ItemBottomTab;