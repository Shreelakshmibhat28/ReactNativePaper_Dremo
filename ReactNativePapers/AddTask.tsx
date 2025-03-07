import React, { useState, useCallback, memo, useEffect } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform } from "react-native";
import { Button, TextInput } from "react-native-paper";

interface AddTaskProps {
  task: string;
  setTask: (task: string) => void;
  handleAddTask: () => void;
  handleEditTask: (index: number, task: string) => void;
  editIndex: number;
}

const AddTask: React.FC<AddTaskProps> = memo(({ task, setTask, handleAddTask, handleEditTask, editIndex }) => {
  const [localTask, setLocalTask] = useState<string>(task);

  useEffect(() => {
    setLocalTask(task);
  }, [task]);

  const handleChangeText = useCallback((text: string) => {
    setLocalTask(text);
  }, []);

  const handleAddTaskClick = () => {
    if (editIndex !== -1) {
      handleEditTask(editIndex, localTask);
    } else {
      setTask(localTask);
      handleAddTask();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.inner}>
            <TextInput
              mode="outlined"
              label="Task"
              placeholder="Enter task..."
              value={localTask}
              onChangeText={handleChangeText}
              blurOnSubmit={false} // Prevent the input from losing focus on submit
              style={styles.input}
            />
            <Button mode="contained" onPress={handleAddTaskClick} style={styles.addButton}>
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
    marginBottom: 10,
    // height:100,
    // fontSize:18,
  },
  addButton: {
    marginTop: 10,
  },
});

export default AddTask;