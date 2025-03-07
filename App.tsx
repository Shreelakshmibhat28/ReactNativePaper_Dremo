import React, { useState, useCallback } from "react";
import { StyleSheet, Keyboard } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AppBar from "./ReactNativePapers/AppBar";
import BottomNavigationBar from "./ReactNativePapers/BottomNavigationBar";

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [tabIndex, setTabIndex] = useState(0); // State for tab navigation

  const handleAddTask = useCallback((): void => {
    if (task) {
      setTasks([...tasks, task]);
      setTask("");
    }
  }, [task, tasks]);

  const handleEditTask = useCallback((index: number, updatedTask: string): void => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
    setEditIndex(-1);
    setTask("");
  }, [tasks]);

  const handleEditTaskClick = useCallback((index: number): void => {
    setTask(tasks[index]);
    setEditIndex(index);
    setTabIndex(0); // Auto-switch to "Add Task" tab
  }, [tasks]);

  const handleDeleteTask = useCallback((index: number): void => {
    setTasks(tasks.filter((_, i) => i !== index));
  }, [tasks]);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
    Keyboard.dismiss(); // Dismiss the keyboard when changing tabs
  };

  return (
    <PaperProvider>
      <AppBar />
      <BottomNavigationBar
        task={task}
        setTask={setTask}
        handleAddTask={handleAddTask}
        handleEditTask={handleEditTask}
        editIndex={editIndex}
        tasks={tasks}
        handleEditTaskClick={handleEditTaskClick}
        handleDeleteTask={handleDeleteTask}
        tabIndex={tabIndex} // Pass tab index state
        setTabIndex={handleTabChange} // Pass function to update tab index and dismiss keyboard
      />
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default App;