import {StyleSheet, Dimensions} from 'react-native';
const Widths = Dimensions.get('window').width;
const Heights = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: '80%',
  },
  button: {
    height: '100%',
    width: '100%',
    alignItems: 'center'
  },
  icon: {
    height: '100%',
    width: '150%',
    resizeMode: 'contain'
  },

});

export default styles;
