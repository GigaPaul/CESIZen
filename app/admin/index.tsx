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
import { Search } from 'lucide-react-native';
import { styles } from '../../scripts/style.js'

export default function AdminScreen() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Main Content Area */}
      <View style={[styles.content, styles.content_admin]}>
        <Text style={styles.welcomeText}>Bases de données utilisateur</Text>
        <View style={styles.inputContainer}>
          <View style={styles.inputParent}>
            <Search size={20} color="#666" style={styles.searchIcon} />
            <TextInput
              style={styles.inputText}
              placeholder="Nom ou ID d'utilisateur"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>
        <View style={styles.adminButtons}>
            <TouchableOpacity style={styles.adminBtn}><Button title="Tous" /></TouchableOpacity>
            <TouchableOpacity style={styles.adminBtn}><Button title="Blacklist" /></TouchableOpacity>
            <TouchableOpacity><Button title="Whitelist" /></TouchableOpacity>
        </View>

        <View style={styles.table}>
            <View style={styles.col}>
                <Text style={[styles.bold, styles.row]}>ID</Text>
                <Text style={styles.row}>1</Text>
                <Text style={styles.row}>2</Text>
                <Text style={styles.row}>3</Text>
                <Text style={styles.row}>4</Text>
                <Text style={styles.row}>5</Text>
                <Text style={styles.row}>6</Text>
                <Text style={styles.row}>7</Text>
                <Text style={styles.row}>8</Text>
                <Text style={styles.row}>9</Text>
                <Text style={styles.row}>10</Text>
            </View>
            <View style={styles.col}>
                <Text style={[styles.bold, styles.row]}>Nom</Text>
                <Text style={styles.row}>Emily</Text>
                <Text style={styles.row}>Michael</Text>
                <Text style={styles.row}>Sophia</Text>
                <Text style={styles.row}>James</Text>
                <Text style={styles.row}>Emma</Text>
                <Text style={styles.row}>Olivia</Text>
                <Text style={styles.row}>Alexander</Text>
                <Text style={styles.row}>Ava</Text>
                <Text style={styles.row}>Ethan</Text>
                <Text style={styles.row}>Isabella</Text>
            </View>
            <View style={styles.col}>
                <Text style={[styles.bold, styles.row]}>Inscription</Text>
                <Text style={styles.row}>10/04/2024 11:54</Text>
                <Text style={styles.row}>10/04/2024 11:54</Text>
                <Text style={styles.row}>10/04/2024 11:54</Text>
                <Text style={styles.row}>10/04/2024 11:54</Text>
                <Text style={styles.row}>10/04/2024 11:54</Text>
                <Text style={styles.row}>10/04/2024 11:54</Text>
                <Text style={styles.row}>10/04/2024 11:54</Text>
                <Text style={styles.row}>10/04/2024 11:54</Text>
                <Text style={styles.row}>10/04/2024 11:54</Text>
                <Text style={styles.row}>10/04/2024 11:54</Text>
            </View>
            <View style={styles.col}>
                <Text style={[styles.bold, styles.row]}>Statut</Text>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_green]}>Actif</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_green]}>Actif</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_green]}>Actif</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_green]}>Actif</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_green]}>Actif</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_green]}>Actif</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_green]}>Actif</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_green]}>Actif</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_green]}>Actif</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_green]}>Actif</Text></TouchableOpacity>
            </View>
            <View style={[styles.col, styles.col_last]}>
                <Text style={[styles.bold, styles.row]}>Actions</Text>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_red]}>Supprimer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_red]}>Supprimer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_red]}>Supprimer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_red]}>Supprimer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_red]}>Supprimer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_red]}>Supprimer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_red]}>Supprimer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_red]}>Supprimer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_red]}>Supprimer</Text></TouchableOpacity>
                <TouchableOpacity style={styles.row}><Text style={[styles.link, styles.link_red]}>Supprimer</Text></TouchableOpacity>
            </View>
        </View>
      </View>
      

    </SafeAreaView>

  );
}