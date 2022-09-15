import { Dimensions, StyleSheet } from 'react-native';
const Widths = Dimensions.get('window').width;
const Heights = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: 'silver',
    marginTop: 10,
    alignItems: 'center',
    paddingLeft: '3%',
    paddingTop: '3%',
  },
  img:{
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});

export default styles;
