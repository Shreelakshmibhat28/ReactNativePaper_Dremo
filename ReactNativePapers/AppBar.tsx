import React from "react";
import { Appbar, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";

const AppBar: React.FC = () => {
  return (
    <Appbar.Header style={styles.appBar}>
      <View style={styles.titleContainer}>
        <Text variant="titleLarge" style={styles.title}>
          LISTIFY
        </Text>
        <Text variant="bodySmall" style={styles.subtitle}>
          Simplify Your Tasks, Elevate Your Productivity!
        </Text>
      </View>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: "purple", // Customize app bar color
    alignItems: "center",
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    padding:10,
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
  subtitle: {
    color: "white",
    fontSize: 12,
    opacity: 0.8, // Makes it slightly lighter for better UI
  },
});

export default AppBar;
