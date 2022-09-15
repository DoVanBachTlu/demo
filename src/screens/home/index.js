import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
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
import {fetchPostAction} from '../../redux/actions';
import PostView from './../../components/PostView/index';
import styles from './style';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {BASE_URL} from '../../utilities';

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

const Home = props => {
  const {post, fetchPostAction} = props;
  const [data, setData] = useState([]);
  const [check, setCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pageCurrent, setPageCurrent] = useState(1);
  const dispatch = useDispatch();
  const limitPerPage = 10;

  // useEffect(() => {
  //   setData(dataExample);
  //   Home;
  // }, []);

  const load = async () => {
    try {
      console.log('start load');
      await fetchPostAction(pageCurrent, limitPerPage);
    } catch (error) {
      console.log('error load data', error);
    }
    // dispatch(fetchPostAction);
  };
  useEffect(() => {
    setIsLoading(true);
    load();
    setIsLoading(false);
  }, [pageCurrent]);

  // useEffect( () => {
  //   load();
  // }, []);

  const renderFooter = () => {
    return isLoading ? (
      <View style={{marginTop: 10, alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  const lockHandleLoadMore = () => {
  }

  const handleLoadMore = () => {
   setIsLoading(true)
   setPageCurrent(page + 1)
  };

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            source={{
              uri: 'https://bom.to/4tHUYmgquP',
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
                uri: 'https://bom.to/xpSyWXqnhX',
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
                setCheck: setCheck,
              });
            }}>
            <Text>Bạn đang nghĩ gì?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.option}>
          <View style={styles.livestream}>
            <Image
              style={{resizeMode: 'contain', height: '40%', width: '22%'}}
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
              style={{resizeMode: 'contain', height: '40%', width: '25%'}}
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
              style={{resizeMode: 'contain', height: '40%', width: '25%'}}
              source={{
                uri: 'https://bom.to/NewLF9zaLK',
              }}
            />
            <Text style={{fontSize: 14, fontWeight: 'bold'}}>Check in</Text>
          </View>
        </View>

        {/* <StoryFLL data={data} /> */}

        <TouchableOpacity style={styles.btnMore}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#58D3F7'}}>
            Hiển thị thêm
          </Text>
        </TouchableOpacity>

        <View style={styles.postInfor}>
          <FlatList
            data={post}
            onEndReachedThreshold={0.5}
            onEndReached={() => handleLoadMore()}
            renderItem={({item}) => <PostView data={item} />}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={renderFooter()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const mapStateToProps = state => ({
  post: state.postReducer.post,
});

const HomeScreen = connect(
  mapStateToProps,
  {fetchPostAction},
  // mapDispatchToProps,
)(Home);

export default HomeScreen;
