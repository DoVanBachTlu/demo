import { useNavigation } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import BottomSheet from 'react-native-js-bottom-sheet';
import Entypo from 'react-native-vector-icons/Entypo';
import { connect, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  deletePostAction,
  fetchPostAction,
  likeAction
} from '../../redux/actions';
import GroupInfor from '../GroupInfo/index';
import LikeButton from '../LikeButton';
import styles from './style';

const PostView = props => {
  const refBt = useRef();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  console.log('fetchPostAction', props);
  const btnDeletePost = async id => {
    try {
      console.log('delete=>>>', id);
      await props.deletePostAction(id);
      // props.setCheck(true);
    } catch (error) {
      console.log('deleted error', error);
    }
  };

  btnLike =  (id, like) => {
    try {
      dispatch(likeAction(id, !like));
      console.log('btnLikeAction', id, like)
    } catch (error) {
      console.log('btnLike=>', error);
    }
  };
  return props.data ? (
    <View style={styles.container}>
      <GroupInfor />
      <View style={styles.editPostBtn}>
        <Text>{props?.data?.content}</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('sdfsdfas', refBt);
            refBt?.current?.bottomSheet?.open();
          }}
          style={styles.button}>
          <Entypo name="dots-three-horizontal" size={14} />
        </TouchableOpacity>
        <BottomSheet
          ref={refBt}
          itemDivider={3}
          key={props.data.id}
          backButtonEnabled={true}
          coverScreen={true}
          options={[
            {
              title: 'Edit',
              onPress: () => {
                navigation.navigate('PostScreen', {
                  dataEdit: props.data,
                  setCheck: props.setCheck,
                });
              },
            },
            {
              title: 'Delete',
              onPress: () => {
                console.log('deleteProps=>', props, refBt);
                btnDeletePost(props.data.id);

                refBt?.current?.bottomSheet?.close();
              },
            },
          ]}
          isOpen={false}
        />
      </View>
      <View style={styles.containerOptionReact}>
        {props.data.like ? (
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
          <LikeButton
            onPress={() => {
              btnLike(props.data.id, props.data.like);
              console.log('btnLikeClick', props.data.id);
            }}
            likeStatus={props.data.like}
          />
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
    </View>
  ) : null;
};

const mapStateToProps = state => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      deletePostAction,
      fetchPostAction,
      likeAction,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PostView);
