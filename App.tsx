import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import TodoInput from './src/components/TodoInput';
import { useState, useEffect } from 'react';
import { TodoList } from './src/components/TodoList';
import { Todo } from './src/components/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@TodoApp:todos';

function App(): React.JSX.Element {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load todos from AsyncStorage on app start
  useEffect(() => {
    loadTodos();
  }, []);

  // Save todos to AsyncStorage whenever todoList changes
  useEffect(() => {
    const saveTodos = async () => {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(todoList));
      } catch (error) {
        console.error('Error saving todos:', error);
      }
    };

    if (!isLoading) {
      saveTodos();
    }
  }, [todoList, isLoading]);

  const loadTodos = async () => {
    try {
      const storedTodos = await AsyncStorage.getItem(STORAGE_KEY);
      if (storedTodos) {
        setTodoList(JSON.parse(storedTodos));
      }
    } catch (error) {
      console.error('Error loading todos:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
    };
    setTodoList([newTodo, ...todoList]);
  };

  const deleteTodo = (id: string) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const toggleTodo = (id: string) => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const editTodo = (id: string, newText: string) => {
    setTodoList(
      todoList.map(todo =>
        todo.id === id ? { ...todo, text: newText.trim() } : todo,
      ),
    );
  };

  if (isLoading) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f8f9fa" />
      <View style={styles.content}>
        <Text style={styles.headerText}>My Todo List</Text>
        <Text style={styles.subHeaderText}>
          {todoList.length === 0
            ? 'No tasks yet. Add one below!'
            : `${todoList.filter(todo => !todo.completed).length} of ${
                todoList.length
              } tasks remaining`}
        </Text>
        <TodoInput onAddTodo={addTodo} />
        <TodoList
          todoList={todoList}
          onDeleteTodo={deleteTodo}
          onToggleTodo={toggleTodo}
          onEditTodo={editTodo}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
    color: '#6c757d',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#212529',
    textAlign: 'center',
    marginBottom: 8,
  },
  subHeaderText: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 24,
  },
});

export default App;
