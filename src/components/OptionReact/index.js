import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LikeButton from './../LikeButton/index';
import {likeAction, fetchPostAction} from './../../redux/actions';
import {useDispatch} from 'react-redux';
import {connect} from 'react-redux';
import styles from './style';

const OptionReact = (props) => {
  const [isLiked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const { fetchPostAction} = props;

  const btnLike = (like) => {
    console.log('bbbbb', like);
    dispatch(likeAction((like = isLiked)));
  };

  return (
    <View style={styles.containerOptionReact}>
      {isLiked ? (
        <View style={styles.containerLike}>
          <View style={styles.react}>
            <Image
              style={styles.iconLike}
              source={{
                uri: 'https://bom.to/Eg5xjHYKXV',
              }}
            />
            <Text style={{color: 'silver', marginLeft: '2%'}}>1</Text>
          </View>
        </View>
      ) : (
        <></>
      )}
      <View style={{flexDirection: 'row'}}>
        <LikeButton likeStatus/>
        <TouchableOpacity style={styles.btnCmt}>
          <Image
            style={{resizeMode: 'contain', height: '80%', width: '30%'}}
            source={{uri: 'https://bom.to/s9go7OaytX'}}
          />
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'silver'}}>
            Bình luận
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSend}>
          <Image
            style={{resizeMode: 'contain', height: '80%', width: '30%'}}
            source={{
              uri: 'https://bom.to/xpSyWXqnhX',
            }}
          />
          <Text style={{fontSize: 15, fontWeight: 'bold', color: 'silver'}}>
            Gửi
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const mapStateToProps = (state) => ({
  postReducer: state.postReducer,
});

const postOptionReact = connect(mapStateToProps, {
  likeAction,
  fetchPostAction
})(OptionReact);

export default postOptionReact;
