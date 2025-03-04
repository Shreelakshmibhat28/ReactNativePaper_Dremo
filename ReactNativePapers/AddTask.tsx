import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

interface AddTaskProps {
  task: string;
  setTask: (task: string) => void;
  handleAddTask: () => void;
  editIndex: number;
}

const AddTask: React.FC<AddTaskProps> = ({ task, setTask, handleAddTask, editIndex }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter task..."
        value={task}
        onChangeText={setTask}
      />
      <Button mode="contained" onPress={handleAddTask} style={styles.addButton}>
        {editIndex !== -1 ? "Update Task" : "Add Task"}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
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
