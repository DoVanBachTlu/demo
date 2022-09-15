import React from 'react';
import {View, FlatList} from 'react-native';
import styles from './style';
import StoryItem from '../storyItem';


const StoryFLL = (props) => {
  const RenderItem = ({item}) => {
    return (
      <View>
        <StoryItem
          style={{
            containerStyle: styles.st,
          }}
          background={{uri: item.imgBg}}
          avatar={{uri: item.imgAvatar}}
          name={item.name}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        style={styles.fllStyle}
        data={props.data}
        renderItem={RenderItem}
        refreshing={true}
        scrollsToTop={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default StoryFLL;
