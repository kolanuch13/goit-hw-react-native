import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export const Map = ({image, title, location, likes, comments}) => {

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image}/>
      </View>
      <View style={styles.descriptionContainer}>
        <Text>{title}</Text>
        <View style={styles.comment}>
          <Feather name="message-circle" size={24} color="black" />
          <Text>{comments}</Text>
        </View>
        <View style={styles.like}>
          <Feather name="thumbs-up" size={24} color="black" />
          <Text>{likes}</Text>
        </View>
        <View style={styles.location}>
          <Feather name="map-pin" size={24} color="#BDBDBD" />
          <Text>{location}</Text>
        </View>
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
});