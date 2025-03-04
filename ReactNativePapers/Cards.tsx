import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { Card } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

interface CardProps {
  task: string;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskCard: React.FC<CardProps> = ({ task, onEdit, onDelete }) => {
  return (
    
      <View style={styles.container}>
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.taskText}>{task}</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={onEdit}>
                <MaterialIcons name="edit" size={20} color="green" />
              </TouchableOpacity>
              <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
                <MaterialIcons name="delete" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        </Card>
      </View>
      
  );
};

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    card: {
      marginBottom: 10, // Set a constant margin for consistent spacing
      borderRadius: 6,
      elevation: 2,
      padding: 15,
    },
    cardContent: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    taskText: {
      fontSize: 15,
    },
    actions: {
      flexDirection: "row",
    },
    deleteButton: {
      marginLeft: 10,
    },
    
  });
export default TaskCard;