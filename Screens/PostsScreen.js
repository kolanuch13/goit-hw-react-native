import { Text, StyleSheet, View, Image } from "react-native";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.avatar}>
          <Image style={styles.avatarImage} />
        </View>
        <View style={styles.name}>
          <Text>Mykola Riabokin</Text>
          <Text>kolanuch13@gmail.com</Text>
        </View>
      </View>
      <View stylr={styles.publications}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingTop: 32,
    paddingHorizontal: 16
  },
  profile: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  avatar: {

  },
  avatarImage: {
    width: 60,
    height: 60,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  name: {

  }
});