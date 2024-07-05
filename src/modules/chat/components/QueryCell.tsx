import HTML from 'react-native-render-html';
import {Dimensions, Text, View} from 'react-native';
import {ChatInterface} from '../models/ChatInterface';
import {MessageType} from '../models/MessageType';
import styles from '../styles/ChatBotScreen.styles';

const QueryCell = ({item}: {item: ChatInterface}) => {
  switch (item.type) {
    case MessageType.answer:
      return (
        <View style={styles.aContainer}>
          <Text style={styles.aMessage}>{item.text}</Text>
        </View>
      );
    case MessageType.html:
      return (
        <HTML
          contentWidth={Dimensions.get('window').width}
          source={{html: item.text}}
        />
      );
    default:
      return (
        <View style={styles.qContainer}>
          <Text style={styles.qMessage}>{item.text}</Text>
        </View>
      );
  }
};

export default QueryCell;
