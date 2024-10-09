/**
 * My To Do List App
 *
 * @format
 */

import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

function App() 
{
  const [tasks, setTasks] = useState([
    { text: 'Do laundry', completed: true },
    { text: 'Go to gym', completed: false },
    { text: 'Walk dog', completed: true },
  ]);
  
  const addTask = (newTask) => {
    if (!newTask.trim()) {
      Alert.alert('Error', 'Please enter a task.');
      return;
    }
    const taskToAdd = { text: newTask, completed: false };
    setTasks([...tasks, taskToAdd]);
  };

    // const [tasks, setTasks] = useState([


    // ]);
    // const [newTask, setNewTask] = useState('');

    // const addTask = () => {
    //   if (!newTask.trim())
    //   {
    //     Alert.alert('Error', 'Please enter a task.');
    //     return;
    //   }
    //   const taskToAdd = {text: newTask, completed: false};
    //     setTasks([...tasks, taskToAdd]);
    //     setNewTask('');
    // };

  return (
    // <SafeAreaView>
    //   <ScrollView>
    //     <Pressable>
    //       <View style={[styles.task, styles.completed]}>
    //         <Text style={styles.taskText}>Do laundry</Text>
    //       </View>
    //     </Pressable>
    //     <Pressable>
    //       <View style={[styles.task]}>
    //         <Text style={styles.taskText}>Go to gym</Text>
    //       </View>
    //     </Pressable>
    //     <Pressable>
    //       <View style={[styles.task, styles.completed]}>
    //         <Text style={styles.taskText}>Walk dog</Text>
    //       </View>
    //     </Pressable>
    //     {tasks.map((task, index) => (
    //     <Pressable key={index}>
    //       <View style={[styles.task]}/>
    //       <Text style={styles.taskText}>{task.text}</Text>
    //     </Pressable>
    //     ))}
    //   </ScrollView>
    //   <View style={styles.form}>
    //     <TextInput
    //       style={styles.input}
    //       value={newTask}
    //       onChangeText={setNewTask}
    //       placeholder="Add a new task..."
    //     />
    //     <Button title="Add"
    //             onPress={addTask}/>
    //   </View>
    // </SafeAreaView>
    <SafeAreaView>
      <View>
        <ToDoList tasks={tasks}/>
        <ToDoForm addTask={addTask}/>
      </View>
    </SafeAreaView>
  );
}

export default App;
