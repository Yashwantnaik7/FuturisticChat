import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import SearchField from '../components/SearchField';
import {MessageType} from '../models/MessageType';
import styles from '../styles/ChatBotScreen.styles';
import {ChatInterface} from '../models/ChatInterface';
import NetworkManager from '../../../networking/NetworkManager';
import QueryCell from '../components/QueryCell';
import {AsyncStorageService} from '../../../services/AsyncStorageService';

const ChatbotScreen = () => {
  // state
  const [messages, setMessages] = useState<[ChatInterface]>([
    {
      text: 'Hey, we are here to help you!',
      type: MessageType.answer,
    },
  ]);
  const [loading, setLoading] = useState(false);
  const foodStorageKey = 'foodData';

  useEffect(() => {
    // AsyncStorageService.removeAllAsyncData();
    AsyncStorageService.getData(foodStorageKey)
      .then((storedData: [ChatInterface]) => {
        if (storedData.length > 0) {
          setMessages([...storedData]);
        }
      })
      .catch(() => {
        console.log('data not available');
      });
  }, []);

  // network call
  async function fetchData(searchItem: string) {
    setLoading(true);
    try {
      const response = await NetworkManager.searchFood(searchItem);
      saveData({
        text: response.results[0].summary,
        type: MessageType.html,
      });
    } catch (err) {
      saveData({
        text: 'Error while fetching recipe',
        type: MessageType.answer,
      });
    } finally {
      setLoading(false);
    }
  }

  function handleSend(newData: ChatInterface) {
    saveData(newData);
    setTimeout(() => {
      fetchData(newData.text);
    }, 1500);
  }

  function saveData(newData: ChatInterface) {
    setMessages(prevState => {
      AsyncStorageService.saveData([...prevState, newData], foodStorageKey);
      return [...prevState, newData];
    });
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
        <FlatList
          contentContainerStyle={styles.list}
          data={messages}
          renderItem={QueryCell}
          keyExtractor={(_, index) => index.toString()}
          ListFooterComponentStyle={{marginBottom: 15}}
        />
        {loading && <ActivityIndicator size="small" />}
        <SearchField onSend={handleSend} />
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatbotScreen;
