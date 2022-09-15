import {StyleSheet, Dimensions} from 'react-native';
const Widths = Dimensions.get('window').width;
const Heights = Dimensions.get('window').height;

const styles = StyleSheet.create({
  inputGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Heights/4
  },
  passwordInput: {
    height: '20%',
    marginHorizontal: 30,
    marginTop: 25,
    flexDirection: 'row',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 7,
    width: '86%',
  },
  passIcon: {
    resizeMode: 'contain',
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginRight: '2%',
    marginLeft: '2%',
  },
  passInput: {
    flex: 1,
    fontSize: 13,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconEye: {
    resizeMode: 'contain',
  },
});
export default styles;
