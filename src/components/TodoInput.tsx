import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
interface TodoInputprops {
  onAddTodo: (text: string) => void;
}
const TodoInput: React.FC<TodoInputprops> = ({ onAddTodo }) => {
  const [text, setText] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      onAddTodo(text.trim());
      setText('');
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        style={styles.input}
        placeholder="Add a new task"
      />
      <TouchableOpacity onPress={handleAddTodo} style={styles.addTodoBtn}>
        <Text style={styles.addTodoText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  addTodoBtn: {
    backgroundColor: '#007aff',
    paddingHorizontal: 15,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTodoText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TodoInput;
