import { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { CreatePostScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { PostsScreen } from "./PostsScreen";
import { TabRouter } from "@react-navigation/native";

export const Home = ({ navigation }) => {
  const Tabs = createBottomTabNavigator();

  const handleLogOut = () => {
    navigation.navigate("Login");
  };

  const handleBack = () => {
    navigation.navigate("PostsScreen");
  }

  return (
    <ImageBackground
      source={require("../assets/photos/PhotoBG.jpg")}
      style={styles.image}
    >
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "PostsScreen":
                iconName = "grid";
                break;
              case "CreatePostScreen":
                iconName = "plus";
                break;
              case "ProfileScreen":
                iconName = "user";
                break;
            }
            return <Feather name={iconName} size={size} color={color} />;
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            alignItems: "center",
            paddingTop: 9,
            height: 83,
          },
          tabBarItemStyle: {
            maxWidth: 70,
            height: 40,
            borderRadius: 100,
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FFF",
          activeBackgroundColor: "#FF6C00",
          inactiveTintColor: "#21212180",
        }}
      >
        <Tabs.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            headerTitle: () => <Text style={styles.title}>Publications</Text>,
            headerTitleAlign: "center",
            headerRight: () => (
              <TouchableOpacity onPress={handleLogOut}>
                <Feather name="log-out" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            ),
          }}
        />
        <Tabs.Screen
          name="CreatePostScreen"
          component={CreatePostScreen}
          options={{
            headerTitle: () => (
              <Text style={styles.title}>Create publication</Text>
            ),
            headerTitleAlign: "center",
            headerLeft: () => (
              <TouchableOpacity onPress={handleBack}>
                <Feather name="arrow-left" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            ),
            tabBarStyle: {
              display: "none",
            }
          }}
        />
        <Tabs.Screen name="ProfileScreen" component={ProfileScreen} options={{
          headerTitle: "none"
        }} />
      </Tabs.Navigator>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  title: {
    alignItems: "center",
    fontStyle: "normal",
    fontSize: 17,
    letterSpacing: -0.408,
  }
});