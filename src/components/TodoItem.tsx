import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Todo } from './types';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  console.log(todo, 'from todo item component');
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.todoText}>
        <Text style={[styles.text, todo?.completed && styles.completedText]}>
          {todo.text}
        </Text>
      </TouchableOpacity>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.editBtn}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteBtn}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  todoText: {
    flex: 1,
  },
  text: {
    fontSize: 18,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#888888',
  },
  btnContainer: {
    flexDirection: 'row',
  },
  editBtn: {
    backgroundColor: '#19a4e4ff',
    padding: 5,
    marginRight: 10,
  },
  deleteBtn: {
    backgroundColor: '#ffcccc',
    padding: 5,
  },
});

export default TodoItem;
