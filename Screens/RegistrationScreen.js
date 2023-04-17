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
  TouchableOpacity
} from "react-native"

export const RegistrationScreen = () => {
  const [registrationForm, setRegistrationForm] = useState({
    login: '',
    email: '',
    password: '',
  })
  const [showPass, setShowPass] = useState(false)
  
  const loginHandler = (text) => {
    setRegistrationForm(data => ({
      ...data,
      login: text,
    }))
  }
  
  const emailHandler = (text) => {
    setRegistrationForm(data => ({
      ...data,
      email: text,
    }))
  }

  const onShowPassword = () => {
    setShowPass(!showPass);
  }

  const passHandler = (text) => {
    setRegistrationForm(data => ({
      ...data,
      password: text,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(registrationForm);
  }

  return (
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
              <Text style={styles.avatarButtonText}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.heading}>Registration</Text>
          <TextInput
            onFocus={(e) => {
              console.log(e.target.style);
              e.target.style = styles.input
            }}
            onBlur={(e) => {
              console.log(e.target.style);
              e.target.style = styles.inputFocus;
            }}
            name="login"
            placeholder="Login"
            value={registrationForm.login}
            onChangeText={loginHandler}
            style={styles.input}
          />
          <TextInput
            onFocus={(e) => (e.target.style = styles.inputFocus)}
            name="email"
            placeholder="Email"
            value={registrationForm.email}
            onChangeText={emailHandler}
            style={styles.input}
          />
          <View>
            <TextInput
              onFocus={(e) => (e.target.style = styles.inputFocus)}
              name="password"
              placeholder="Password"
              value={registrationForm.password}
              onChangeText={passHandler}
              secureTextEntry={!showPass}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={onShowPassword}
              style={styles.privatButton}
            >
              <Text style={styles.privatButtonText}>Show</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit}
            style={styles.redirectButton}
          >
            <Text style={styles.redirectButtonText}>
              Already have an account? Log in
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
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
    borderWidth: 1,
    borderRadius: 12.5,
    borderColor: "#FF6C00",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  avatarButtonText: {
    color: "#FF6C00",
    fontWeight: 400,
    fontSize: 15,
  },
  heading: {
    // fontFamily: "Roboto",
    fontSize: 30,
    fontWeight: 500,
    lineHeight: 35,
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    width: 343,
    height: 50,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
  },
  inputFocus: {
    borderColor: "#FF6C00",
    backgroundColor: "#FFFFFF",
  },
  privatButton: {
    position: "absolute",
    top: "25%",
    right: 20,
  },
  privatButtonText: {
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
    color: "#FFFFFF",
  },
  redirectButton: {
    alignItems: "center",
    padding: 16,
  },
  redirectButtonText: {
    color: "#1B4371",
  },
});