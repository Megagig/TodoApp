import { StyleSheet, Text, View } from 'react-native';
import TodoInput from './src/components/TodoInput';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Todo App</Text>
      <TodoInput />
      {/* Additional components like TodoList can be added here */}
      {/* <TodoList /> */}
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
