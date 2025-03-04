import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import TaskCard from "./ReactNativePapers/Cards";
import AddTask from "./ReactNativePapers/AddTask";
import Settings from "./ReactNativePapers/Settings";
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
