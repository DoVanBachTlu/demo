import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Drawer from '../../components/Drawer';
import {BASE_URL} from '../../utilities/index';
import styles from './style';
import {
  newPostAction,
  fetchPostAction,
  editPostAction,
} from '../../redux/actions';
import {connect} from 'react-redux';
import {Action} from './../../redux/actions';
import {useDispatch} from 'react-redux';
import PostReducer from '../../redux/reducers';
let dataExample = [
  {
    img: 'https://bom.to/otYRx8BIll',
    text: 'Tạo phòng họp mặt',
  },
  {
    img: 'https://bom.to/wVQqL6IZNG',
    text: 'Ảnh/Video',
  },
  {
    img: 'https://bom.to/itPrz0H29Z',
    text: 'Gắn thẻ bạn bè',
  },
  {
    img: 'https://bom.to/7gkvRS3t07',
    text: 'Cảm xúc hoạt động',
  },
  {
    img: 'https://bom.to/NewLF9zaLK',
    text: 'Check in',
  },
  {
    img: 'https://bom.to/3Z27NPj11y',
    text: 'Video trực tiếp',
  },
];

const PostScreen = props => {
  const {dataEdit, setCheck} = props.route.params;
  const navigation = useNavigation();
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setData(dataExample);
  }, []);

  const handleChange = e => {
    setInput(e.target.value);
  };
  
  btnNewPost = async () => {
    try {
      await dispatch(newPostAction(input));
      // setInput('');
      console.log('created post success');
      navigation.goBack();
      dispatch(props.fetchPostAction);
    } catch (error) {
      console.log('posting error');
    }
  };
  btnEditPost = async () => {
    try {
      await dispatch(editPostAction(dataEdit.id, input));
      console.log('edited success');
      navigation.goBack();
      dispatch(props.fetchPostAction);
    } catch (error) {
      console.log('edit error', error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Ionicons name="arrow-back" size={24} color={'black'} />
        </TouchableOpacity>
        {dataEdit ? (
          <>
            <Text style={{fontSize: 18, marginLeft: '2%'}}>
              Chỉnh sửa bài viết
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 12, alignItems: 'center'}}
              disabled={input ? false : true}
              onPress={() => btnEditPost(input)}>
              <Text style={input == '' ? styles.btn : styles.btnActive}>
                Lưu
              </Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={{fontSize: 18, marginLeft: '2%'}}>Tạo bài viết</Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 12, alignItems: 'center'}}
              disabled={input ? false : true}
              onPress={btnNewPost}>
              <Text style={input == '' ? styles.btn : styles.btnActive}>
                ĐĂNG
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <View style={styles.statusContent}>
        <View style={styles.infor}>
          <Image
            style={{height: 75, width: 70, borderRadius: 50}}
            source={{uri: 'https://rgl.mobi/Wfibf'}}
          />
          <View style={styles.name}>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Name</Text>
            <View style={styles.friendAndAlbum}>
              <TouchableOpacity style={styles.friend}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'silver'}}>
                  Bạn bè
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.album}>
                <Text
                  style={{fontWeight: 'bold', fontSize: 15, color: 'silver'}}>
                  Album
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {dataEdit ? (
          <View style={styles.inputStatus}>
            <TextInput
              onChangeText={text => setInput(text)}
              onChange={handleChange}
              defaultValue={dataEdit.content}
              style={styles.txtInput}
              // value={input}
            />
          </View>
        ) : (
          <View style={styles.inputStatus}>
            <TextInput
              placeholder="Bạn đang nghĩ gì?"
              onChangeText={text => setInput(text)}
              onChange={handleChange}
              value={input}
              style={styles.txtInput}
            />
          </View>
        )}
      </View>
      <Drawer data={data} />
    </SafeAreaView>
  );
};
const mapStateToProps = state => ({
  postReducer: state.postReducer,
});

const Post = connect(
  mapStateToProps,
  {
    newPostAction,
    fetchPostAction,
    editPostAction,
  },
  // mapDispatchToProps,
)(PostScreen);

export default Post;
