import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import AddTodo from './AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create native app', key: '2' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key !== key));
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => [
        { text, key: Math.random().toString() },
        ...prevTodos,
      ]);
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chararacters long', [
        { text: 'OK', onPress: () => console.log('alert closed') },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});
