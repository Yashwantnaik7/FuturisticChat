import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Image, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import Images from '../../constants/Images.constant';
import Colors from '../../constants/Colors.constant';
import ChatbotScreen from '../../src/modules/chat/ChatbotScreen';

const chatTabBar = {
  tabBarLabel: () => <Text style={styles.tabLabelStyle}>{'ChatBot'}</Text>,
  tabBarIcon: () => (
    <Image source={Images.tabbar.chatBot} style={styles.iconStyle} />
  ),
};

const TabNavigator = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <>
      <SafeAreaView style={styles.safearea}>
        <StatusBar barStyle="dark-content" />
        <BottomTab.Navigator
          screenOptions={() => ({
            headerShown: false,
            tabBarStyle: styles.tabBarStyle,
            tabBarItemStyle: styles.tabBarItemStyle,
            tabBarLabelPosition: 'below-icon',
          })}>
          <BottomTab.Screen
            name="ChatBot"
            component={ChatbotScreen}
            options={chatTabBar}
          />
        </BottomTab.Navigator>
      </SafeAreaView>
    </>
  );
};

export default TabNavigator;

export const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'white',
  },
  tabBarStyle: {
    backgroundColor: Colors.white,
    height: 90,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    position: 'absolute',
  },
  tabBarItemStyle: {
    paddingVertical: 21,
    marginHorizontal: 4,
  },
  tabLabelStyle: {
    fontSize: 14,
    fontWeight: '300',
    color: Colors.blue,
  },
  iconStyle: {
    height: 27,
    width: 27,
    resizeMode: 'contain',
  },
});
