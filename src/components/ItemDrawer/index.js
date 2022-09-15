import React from 'react';
import {Text, Image, TouchableOpacity} from 'react-native';
import styles from './style'


const ItemDrawer = (props) => {
    return(
        <TouchableOpacity style={styles.container}>
            <Image style={styles.img} source={props.img}/>
            <Text style={{fontSize: 17, marginLeft: '2%'}}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default ItemDrawer;