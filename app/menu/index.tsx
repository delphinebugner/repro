import { router } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

const MenuPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>I am the Menu</Text>
      <Button
        title="Go to Settings"
        onPress={() => router.navigate("/menu/settings")}
      />
      <Text style={styles.text}>I'm the bottom</Text>
    </View>
  );
};

export default MenuPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 20,
  },
  text: {
    fontSize: 20,
    backgroundColor: "red",
  },
});
