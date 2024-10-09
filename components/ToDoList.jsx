import {
  StyleSheet,
  Pressable,
  View,
  Text,
  ScrollView,
} from 'react-native';



function ToDoList({tasks}) 
{
  return (
      <ScrollView>
        {/* <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Do laundry</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task]}>
            <Text style={styles.taskText}>Go to gym</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={[styles.task, styles.completed]}>
            <Text style={styles.taskText}>Walk dog</Text>
          </View>
        </Pressable> */} 
        {/* I am commenting out the above as those were the hardcoded values.
            I think this lab is similar enough that I should be able to reuse
            this logic and add the 3 items to the main list */}
        {tasks.map((task, index) => (
        <Pressable key={index}>
          <View style={[styles.task]}/>
          <Text style={styles.taskText}>{task.text}</Text>
        </Pressable>
        ))}
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  task: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  completed: {
    backgroundColor: '#e0e0e0',
  },
  taskText: {
    fontSize: 16,
  },
});

export default ToDoList;


