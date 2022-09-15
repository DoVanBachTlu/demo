import {StyleSheet, Dimensions} from 'react-native';
const Widths = Dimensions.get('window').width;
const Heights = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {},
  editPostBtn: {
    width: '85%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalView: {
    marginLeft: Widths / 2,
    backgroundColor: 'white',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    width: '40%',
    marginTop: Heights / 2,
  },
  button: {
    position: 'absolute',
    right: 0,
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerOptionReact: {
    marginTop: 7,
    marginBottom: Heights / 20,
  },
  btnCmt: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '30%',
    alignItems: 'center',
  },
  btnSend: {
    justifyContent: 'center',
    flexDirection: 'row',
    height: '100%',
    width: '30%',
    alignItems: 'center',
  },
  containerLike: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: 7,
  },
  react: {
    flexDirection: 'row',
  },
  iconLike: {
    height: '98%',
    width: '20%',
    resizeMode: 'contain',
  },
  iconHeart: {
    height: '98%',
    width: '15%',
    resizeMode: 'contain',
  },
  countCmt: {},
});
export default styles;
