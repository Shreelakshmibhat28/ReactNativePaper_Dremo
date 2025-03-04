import React from "react";
import { BottomNavigation } from "react-native-paper";
import AddTask from "./AddTask";
import TaskCard from "./Cards";
import Settings from "./Settings";
import { View, StyleSheet, ScrollView } from "react-native";

const TaskListRoute = ({ tasks, handleEditTask, handleDeleteTask }: any) => (
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    {tasks.map((task: string, index: number) => (
      <TaskCard key={index} task={task} onEdit={() => handleEditTask(index)} onDelete={() => handleDeleteTask(index)} />
    ))}
  </ScrollView>
);

const BottomNavigationBar: React.FC<any> = ({
  task,
  setTask,
  handleAddTask,
  editIndex,
  tasks,
  handleEditTask,
  handleDeleteTask,
  tabIndex,
  setTabIndex,
}) => {
  const routes = [
    { key: "addTask", title: "Add Task", icon: "plus" },
    { key: "taskList", title: "Task List", icon: "format-list-bulleted" },
    { key: "settings", title: "Settings", icon: "cog" },
  ];

  const renderScene = BottomNavigation.SceneMap({
    addTask: () => <AddTask task={task} setTask={setTask} handleAddTask={handleAddTask} editIndex={editIndex} />,
    taskList: () => <TaskListRoute tasks={tasks} handleEditTask={handleEditTask} handleDeleteTask={handleDeleteTask} />,
    settings: Settings,
  });

  return (
    <BottomNavigation
      navigationState={{ index: tabIndex, routes }}
      onIndexChange={setTabIndex} // Update tab when changed and dismiss keyboard
      renderScene={renderScene}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  scrollContainer: {
    paddingVertical: 10,
    // alignItems: "center",
  },
});

export default BottomNavigationBar;