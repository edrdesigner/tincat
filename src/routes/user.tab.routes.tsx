import React from 'react';
import { useTheme } from 'styled-components/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import { Home } from '@screens/Home';
import { Chat } from '@screens/Chat';
import { Profile } from '@screens/Profile';
import { BottomMenu } from '@components/BottomMenu';

const { Navigator, Screen } = createBottomTabNavigator();

export function UserTabRoutes() {
  const { COLORS } = useTheme();

  return (
    <Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.PRIMARY_600,
        tabBarInactiveTintColor: COLORS.GRAY_800,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#FFF',
          position: 'absolute',
          bottom: 40,
          height: 60,
          marginHorizontal: 60,
          borderRadius: 30,
          paddingHorizontal: 20,
          shadowColor: '#000',
          elevation: 1,
          shadowOpacity: 0.06,
          shadowOffset: {
            width: 3,
            height: 5
          },
        }
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu iconName="paw" color={color} />
          )
        }}
      />
      <Screen
        name="chat"
        component={Chat}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu iconName="chat-outline" color={color} />
          )
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <BottomMenu iconName="account-outline" color={color} />
          )
        }}
      />
    </Navigator>
  )
}
