import {StyleSheet} from 'react-native';
import Colors from '../../../../constants/Colors.constant';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 65,
  },
  input: {
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },
  image: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
    paddingHorizontal: 20,
    tintColor: Colors.black,
  },
});

export default styles;
