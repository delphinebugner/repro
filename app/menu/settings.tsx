import { router } from "expo-router";
import { View, Button, Text, StyleSheet } from "react-native";

const SettingsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Je suis les settings</Text>
      <Button
        title="Go back to Menu"
        onPress={() => router.navigate("/menu")}
      />
      <Text style={styles.text}>Je suis en bas</Text>
    </View>
  );
};

export default SettingsPage;

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
