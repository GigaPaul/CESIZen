import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput,
  SafeAreaView, 
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';
import { styles } from '../../scripts/style.js'

export default function ProfileScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Main Content Area */}
      <View style={[styles.content, styles.content_profile]}>
        <View style={styles.profileTexts}>
          <View style={styles.profileTitle}>
            <Text style={styles.h1}>Paul</Text>
            <Text>#1234</Text>
          </View>
          <Text>Membre depuis 5 mois</Text>          
        </View>

        <View>
          <TouchableOpacity><Button title="Supprimer les données personnelles" /></TouchableOpacity>
          <View style={styles.importantButtons}>
            <TouchableOpacity><Text style={[styles.link, styles.link_blue]}>Se déconnecter</Text></TouchableOpacity>
            <TouchableOpacity><Text style={[styles.link, styles.link_red]}>Supprimer le compte</Text></TouchableOpacity>
          </View>
        </View>
      </View>
      

    </SafeAreaView>

  );
}