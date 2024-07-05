// App.js

import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Pressable, Image} from 'react-native';
import Voice from '@react-native-voice/voice';
import Images from '../../../../constants/Images.constant';
import Colors from '../../../../constants/Colors.constant';

const SpeechRecogize = ({
  onSpeechComplete,
}: {
  onSpeechComplete: (speech: string) => void;
}) => {
  const [started, setStarted] = useState(false);
  const [recognized, setRecognized] = useState(false);

  useEffect(() => {
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechRecognized = onSpeechRecognized;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = e => {
    setStarted(true);
  };

  const onSpeechRecognized = e => {
    setRecognized(true);
  };

  const onSpeechResults = e => {
    onSpeechComplete(e.value[0]);
  };

  const startRecognizing = async () => {
    try {
      await Voice.start('en-US');
      setRecognized(true);

      setTimeout(() => {
        stopRecognizing();
      }, 5000);
    } catch (e) {
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    try {
      await Voice.stop();
      setRecognized(false);
      setStarted(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      {!started && (
        <Pressable onPress={startRecognizing}>
          <Image source={Images.chat.micOff} style={styles.image} />
        </Pressable>
      )}
      {started && recognized && (
        <Pressable onPress={stopRecognizing}>
          <Image source={Images.chat.micOn} style={styles.image} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
    paddingHorizontal: 20,
    tintColor: Colors.black,
  },
});

export default React.memo(SpeechRecogize);
