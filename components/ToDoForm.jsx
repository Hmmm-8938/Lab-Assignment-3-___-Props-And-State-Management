import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

function ToDoForm({addTask}) 
{
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () =>
    {
        addTask(newTask);
        setNewTask('');
    }
    

  return (
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          value={newTask}
          onChangeText={setNewTask}
          placeholder="Add a new task..."
        />
        <Button title="Add"
                onPress={handleAddTask}/>
      </View>
  );
}

const styles = StyleSheet.create({

  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
});

export default ToDoForm;