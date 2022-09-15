import {StyleSheet, Dimensions} from 'react-native';
const Widths = Dimensions.get('window').width;
const Heights = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Heights / 90,
  },
  header: {
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'silver',
    paddingLeft: '3%',
    paddingBottom: 10,
  },
  statusContent: {
    marginTop: Heights / 40,
  },
  infor: {
    width: '94%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  name: {
    justifyContent: 'space-around',
    marginLeft: '3%',
  },
  friendAndAlbum: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  friend: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 7,
    paddingHorizontal: '9%',
    paddingVertical: 4,
  },
  album: {
    borderWidth: 1,
    borderColor: 'silver',
    borderRadius: 7,
    paddingHorizontal: '9%',
    paddingVertical: 4,
    marginLeft: '2%',
  },
  inputStatus: {
    width: '94%',
    alignSelf: 'center',
    marginTop: Heights / 50,
  },
  txtInput:{
    fontSize: 19,
    height: Heights/3,
    paddingBottom: 190
  },
  btn:{color: 'silver', fontSize: 17},
  btnActive:{color: 'blue', fontSize: 17}
});

export default styles;
