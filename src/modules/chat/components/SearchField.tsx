import React, {useState} from 'react';
import {Image, Pressable, TextInput, View} from 'react-native';
import Images from '../../../../constants/Images.constant';
import {MessageType} from '../models/MessageType';
import styles from '../styles/SearchField.style';
import {ChatInterface} from '../models/ChatInterface';
import SpeechRecogize from './SpeechRecogize';

const SearchField = ({onSend}: {onSend: (data: ChatInterface) => void}) => {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      const newData = {
        text: inputText,
        type: MessageType.question,
      };
      onSend(newData);
      setInputText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <SpeechRecogize onSpeechComplete={setInputText} />
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={setInputText}
      />
      <Pressable onPress={handleSend}>
        <Image source={Images.chat.sendMsg} style={styles.image} />
      </Pressable>
    </View>
  );
};

export default React.memo(SearchField);
