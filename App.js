import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList, Alert, TouchableWithoutFeedback, Keyboard, } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import SandBox from "./components/SandBox";

export default function App(){

  const [todos, setTodos] = useState([
    {text: 'create an app', key: '1'},
    {text: 'shopping', key: '2'},
    {text: 'meeting', key: '3'},
  ]); 

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos((prevTodos) => {
        return[
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ]
      })
    } 
    else {
      Alert.alert('ooops!', 'Todo must be 4 characters long', [
        {text: 'Ok', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return(
    //<SandBox />
     <TouchableWithoutFeedback onPress= {() => {
       Keyboard.dismiss();
       console.log('keyboard removed')
     }}>
     <View style={styles.container}>
       {/*header*/}
       <Header />
       <View style={styles.content}>
         {/* to do */}
         <AddTodo submitHandler={submitHandler}/>
         <View style={styles.list}>
           <FlatList 
             data={todos}
             renderItem={({item}) => (
               <TodoItem item={item} pressHandler={pressHandler}/>
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
    flex: 1,
    marginTop: 20,
  }

})