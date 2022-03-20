import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
const names = ['Deutschland', 'France', 'Algerien']
const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      {names.map(name => <Button title={name} onPress={() => navigation.navigate("About")} />)}
      <Button
        title="Go to About Screen"
        onPress={() => navigation.navigate("About")}
      />

      <Button
        title="Deutschland"
        onPress={() => navigation.navigate("Deutschland")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default Home;