import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export const CreatePostScreen = ({ navigation }) => {
  const [photoForm, setPhotoForm] = useState({
    name: "",
    location: "",
  });

  const nameHandler = (text) => {
    setPhotoForm((data) => ({
      ...data,
      name: text,
    }));
  };

  const locationHandler = (text) => {
    setPhotoForm((data) => ({
      ...data,
      location: text,
    }));
  };

  const buttonStyle = () => {
    let currentStyle;
    photoForm.name === ""
      ? (currentStyle = styles.submitButton)
      : (currentStyle = styles.submitButtonActive);
    return currentStyle;
  };

  const textStyle = () => {
    let currentStyle;
    photoForm.name === ""
      ? (currentStyle = styles.submitButtonText)
      : (currentStyle = styles.submitButtonTextActive);
    return currentStyle;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(photoForm);
    setPhotoForm({
      name: "",
      location: "",
    });
    navigation.navigate("PostsScreen");
  };

  const onDelete = () => {
    setPhotoForm({
      name: "",
      location: "",
    });
    navigation.navigate("PostsScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} />
        <TouchableOpacity style={styles.imageButtonAdd}>
          <Feather name="camera" size={24} color="gray" />
        </TouchableOpacity>
      </View>
      <Text style={styles.imageDescription}>Download photo</Text>
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          name="name"
          value={photoForm.name}
          onChangeText={nameHandler}
          placeholder="Name..."
        />
        <View style={styles.input}>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <TextInput
            style={styles.input}
            name="name"
            value={photoForm.location}
            onChangeText={locationHandler}
            placeholder="Location..."
          />
        </View>
        <TouchableOpacity onPress={handleSubmit} style={buttonStyle()}>
          <Text style={textStyle()}>Publish</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.deleteButtonContainer}>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Feather name="trash-2" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 32,
    paddingHorizontal: 16,
  },
  imageContainer: {
    width: "100%",
    height: 267,
  },
  image: {
    width: "100%",
    height: 267,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 16,
  },
  imageButtonAdd: {
    position: "absolute",
    top: "40%",
    left: "40%",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF70",
    borderRadius: 100,
  },
  imageDescription: {
    marginTop: 8,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
  formContainer: {
    marginTop: 32,
  },
  input: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
    gap: 4,
  },
  submitButton: {
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    alignItems: "center",
    padding: 16,
    marginTop: 43,
  },
  submitButtonActive: {
    backgroundColor: "#FF6C00",
    borderRadius: 50,
    alignItems: "center",
    padding: 16,
    marginTop: 43,
    color: "#BDBDBD",
  },
  submitButtonText: {
    fontFamily: "Roboto-Regular",
    color: "#BDBDBD",
  },
  submitButtonTextActive: {
    fontFamily: "Roboto-Regular",
    color: "#FFFFFF",
  },
  deleteButtonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 34,
    alignItems: "center",
  },
  deleteButton: {
    width: 70,
    height: 40,
    backgroundColor: "#F6F6F6",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 43,
  },
});
