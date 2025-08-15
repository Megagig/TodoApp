import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const TodoInput: React.FC = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Add a new task" />
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
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default TodoInput;
