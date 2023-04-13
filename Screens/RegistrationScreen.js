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
  Button } from "react-native"

export const RegistrationScreen = () => {
  const [registrationForm, setRegistrationForm] = useState({
    login: '',
    email: '',
    password: '',
  })
  const [showPass, setShowPass] = useState(true)

  const onShowPassword = e => {
    setShowPass(!showPass);
  }

  const loginHandler = (text) => {
    console.log(text);
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
          <Text>
            Registration
          </Text>
          <TextInput
            name="login"
            placeholder="Login"
            value={registrationForm.login}
            onChangeText={loginHandler}
            style={styles.input}
          />
          <TextInput
            name="email"
            placeholder="Email"
            value={registrationForm.email}
            onChangeText={emailHandler}
            style={styles.input}
          />
          <Button title={"show"} onPress={onShowPassword}/>
          <TextInput
            name="password"
            placeholder="Password"
            value={registrationForm.password}
            onChangeText={passHandler}
            secureTextEntry={!showPass}
            style={styles.input}
          />
          <Button title={"Submit"} onPress={handleSubmit}/>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: .7,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 343,
    height: 50,

  }
});