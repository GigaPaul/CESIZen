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
import { ScrollView } from 'react-native';

const listItered = [
    "Maecenas a iaculis nunc.",
    "Cras vel pellentesque nulla.",
    "Nunc quam enim, maximus id dignissim ut, molestie et neque.",
    "Aliquam elementum.",
    "Donec vestibulum cursus ullamcorper.",
]

export default function BreathingScreen() {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

        <ScrollView>
            {/* Main Content Area */}
            <View style={[styles.content, styles.content_content]}>
                <View>
                    <View style={styles.content__header}>
                        <Text style={styles.h1}>Page de contenu</Text>
                        <Text style={styles.muted}>Sous-titre explicatif</Text>
                    </View>

                    <View>
                        <Text style={styles.h2}>Lorem ipsum dolor sit amet</Text>
                        <Text style={styles.content__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consectetur velit vel massa finibus rhoncus. Duis nisi metus, ornare egestas cursus et, commodo quis augue. Vivamus tincidunt leo tempor lacus bibendum, at feugiat turpis malesuada. Aliquam erat volutpat. Phasellus eu ex mattis, suscipit nisi rhoncus, blandit mauris. Morbi ullamcorper mi quis nisi viverra bibendum. Proin eleifend diam ut dolor efficitur, vel imperdiet orci volutpat. In id tincidunt velit. Sed non maximus neque.</Text>
                        <View style={styles.ul}>
                            {listItered.map((item, index) => (
                                <Text>{index+1}. {item}</Text>
                            ))}                            
                        </View>

                        {/* PARAMS */}
                        <View style={[styles.card, styles.shadow, styles.mb3]}>
                            <View style={styles.cardHead}>
                                <View style={styles.cardBody}>
                                    <Text style={styles.h3}>Paramètres</Text>
                                </View>
                            </View>
                            <View style={styles.cardBody}>
                                <View style={styles.mb1}>
                                    <View style={styles.exParam__inputGroup}>
                                        <Text>Cadence de respiration</Text>
                                        <View style={[styles.inputContainer, styles.m0]}>
                                            <View style={styles.inputParent}>
                                                <TextInput
                                                style={styles.inputText}
                                                placeholder="Adresse mail"
                                                value="4"
                                                />
                                            </View>
                                        </View>
                                        <Text style={styles.formText}>Temps en seconde durant lequel il faut retenir sa respiration.</Text>
                                    </View>

                                    <View>
                                        <Text>Nombre de répétitions</Text>
                                        <View style={[styles.inputContainer, styles.m0]}>
                                            <View style={styles.inputParent}>
                                                <TextInput
                                                style={styles.inputText}
                                                placeholder="Adresse mail"
                                                value="5"
                                                />
                                            </View>
                                        </View>
                                        <Text style={styles.formText}>Nombre de répétitions à effectuer.</Text>
                                    </View>                                    
                                </View>

                                <TouchableOpacity>
                                    <Button title="Sauvegarder" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity>
                            <View>
                                <Button title="Commencer" color="#198754" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>            
        </ScrollView>

      

    </SafeAreaView>

  );
}