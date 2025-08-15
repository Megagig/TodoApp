import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Todo } from './types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todoList }) => {
  return (
    <ScrollView style={styles.container}>
      {todoList.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
