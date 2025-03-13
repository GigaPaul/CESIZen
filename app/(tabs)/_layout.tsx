import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

import React, { useState } from 'react';
import { 
  Home, 
  Bell, 
  Heart
} from 'lucide-react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (


    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="notif"
        options={{
          title: 'Notifications',
          tabBarIcon: ({ color }) => <Bell size={24} color={color} />,
          tabBarShowLabel: false,
        }}
      />
      <Tabs.Screen
        name="liked"
        options={{
          title: 'Favoris',
          tabBarIcon: ({ color }) => <Heart size={24} color={color} />,
          tabBarShowLabel: false,
        }}
      />
    </Tabs>
  );
}



const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    flex: 1,
    backgroundColor: '#fff',
  },
});