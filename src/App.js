import React, { useState, useEffect} from 'react';
import './App.css';
import Todo from './Todo';
import firebase from "firebase";
import db from './firebase';
import { Button, FormControl, InputLabel,Input } from '@material-ui/core';

function App() {
  const [todos , setTodos] = useState([]);
  const [input ,setInput] = useState("");

  useEffect(() => {
    db.collection("todos").orderBy("timestamp", "desc").onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo})))
    })
 
  }, []);

  const addTodo = (event) => {
    event.preventDefault(); 
    db.collection("todos").add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput("");

  }

  return (
    <div className="app">
        <form className="app__form">
      <FormControl>
  <InputLabel>Write Todo</InputLabel>
  <Input value={input} onChange={event => setInput(event.target.value)}/>
</FormControl>
<div className="todo__buttonAdd" >
<Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>
</div>
        </form>
        <div className="app__todo" >
        <ul>
          {todos.map(todo => (
            <Todo todo={todo}/>
          ))}
        </ul>
        </div>
    </div>
  );
}

export default App;
