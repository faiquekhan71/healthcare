import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import SignInWithOAuth from "./App/Components/SignInWithOAuth";
import Login from "./App/Screens/Login";
import Home from "./App/Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation";
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "appfont-regular": require("./assets/fonts/Rubik-Regular.ttf"),
    "appfont-light": require("./assets/fonts/Rubik-Light.ttf"),
    "appfont-bold": require("./assets/fonts/Rubik-Bold.ttf"),
    "appfont-semibold": require("./assets/fonts/Rubik-SemiBold.ttf"),
  });
  return (
    <ClerkProvider
      publishableKey={
        "pk_test_c2ltcGxlLWZlbGluZS0xNC5jbGVyay5hY2NvdW50cy5kZXYk"
      }
    >
      <SafeAreaView style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
