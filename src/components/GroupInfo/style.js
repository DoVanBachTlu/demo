import {StyleSheet, Dimensions} from 'react-native';
const Widths = Dimensions.get('window').width;
const Heights = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    height: Heights / 12,
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  groupAvatar: {
    height: '100%',
    width: Widths / 5.5,
  },
  groupCoverImg: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 13,
  },
  postPersonAvatar: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
    borderRadius: 50,
  },
  group: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameGroup: {},
  namePerson: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconGroup: {
    height: '90%',
    width: '10%',
  },
});

export default styles;
