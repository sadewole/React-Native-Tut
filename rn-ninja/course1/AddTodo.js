import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View } from 'react-native';

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder='new todo...'
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        onPress={submitHandler.bind(this, text)}
        title='add todo'
        color='coral'
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default AddTodo;
