import {StyleSheet, Dimensions} from 'react-native';
const Widths = Dimensions.get('window').width;
const Heights = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    height: Heights / 4.5,
    overflow: 'hidden',
    borderRadius: 9,
  },
  imgBg: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%',
  },
  imgAvatar: {
    resizeMode: 'contain',
    borderRadius: 50,
    height: '100%',
    width: '100%',
  },
  txtName: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    
  },
});

export default styles;
