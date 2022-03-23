import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
const names = [
  { land:"Deutschland",id:1}, 
  { land:"France",id:2}, 
  { land:"London",id:3}
]

const About = ({ route, navigation }) => {
  const { itemId, id } = route.params;
  return (
    <View style={styles.center}>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>id: {JSON.stringify(id)}  next: {names[JSON.stringify(id)-1].land}   </Text>
      <Button
        title="click"
        onPress={() => navigation.navigate(names[JSON.stringify(id)-1].land)}
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

export default About;