import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  Button
} from 'react-native';
import { Search, User } from 'lucide-react-native';
import { styles } from './../../scripts/style.js'
import { createStaticNavigation, NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function AppLanding() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>CESIZen</Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Profile', {name: 'Paul'})}
        >
          <User size={24} color="#333" />
        </TouchableOpacity>
        <Button title="Test" onPress={() => navigation.navigate("profile/index", { headerShown:false })} />
      </View>
      
      {/* Main Content Area */}
      <View style={[styles.content, styles.content_index]}>
        <Text style={styles.welcomeText}>Nos ressources sont à vous!</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>
      </View>
      

    </SafeAreaView>

  );
}