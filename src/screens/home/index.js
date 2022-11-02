import {useNavigation} from '@react-navigation/native';
import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useRef,
} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import {connect} from 'react-redux';
import StoryFLL from '../../components/storyFLL';
import {
  fetchPostLoadMoreAction,
  firstfetchPostLoadMoreAction,
} from '../../redux/actions';
import PostView from './../../components/PostView/index';
import styles from './style';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {BASE_URL} from '../../utilities';
import {UserContext} from '../../../App';
let dataExample = [
  {
    imgBg: 'https://bom.to/rnvQz27VZg',
    imgAvatar: 'https://bom.to/rnvQz27VZg',
    name: 'Do Van Bach',
  },
  {
    imgBg: 'https://bom.to/rnvQz27VZg',
    imgAvatar: 'https://bom.to/rnvQz27VZg',
    name: 'Do Van Bach',
  },
  {
    imgBg: 'https://bom.to/rnvQz27VZg',
    imgAvatar: 'https://bom.to/rnvQz27VZg',
    name: 'Do Van Bach',
  },
  {
    imgBg: 'https://bom.to/rnvQz27VZg',
    imgAvatar: 'https://bom.to/rnvQz27VZg',
    name: 'Do Van Bach',
  },
  {
    imgBg: 'https://bom.to/rnvQz27VZg',
    imgAvatar: 'https://bom.to/rnvQz27VZg',
    name: 'Do Van Bach',
  },
  {
    imgBg: 'https://bom.to/rnvQz27VZg',
    imgAvatar: 'https://bom.to/rnvQz27VZg',
    name: 'Do Van Bach',
  },
  {
    imgBg: 'https://bom.to/rnvQz27VZg',
    imgAvatar: 'https://bom.to/rnvQz27VZg',
    name: 'Do Van Bach',
  },
];
const Widths = Dimensions.get('window').width;
const Heights = Dimensions.get('window').height;
// let isLockLoadMore;

const Home = props => {
  const {post, fetchPostLoadMoreAction} = props;
  const [data, setData] = useState([]);
  console.log('statePost=>>', post);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);
  const dispatch = useDispatch();
  const limitPerPage = 5;
  const isLockLoadMore = useRef(false);

  const firstLoadData = async () => {
    console.log('first1=>');
    try {
      console.log('first2=>');
      // await dispatch(firstfetchPostLoadMoreAction());
      await props.firstfetchPostLoadMoreAction();
      console.log('first3=>');
      console.log('first4=>');
    } catch (error) {
      console.log('firstLoadData error', error);
    }
  };

  const loadDataLoadMore = async () => {
    console.log('load1=>');
    try {
      isLockLoadMore.current = true;
      console.log('isLockLoadMore=>', isLockLoadMore.current);
      // await dispatch(fetchPostLoadMoreAction(pageCurrent, limitPerPage));
      await props.fetchPostLoadMoreAction(pageCurrent, limitPerPage);
      console.log('checkPositionLockLoadMore_1');
      isLockLoadMore.current = false;
      console.log('isLockLoadMore1=>', isLockLoadMore);
    } catch (error) {
      isLockLoadMore.current = false;
      console.log('🚀 ~ file: index.js ~ line 100 ~ loadData ~ error', error);
    }
  };

  useEffect(() => {
    console.log('first=>');
    firstLoadData();
  }, []);

  useEffect(() => {
    console.log('pageCurrentChange');
    console.log('isLockLoadMore2=>', isLockLoadMore.current);
    // setIsLoading(true);
    // isLockLoadMore.current = true;
    loadDataLoadMore();
    // isLockLoadMore.current = false;
    // setIsLoading(false);
  }, [pageCurrent]);

  const renderFooter = () => {
    console.log('isLockLoadMore3=>', isLockLoadMore);
    return isLoading ? (
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  const handleLoadMore = () => {
    console.log('onStart', pageCurrent);
    console.log('isLockLoadMore4=>', isLockLoadMore);
    // return;
    if (!isLockLoadMore.current) {
      console.log('pageCurrent++');
      setPageCurrent(pageCurrent + 1);
      setIsLoading(true);
    }
    console.log('isLockLoadMore5=>', isLockLoadMore);
  };

  const navigation = useNavigation();
  console.log('111==>');
  const userContextEx = useContext(UserContext);
  console.log('userContextEx', userContextEx);
  console.log('lockLoadMore2', isLockLoadMore);
  console.log('length=>', data);
  const Header = () => {
    return (
      <View style={{marginBottom: 10}}>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://goeco.link/TXVAD',
            }}
            style={styles.fbLogo}
          />
          <View
            style={{
              flexDirection: 'row',
              height: '40%',
              width: '15%',
              position: 'absolute',
              right: 0,
            }}>
            <Image
              source={{
                uri: 'https://bom.to/wv2zdVNnTT',
              }}
              style={styles.searchIcon}
            />

            <Image
              source={{
                uri: 'https://goeco.link/FRYCJ',
              }}
              style={styles.messIcon}
            />
          </View>
        </View>

        <View style={styles.status}>
          <View
            style={{
              borderWidth: 2,
              borderColor: 'red',
              width: Widths / 11,
              height: Heights / 20,
              borderRadius: 50,
            }}>
            <Image
              source={{
                uri: 'https://bom.to/rnvQz27VZg',
              }}
              style={styles.imgAvatar}
            />
          </View>
          <TouchableOpacity
            style={styles.btnInpuStatus}
            onPress={() => {
              navigation.navigate('PostScreen', {
                post: post,
              });
            }}>
            <Text>Bạn đang nghĩ gì?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.option}>
          <View style={styles.livestream}>
            <Image
              style={{
                resizeMode: 'contain',
                height: '40%',
                width: '22%',
              }}
              source={{
                uri: 'https://bom.to/tk4Kya19AD',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                borderRightWidth: 0.5,
                borderRightColor: 'silver',
                paddingRight: 10,
              }}>
              Phát trực tiếp
            </Text>
          </View>
          <View style={styles.image}>
            <Image
              style={{
                resizeMode: 'contain',
                height: '40%',
                width: '25%',
              }}
              source={{
                uri: 'https://bom.to/xhIx9zhkvl',
              }}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                borderRightWidth: 0.5,
                borderRightColor: 'silver',
                paddingRight: 30,
              }}>
              Ảnh
            </Text>
          </View>

          <View style={styles.checkIn}>
            <Image
              style={{
                resizeMode: 'contain',
                height: '40%',
                width: '25%',
              }}
              source={{
                uri: 'https://bom.to/NewLF9zaLK',
              }}
            />
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Check in</Text>
          </View>
        </View>

        {/* <StoryFLL data={data} /> */}

        <TouchableOpacity style={styles.btnMore}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: '#58D3F7',
            }}>
            Hiển thị thêm
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{flex: 1}}
        data={post}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          console.log('onEnd');
          handleLoadMore();
        }}
        ListHeaderComponent={Header()}
        renderItem={({item}) => (
          <View style={styles.postInfor}>
            <PostView data={item} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderFooter()}
      />
    </SafeAreaView>
  );
};
const mapStateToProps = state => (
  console.log('state.page', state),
  {
    post: state.postReducer.post,
  }
);
const mapDispatchToProps = dispatch => {
  return {
    fetchPostLoadMoreAction: (page, limite) =>
      dispatch(fetchPostLoadMoreAction(page, limite)),
    firstfetchPostLoadMoreAction: () =>
      dispatch(firstfetchPostLoadMoreAction()),
  };
};

const HomeScreen = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeScreen;
