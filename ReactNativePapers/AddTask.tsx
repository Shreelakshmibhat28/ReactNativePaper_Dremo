import React from "react";
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { Button } from "react-native-paper";

interface AddTaskProps {
  task: string;
  setTask: (task: string) => void;
  handleAddTask: () => void;
  editIndex: number;
}

const AddTask: React.FC<AddTaskProps> = ({ task, setTask, handleAddTask, editIndex }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inner}>
            <TextInput
              style={styles.input}
              placeholder="Enter task..."
              value={task}
              onChangeText={setTask}
              autoFocus={true} // Ensure the input is focused
            />
            <Button mode="contained" onPress={handleAddTask} style={styles.addButton}>
              {editIndex !== -1 ? "Update Task" : "Add Task"}
            </Button>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 50,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  addButton: {
    marginTop: 10,
  },
});

export default AddTask;