import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter, Tabs } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, Platform } from 'react-native';
import { styles } from '../scripts/style.js'
import { User, ShieldUser, Bell, Heart } from 'lucide-react-native';
import 'react-native-reanimated';
import { HapticTab } from '@/components/HapticTab';
import { Colors } from '@/constants/Colors';
import TabBarBackground from '@/components/ui/TabBarBackground';



import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  const router = useRouter();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => router.push('/')}
          >
            <Text style={styles.appName}>CESIZen</Text>
          </TouchableOpacity>
          <View style={styles.header__right}>
            <TouchableOpacity 
              onPress={() => router.push('/admin')}
              style={styles.mr3}
            >
              <ShieldUser size={24} color="#333" />
            </TouchableOpacity>     
            <TouchableOpacity 
              onPress={() => router.push('/profile')}
            >
              <User size={24} color="#333" />
            </TouchableOpacity>          
          </View>

        </View>

        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="+not-found" />
        </Stack>




        <StatusBar style="auto" />
      </SafeAreaView>
    </ThemeProvider>
  );
}
