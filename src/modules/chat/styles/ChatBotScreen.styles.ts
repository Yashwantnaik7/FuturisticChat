import {StyleSheet} from 'react-native';
import Colors from '../../../../constants/Colors.constant';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  list: {
    gap: 10,
  },
  qContainer: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    margin: 2,
    maxWidth: '80%',
    alignSelf: 'flex-end',
  },
  qMessage: {
    padding: 10,
    borderBottomWidth: 1.2,
    borderBottomColor: Colors.gray,
    color: Colors.black,
  },
  aContainer: {
    backgroundColor: Colors.black,
    borderRadius: 12,
    margin: 2,
    maxWidth: '80%',
    alignSelf: 'flex-start',
  },
  aMessage: {
    padding: 10,
    borderBottomWidth: 1.2,
    borderBottomColor: Colors.gray,
    color: Colors.white,
  },
  test: {
    // flex: ,
    // zIndex: 1000,
    // height: '50%',
  },
});

export default styles;
