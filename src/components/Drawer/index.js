import React from 'react';
import {View, FlatList} from 'react-native';
import ItemDrawer from '../ItemDrawer';

const Drawer = (props) => {
  const RenderItem = ({item}) => {
    return (
      <View>
        <ItemDrawer
          img={{uri: item.img}}
          text={item.text}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={props.data}
        renderItem={RenderItem}
        refreshing={true}
        scrollsToTop={true}
      />
    </View>
  );
};

export default Drawer;
