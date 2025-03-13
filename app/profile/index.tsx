import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';
import { User } from 'lucide-react-native';
import { styles } from '../../scripts/style.js'


export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    
      
      {/* Main Content Area */}
      <View style={[styles.content]}>
        <Text>Profile</Text>
      </View>
    </SafeAreaView>
  );
}