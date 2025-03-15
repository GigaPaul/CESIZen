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
import { Search } from 'lucide-react-native';


export default function AppLanding() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Main Content Area */}
      <View style={[styles.content, styles.content_profile]}>
        <Text style={styles.h2}>Connexion</Text>
        
        {/* Inputs */}
        <View>
            <View style={styles.inputContainer}>
                <View style={styles.inputParent}>
                    <TextInput
                    style={styles.inputText}
                    placeholder="Adresse mail"
                    />
                </View>
            </View>

            <View style={styles.inputContainer}>
                <View style={styles.inputParent}>
                    <TextInput
                    style={styles.inputText}
                    placeholder="Mot de passe"
                    secureTextEntry={true} 
                    />
                </View>
            </View>            
        </View>

        <Text>Pas encore de compte ? <Text style={[styles.link, styles.link_blue]}>S'inscrire</Text></Text>

      </View>
      

    </SafeAreaView>

  );
}