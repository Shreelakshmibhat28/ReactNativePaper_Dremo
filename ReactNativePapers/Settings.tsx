import React from "react";
import { View, StyleSheet } from "react-native";
import { Switch, Text, useTheme, Button } from "react-native-paper";

const Settings: React.FC<{ toggleTheme: () => void; isDarkTheme: boolean }> = ({ toggleTheme, isDarkTheme }) => {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Button mode="contained" onPress={toggleTheme}>
        {isDarkTheme ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Settings;
