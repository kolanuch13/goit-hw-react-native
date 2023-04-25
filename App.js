import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { useState, useEffect, useCallback } from 'react';
import { LoginScreen } from './Screens/LoginScreen';
import * as Font from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from './Screens/Home';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [user, setUser] = useState({
    login: "",
    email: "",
    password: "",
  })

    useEffect(() => {
      async function prepare() {
        try {
          await SplashScreen.preventAutoHideAsync();
          await Font.loadAsync({
            "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
            "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
          });
        } catch (e) {
          console.warn(e);
        } finally {
          setAppIsReady(true);
        }
      }

      prepare();
    }, []);

    const onLayoutRootView = useCallback(async () => {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    }, [appIsReady]);

    if (!appIsReady) {
      return null;
    }

  const MainStack = createStackNavigator();

  return (
    <NavigationContainer>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          source={require("./assets/photos/PhotoBG.jpg")}
          style={styles.image}
        >
          <MainStack.Navigator initialRouteName="Login">
            <MainStack.Screen
              name="Registration"
              component={RegistrationScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="Login"
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
            />
            <MainStack.Screen
              name="Home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
          </MainStack.Navigator>
          <StatusBar style="auto" />
        </ImageBackground>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: 'flex-end',
  }
});
