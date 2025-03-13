import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  Button
} from 'react-native';
import { User } from 'lucide-react-native';
import { styles } from './../../scripts/style.js'

export default function LikedScreen() {
  const [isShowingPageContenu, setIsShowingPageContenu] = useState(true);
  const [isShowingExerResp, setIsShowingExerResp] = useState(false);

  const showPageContenu = () => {
    setIsShowingPageContenu(true);
    setIsShowingExerResp(false);
  }

  const showExerResp = () => {
    setIsShowingPageContenu(false);
    setIsShowingExerResp(true);
  }
  

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
      <View style={[styles.content, styles.content_liked]}>
        <Text style={[styles.h2, styles.textCenter]}>Contenu aimé</Text>

        {/* Onglets */}
        <View style={styles.likedTab}>
          <TouchableOpacity style={[styles.likedTab__button]} onPress={showPageContenu}>
            <Text 
            style={[styles.likedTab__text, isShowingPageContenu ? styles.likedTab__text_active : null]}
            >Pages de contenus</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.likedTab__button]} onPress={showExerResp}>
            <Text 
            style={[styles.likedTab__text, isShowingExerResp ? styles.likedTab__text_active : null]}
            >Exercices de respiration</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.likedCategories}>
          {/* Catégories */}

          { isShowingPageContenu ? 
            <View style={styles.likedCat}>
              <View style={[styles.likedArticle, styles.shadow]}>
                <Text style={styles.h3}>Page de contenus 1</Text>
                <View style={styles.likedArticle__content}>
                  <Text numberOfLines={5} style={styles.likedArticle__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque arcu eu consectetur congue. Ut nunc ex, varius nec dui tincidunt, sodales tincidunt tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer volutpat tristique erat, eu rhoncus libero bibendum sed. Proin aliquam commodo augue, non imperdiet nunc pretium sed. Ut pulvinar semper ultricies. Pellentesque ut pharetra dui. Nulla euismod mattis leo, eget blandit libero ultrices ac. Proin ornare condimentum lectus ac molestie.</Text>
                </View>
              </View>

              <View style={[styles.likedArticle, styles.shadow]}>
                <Text style={styles.h3}>Page de contenus 2</Text>
                <View style={styles.likedArticle__content}>
                  <Text numberOfLines={5} style={styles.likedArticle__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus pellentesque arcu eu consectetur congue. Ut nunc ex, varius nec dui tincidunt, sodales tincidunt tortor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer volutpat tristique erat, eu rhoncus libero bibendum sed. Proin aliquam commodo augue, non imperdiet nunc pretium sed. Ut pulvinar semper ultricies. Pellentesque ut pharetra dui. Nulla euismod mattis leo, eget blandit libero ultrices ac. Proin ornare condimentum lectus ac molestie.</Text>
                </View>
              </View>
            </View>
          : null }




          { isShowingExerResp ? 
            <View style={styles.likedCat}>
              <View style={[styles.likedArticle, styles.shadow]}>
                <Text style={styles.h3}>Exercice de respiration 1</Text>
                <View style={styles.likedArticle__content}>
                  <Text numberOfLines={5} style={styles.likedArticle__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur eros ut urna pharetra sagittis. Vivamus non ante cursus, facilisis velit ut, euismod nisl. Pellentesque orci nisi, ornare id sagittis non, cursus vel nisl. Suspendisse quis arcu pulvinar, auctor lectus in, aliquam lorem. Suspendisse in nisi a orci auctor placerat vitae vel mauris. Aliquam vitae tortor ante. Donec venenatis, nunc egestas interdum aliquam, nisl erat facilisis nisi, ac consectetur neque lacus iaculis odio. Donec volutpat facilisis est sodales tincidunt. Proin a scelerisque libero. Maecenas tincidunt augue libero, pellentesque volutpat turpis semper quis. Aenean interdum libero risus, venenatis sollicitudin arcu sollicitudin vel. Nunc libero felis, venenatis ac tortor ac, commodo aliquam justo. Pellentesque congue vestibulum hendrerit. Maecenas semper leo mauris, sodales pretium justo tempor vitae. Suspendisse euismod at urna a vehicula.</Text>
                </View>
              </View>

              <View style={[styles.likedArticle, styles.shadow]}>
                <Text style={styles.h3}>Exercice de respiration 2</Text>
                <View style={styles.likedArticle__content}>
                  <Text numberOfLines={5} style={styles.likedArticle__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur eros ut urna pharetra sagittis. Vivamus non ante cursus, facilisis velit ut, euismod nisl. Pellentesque orci nisi, ornare id sagittis non, cursus vel nisl. Suspendisse quis arcu pulvinar, auctor lectus in, aliquam lorem. Suspendisse in nisi a orci auctor placerat vitae vel mauris. Aliquam vitae tortor ante. Donec venenatis, nunc egestas interdum aliquam, nisl erat facilisis nisi, ac consectetur neque lacus iaculis odio. Donec volutpat facilisis est sodales tincidunt. Proin a scelerisque libero. Maecenas tincidunt augue libero, pellentesque volutpat turpis semper quis. Aenean interdum libero risus, venenatis sollicitudin arcu sollicitudin vel. Nunc libero felis, venenatis ac tortor ac, commodo aliquam justo. Pellentesque congue vestibulum hendrerit. Maecenas semper leo mauris, sodales pretium justo tempor vitae. Suspendisse euismod at urna a vehicula.</Text>
                </View>
              </View>

              <View style={[styles.likedArticle, styles.shadow]}>
                <Text style={styles.h3}>Exercice de respiration 3</Text>
                <View style={styles.likedArticle__content}>
                  <Text numberOfLines={5} style={styles.likedArticle__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur eros ut urna pharetra sagittis. Vivamus non ante cursus, facilisis velit ut, euismod nisl. Pellentesque orci nisi, ornare id sagittis non, cursus vel nisl. Suspendisse quis arcu pulvinar, auctor lectus in, aliquam lorem. Suspendisse in nisi a orci auctor placerat vitae vel mauris. Aliquam vitae tortor ante. Donec venenatis, nunc egestas interdum aliquam, nisl erat facilisis nisi, ac consectetur neque lacus iaculis odio. Donec volutpat facilisis est sodales tincidunt. Proin a scelerisque libero. Maecenas tincidunt augue libero, pellentesque volutpat turpis semper quis. Aenean interdum libero risus, venenatis sollicitudin arcu sollicitudin vel. Nunc libero felis, venenatis ac tortor ac, commodo aliquam justo. Pellentesque congue vestibulum hendrerit. Maecenas semper leo mauris, sodales pretium justo tempor vitae. Suspendisse euismod at urna a vehicula.</Text>
                </View>
              </View>
            </View>
          : null }
        </View>

      </View>
    </SafeAreaView>
  );
}