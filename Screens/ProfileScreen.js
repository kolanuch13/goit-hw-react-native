import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableOpacity,
  ImageBackground,
  StyleSheet
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import {Map} from './MapScreen'

export const ProfileScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate("Login");
  };

  const posts = [
    {
      image: "",
      title: "Forest",
      location: "Ivano-Frankivs'k Region, Ukraine",
      likes: 500,
      comments: 8,
    },
    {
      image: "",
      title: "Canyon",
      location: "Zhytomyr Region, Ukraine",
      likes: 500,
      comments: 8,
    },
  ];

  return (
    <ImageBackground
      source={require("../assets/photos/PhotoBG.jpg")}
      style={styles.image}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : ""}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.avatar}>
              <Image style={styles.avatarImage} />
              <TouchableOpacity style={styles.avatarButton}>
                <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleBack}
                style={styles.logoutButton}
              >
                <Feather name="log-out" size={24} color="#BDBDBD" />
              </TouchableOpacity>
            </View>
            <View style={styles.postsContainer}>
              {posts.map((item, index) => {
                <Map photo={item} id={index} />
              })}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};
  
const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  container: {
    flex: 0.65,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
  },
  avatar: {
    position: "absolute",
    alignItems: "center",
    top: -150,
    right: 0,
    left: 0,
  },
  avatarImage: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatarButton: {
    position: "absolute",
    right: -72.5,
    bottom: 10,
    width: 25,
    height: 25,
    borderColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 16,
  },
  logoutButton: {
    position: "absolute",
    right: -180,
    bottom: 10,
    width: 25,
    height: 25,
  },
  avatarButtonText: {
    color: "#FF6C00",
    fontSize: 15,
  },
  postsContainer: {
    backgroundColor: "red",
    width: "100%",
    height: "100%"
  }
});
