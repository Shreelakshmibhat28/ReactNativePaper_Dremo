import React, { useState } from "react";
import { View, Text, TextInput, FlatList, StyleSheet } from "react-native";
import { Provider as PaperProvider, Button } from "react-native-paper";
import TaskCard from "./ReactNativePapers/Cards";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number>(-1);

  const handleAddTask = (): void => {
    if (task) {
      if (editIndex !== -1) {
        // Edit existing task
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        // Add new task
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  const handleEditTask = (index: number): void => {
    setTask(tasks[index]);
    setEditIndex(index);
  };

  const handleDeleteTask = (index: number): void => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text style={styles.heading}>LISTIFY</Text>
        <Text style={styles.title}>Simplify Your Tasks, Elevate Your Productivity!</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Add your task here!"
          value={task}
          onChangeText={setTask}
        />
        
        <Button mode="contained" onPress={handleAddTask} style={styles.addButton}>
          {editIndex !== -1 ? "Update Task" : "Add Task"}
        </Button>

        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <TaskCard
              task={item}
              onEdit={() => handleEditTask(index)}
              onDelete={() => handleDeleteTask(index)}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  heading: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "blue",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  addButton: {
    marginBottom: 15,
  },
});

export default App;
