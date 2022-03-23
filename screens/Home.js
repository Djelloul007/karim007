import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
const names = [{ land:"Deutschland",id:1}, { land:"France",id:2}, { land:"London",id:2}]
let i=0
const Home = ({ navigation }) => {
  return (
    <View style={styles.center}>
      <Text>This is the home screen</Text>
      {names.map(name => 
      <Button title={name.land} onPress={() => navigation.navigate("About",{ itemId:name.land,id:name.id})} />
      )}
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