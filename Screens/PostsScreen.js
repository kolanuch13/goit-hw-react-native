import { Text, StyleSheet, View } from "react-native";

export const PostsScreen = ({user}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{user.login}</Text>
        <Text>{user.mail}</Text>
      </View>
      <Text>PostsScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});