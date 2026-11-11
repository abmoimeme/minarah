/**
 * Minarah Mobile App — Expo config
 *
 * React Native (Expo) app for donors and community members.
 * Features: donation history, prayer times, campaigns, Zakat calculator,
 *           push notifications, branded masjid experience.
 *
 * Firebase Realtime Database: https://minarah-adc1c-default-rtdb.firebaseio.com/
 */

export default {
  expo: {
    name: 'Minarah',
    slug: 'minarah',
    version: '0.1.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#1B4332',
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: 'com.minarah.app',
      googleServicesFile: './GoogleService-Info.plist',
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#1B4332',
      },
      package: 'com.minarah.app',
      googleServicesFile: './google-services.json',
    },
    web: {
      favicon: './assets/favicon.png',
    },
    plugins: [
      'expo-router',
      '@react-native-firebase/app',
    ],
    extra: {
      apiBaseUrl: process.env['EXPO_PUBLIC_API_URL'] ?? 'http://localhost:3000',
      rtdbUrl: 'https://minarah-adc1c-default-rtdb.firebaseio.com',
    },
  },
};
