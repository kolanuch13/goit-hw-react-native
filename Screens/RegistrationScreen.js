import { useState } from "react"
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
import { AntDesign } from "@expo/vector-icons";

export const RegistrationScreen = ({ navigation, user }) => {
  const [registrationForm, setRegistrationForm] = useState({
    login: "",
    email: "",
    password: "",
  });
  const [showPass, setShowPass] = useState(false);
  const [isInputActive, setIsInputActive] = useState("");

  const loginHandler = (text) => {
    setRegistrationForm((data) => ({
      ...data,
      login: text,
    }));
  };

  const emailHandler = (text) => {
    setRegistrationForm((data) => ({
      ...data,
      email: text,
    }));
  };

  const onShowPassword = () => {
    setShowPass(!showPass);
  };

  const passHandler = (text) => {
    setRegistrationForm((data) => ({
      ...data,
      password: text,
    }));
  };

  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registrationForm);
    user(registrationForm)
    setRegistrationForm({
      login: "",
      email: "",
      password: "",
    });
    navigation.navigate("Home");
  };

  const handleRedirect = () => {
    navigation.navigate("Login");
  };

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
              <TouchableOpacity
                onPress={onShowPassword}
                style={styles.avatarButton}
              >
                <AntDesign name="pluscircleo" size={24} color="#FF6C00" />
              </TouchableOpacity>
            </View>
            <Text style={styles.heading}>Registration</Text>
            <TextInput
              onFocus={(e) => {
                setIsInputActive("login");
              }}
              onBlur={(e) => {
                setIsInputActive("");
              }}
              name="login"
              placeholder="Login"
              value={registrationForm.login}
              onChangeText={loginHandler}
              style={
                isInputActive === "login" ? styles.inputActive : styles.input
              }
            />
            <TextInput
              onFocus={(e) => {
                setIsInputActive("email");
              }}
              onBlur={(e) => {
                setIsInputActive("");
              }}
              name="email"
              placeholder="Email"
              value={registrationForm.email}
              onChangeText={emailHandler}
              style={
                isInputActive === "email" ? styles.inputActive : styles.input
              }
            />
            <View>
              <TextInput
                onFocus={(e) => {
                  setIsInputActive("password");
                }}
                onBlur={(e) => {
                  setIsInputActive("");
                }}
                name="password"
                placeholder="Password"
                value={registrationForm.password}
                onChangeText={passHandler}
                secureTextEntry={!showPass}
                style={
                  isInputActive === "password"
                    ? styles.inputActive
                    : styles.input
                }
              />
              <TouchableOpacity
                onPress={onShowPassword}
                style={styles.privatButton}
              >
                <Text style={styles.privatButtonText}>Show</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={handleSubmit}
              style={styles.submitButton}
            >
              <Text style={styles.submitButtonText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleRedirect}
              style={styles.redirectButton}
            >
              <Text style={styles.redirectButtonText}>
                Already have an account? Log in
              </Text>
            </TouchableOpacity>
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
    flex: 0.7,
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
    left: "29%",
  },
  avatarImage: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatarButton: {
    position: "absolute",
    right: -12.5,
    bottom: 10,
    width: 25,
    height: 25,
    borderColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  avatarButtonText: {
    color: "#FF6C00",
    // fontWeight: 400,
    fontSize: 15,
  },
  heading: {
    fontFamily: "Roboto-Bold",
    fontSize: 30,
    // fontWeight: 500,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    fontFamily: "Roboto-Regular",
    width: 343,
    height: 50,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  inputActive: {
    fontFamily: "Roboto-Regular",
    width: 343,
    height: 50,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  privatButton: {
    position: "absolute",
    top: "25%",
    right: 20,
  },
  privatButtonText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
  },
  submitButton: {
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    alignItems: "center",
    padding: 16,
    marginTop: 43,
  },
  submitButtonText: {
    fontFamily: "Roboto-Regular",
    color: "#FFFFFF",
  },
  redirectButton: {
    alignItems: "center",
    padding: 16,
  },
  redirectButtonText: {
    fontFamily: "Roboto-Regular",
    color: "#1B4371",
  },
});