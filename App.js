import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { useState } from 'react';
import { LoginScreen } from './Screens/LoginScreen';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [screen, setScreen] = useState("reg")
  const [isReady, setIsReady] = useState(false)

  const loadApp = async () => {
    await Font.loadAsync({
      'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
      'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
    });
  }

  if (!isReady) {
    return <AppLoading
      startAsync={loadApp}
      onFinish={()=>setIsReady(true)}
      onError={console.log("err")}
      />
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require("./assets/photos/PhotoBG.jpg")} style={styles.image}>
        {screen === "reg" 
          ? <RegistrationScreen set={setScreen}/>
          : <LoginScreen set={setScreen}/>
        }
        {/* <RegistrationScreen set={setScreen}/> */}
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
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
