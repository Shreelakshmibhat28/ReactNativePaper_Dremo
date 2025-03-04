import React, { useCallback, memo } from "react";
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { Button } from "react-native-paper";

interface AddTaskProps {
  task: string;
  setTask: (task: string) => void;
  handleAddTask: () => void;
  editIndex: number;
}

const AddTask: React.FC<AddTaskProps> = memo(({ task, setTask, handleAddTask, editIndex }) => {
  const handleChangeText = useCallback((text: string) => {
    setTask(text);
  }, [setTask]);

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    style={styles.container}>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.inner}>
          <TextInput
            style={styles.input}
            placeholder="Enter task..."
            value={task}
            onChangeText={handleChangeText}
            autoFocus={true} // Ensure the input is focused
            blurOnSubmit={false} // Prevent the input from losing focus on submit
          />
          <Button mode="contained" onPress={handleAddTask} style={styles.addButton}>
            {editIndex !== -1 ? "Update Task" : "Add Task"}
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inner: {
    justifyContent: "center",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
    marginBottom: 10,
  },
  addButton: {
    marginTop: 10,
  },
});

export default AddTask;