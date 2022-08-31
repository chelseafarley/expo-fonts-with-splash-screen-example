import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

// expo install expo-font expo-splash-screen

export default function App() {
  const [fontsLoaded] = useFonts({
    "LemonLove": require("./assets/fonts/LemonLove.ttf"),
    "MilkyCoffee": require("./assets/fonts/MilkyCoffee.otf")
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
    prepare();
  }, []);

  useEffect(() => {
    if (fontsLoaded) {
      async function hide() {
        await SplashScreen.hideAsync();
      }
      hide();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: "LemonLove", fontSize: 30 }}>Lemon Love Font</Text>
      <Text style={{ fontFamily: "MilkyCoffee", fontSize: 30 }}>Milky Coffee Font</Text>
      <Text>Default Font</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
