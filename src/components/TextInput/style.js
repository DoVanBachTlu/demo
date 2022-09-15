import {StyleSheet, Dimensions} from 'react-native';
const Widths = Dimensions.get('window').width;
const Heights = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    height: '20%',
    marginHorizontal: 30,
    marginTop: 25,
  },
  groupIconInput: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 7,
    width: '100%',
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginRight: '2%',
    marginLeft: '2%',
  },
  input: {
    flex: 1,
    fontSize: 13,
    width: '90%',
  },
  iconEye: {
    resizeMode: 'contain',
  },
});
export default styles;
