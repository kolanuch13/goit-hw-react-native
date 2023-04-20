import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { CreatePostScreen } from "./CreatePostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { PostsScreen } from "./PostsScreen";

export const Home = ({user}) => {
  const Tabs = createBottomTabNavigator();
  return (
    <ImageBackground
      source={require("../assets/photos/PhotoBG.jpg")}
      style={styles.image}
    >
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "PostScreen") {
              iconName = focused ? "grid" : "grid";
            } else if (route.name === "CreatePostScreen") {
              iconName = focused ? "plus" : "plus";
            } else if (route.name === "ProfileScreen") {
              iconName = focused ? "user" : "user";
            }
            return <Feather name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#FF6C00",
          inactiveTintColor: "#21212180",
        }}
      >
        <Tabs.Screen name="PostsScreen" component={PostsScreen} user={user} />
        <Tabs.Screen name="CreatePostScreen" component={CreatePostScreen} />
        <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
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
});