import React, {useState} from 'react';
import {
  View,
  TextInput,
  FlatList,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';
import Images from '../../../constants/Images.constant';
import Colors from '../../../constants/Colors.constant';

const ChatbotScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([
        ...messages,
        {key: Math.random().toString(), text: inputText},
      ]);
      setInputText('');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <FlatList
          data={messages}
          renderItem={({item}) => (
            <Text style={styles.message}>{item.text}</Text>
          )}
          keyExtractor={item => item.key}
        />
      </View>
      <View style={styles.inputContainer}>
        <Pressable onPress={handleSend}>
          <Image source={Images.chat.micOn} style={styles.image} />
        </Pressable>
        <TextInput
          style={styles.input}
          placeholder="Type your query..."
          value={inputText}
          onChangeText={setInputText}
        />
        <Pressable onPress={handleSend}>
          <Image source={Images.chat.sendMsg} style={styles.image} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 16,
  },
  messageContainer: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
    justifyContent: 'center',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    width: '80%',
  },
  message: {
    padding: 10,
    borderBottomWidth: 1.2,
    borderBottomColor: '#ccc',
  },
  image: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
    paddingHorizontal: 20,
    tintColor: Colors.blue,
  },
});

export default ChatbotScreen;
