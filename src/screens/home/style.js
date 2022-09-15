import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';
const Widths = Dimensions.get('window').width;
const Heights = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  fbLogo: {
    height: '30%',
    width: '25%',
    resizeMode: 'contain',
    // position: 'absolute',
    left: 0,
  },
  searchIcon: {
    height: '100%',
    width: '50%',
    resizeMode: 'contain',
  },
  messIcon: {
    height: '100%',
    width: '50%',
    resizeMode: 'contain',
  },
  status: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    width: '95%',
    alignSelf: 'center',
  },
  imgAvatar: {
    resizeMode: 'contain',
    borderRadius: 50,
    height: '100%',
    width: '100%',
  },
  btnInpuStatus: {
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'silver',
    width: '85%',
    marginRight: '20%',
    padding: '2%',
    borderRadius: 17,
  },
  option: {
    flexDirection: 'row',
    height: Heights / 14,
    alignSelf: 'center',
    borderTopWidth: 0.5,
    borderTopColor: 'silver',
    marginBottom: Heights / 100,
  },
  livestream: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '40%',
    justifyContent: 'center',
  },
  image: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
  },
  checkIn: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    justifyContent: 'center',
  },
  btnMore: {
    width: '95%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: Heights / 22,
    marginTop: Heights / 65,
    borderWidth: 1,
    borderColor: '#A9F5F2',
    backgroundColor: '#A9F5F2',
    borderRadius: 5,
  },
  postInfor: {
    marginTop: Heights / 20,
  },
});

export default styles;
