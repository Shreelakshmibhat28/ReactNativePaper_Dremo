import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import TaskCard from "./ReactNativePapers/Cards";
import AppBar from "./ReactNativePapers/AppBar";
import BottomNavigationBar from "./ReactNativePapers/BottomNavigationBar";

const TaskListRoute = ({ tasks, handleEditTask, handleDeleteTask }: any) => (
  <View style={styles.container}>
    {tasks.map((task: string, index: number) => (
      <TaskCard key={index} task={task} onEdit={() => handleEditTask(index)} onDelete={() => handleDeleteTask(index)} />
    ))}
  </View>
);

const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [tabIndex, setTabIndex] = useState(0); // State for tab navigation

  const handleAddTask = (): void => {
    if (task) {
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  const handleEditTask = (index: number): void => {
    setTask(tasks[index]);
    setEditIndex(index);
    setTabIndex(0); // Auto-switch to "Add Task" tab
  };

  const handleDeleteTask = (index: number): void => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <PaperProvider>
      <AppBar />
      <BottomNavigationBar
        task={task}
        setTask={setTask}
        handleAddTask={handleAddTask}
        editIndex={editIndex}
        tasks={tasks}
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        tabIndex={tabIndex} // Pass tab index state
        setTabIndex={setTabIndex} // Pass function to update tab index
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
