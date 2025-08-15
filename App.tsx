import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoInput from './src/components/TodoInput';
import { useState } from 'react';
import { TodoList } from './src/components/TodoList';
import { Todo } from './src/components/types';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    console.log(text);
    setTodoList([
      ...todoList,
      {
        id: Date.now().toString(),
        text,
        completed: false,
      },
    ]);
  };

  console.log(todoList);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo App</Text>
      <TodoInput onAddTodo={addTodo} />
      <TodoList todoList={todoList} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    alignSelf: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
