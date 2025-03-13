import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';
import { User } from 'lucide-react-native';
import { styles } from './../../scripts/style.js'


export default function NotifScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>CESIZen</Text>
        <TouchableOpacity 
          onPress={() => console.log('Navigate to profile')}
        >
          <User size={24} color="#333" />
        </TouchableOpacity>
      </View>
      
      {/* Main Content Area */}
      <View style={[styles.content, styles.content_notif]}>
        <Text style={[styles.h2, styles.textCenter]}>Notifications</Text>
        <View style={styles.notif}>
          <Text style={styles.h3}>Exercice 1</Text>
          <Text style={styles.notif__desc}>Une nouvelle ressource a été rajoutée à la catégorie <Text style={styles.bold}>Exercice de respiration</Text>.</Text>
          <Text style={styles.notif__link}>Découvrez-la maintenant!</Text>
        </View>
        <View style={styles.notif}>
          <Text style={styles.h3}>Page de contenus</Text>
          <Text style={styles.notif__desc}>Une nouvelle ressource a été rajoutée à la catégorie <Text style={styles.bold}>Page de contenus</Text>.</Text>
          <Text style={styles.notif__link}>Découvrez-la maintenant!</Text>
        </View>
        <View style={styles.notif}>
          <Text style={styles.h3}>Exercice 2</Text>
          <Text style={styles.notif__desc}>Une nouvelle ressource a été rajoutée à la catégorie <Text style={styles.bold}>Exercice de respiration</Text>.</Text>
          <Text style={styles.notif__link}>Découvrez-la maintenant!</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}