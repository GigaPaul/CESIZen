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
import { styles } from '../../scripts/style.js'
import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function AppLanding() {
  const [searchQuery, setSearchQuery] = useState('');
  // const navigation = useNavigation();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        

        
        {/* Main Content Area */}
        <View style={[styles.content, styles.content_index]}>

          {/* Search */}
          <View style={styles.searchContainer}>
            <Text style={styles.welcomeText}>Recherche de ressources</Text>
            <View style={styles.inputContainer}>
              <View style={styles.inputParent}>
                <Search size={20} color="#666" style={styles.searchIcon} />
                <TextInput
                  style={styles.inputText}
                  placeholder="Rechercher des ressources"
                  value={searchQuery}
                  onChangeText={setSearchQuery}
                />
              </View>
            </View>          
          </View>
            <View style={styles.searchFilters}>
                <TouchableOpacity style={styles.searchBtn}><Button title="Contenus" /></TouchableOpacity>
                <TouchableOpacity><Button title="Exercices" /></TouchableOpacity>
            </View>

          {/* Results */}
          <View>
            <TouchableOpacity
            onPress={() => router.push('/content/detail')}>
                <View style={[styles.ressourceResult, styles.card, styles.shadow]}>
                  <View>
                    <View style={styles.ressourceResult__img}></View>
                  </View>
                  <View style={styles.cardBody}>
                    <Text style={styles.h3}>His mother had always taught him</Text>
                    <Text numberOfLines={3}>His mother had always taught him not to ever think of himself as better than others. He'd tried to live by this motto. He never looked down on those who were less fortunate or who had less money than him. But the stupidity of the group of people he was talking to made him change his mind.</Text>
                  </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => router.push('/breathing')}>
                <View style={[styles.ressourceResult, styles.card, styles.shadow]}>
                  <View>
                    <View style={styles.ressourceResult__img}></View>
                  </View>
                  <View style={styles.cardBody}>
                    <Text style={styles.h3}>He was an expert but not in a discipline</Text>
                    <Text numberOfLines={3}>He was an expert but not in a discipline that anyone could fully appreciate. He knew how to hold the cone just right so that the soft server ice-cream fell into it at the precise angle to form a perfect cone each and every time. It had taken years to perfect and he could now do it without even putting any thought behind it.</Text>
                  </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => router.push('/content/detail')}>
                <View style={[styles.ressourceResult, styles.card, styles.shadow]}>
                  <View>
                    <View style={styles.ressourceResult__img}></View>
                  </View>
                  <View style={styles.cardBody}>
                    <Text style={styles.h3}>Dave watched as the forest burned up on the hill.</Text>
                    <Text numberOfLines={3}>Dave watched as the forest burned up on the hill, only a few miles from her house. The car had been hastily packed and Marta was inside trying to round up the last of the pets. Dave went through his mental list of the most important papers and documents that they couldn't leave behind. He scolded himself for not having prepared these better in advance and hoped that he had remembered everything that was needed. He continued to wait for Marta to appear with the pets, but she still was nowhere to be seen.</Text>
                  </View>
                </View>
            </TouchableOpacity>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>

  );
}