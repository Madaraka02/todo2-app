import React,{useState} from 'react';
import db from './firebase';
import './Todo.css'
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles } from '@material-ui/core/styles';
import {List, ListItem, Modal,  ListItemText, Button} from '@material-ui/core';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  


const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {
    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();


    
    const updateTodo = () =>{
        db.collection("todos").doc(props.todo.id).set({
            todo: input

        }, {merge: true});
         setOpen(false);
    }

 
    return (
        <>
        <Modal
         open={open}
         onClose={e => setOpen(false)}>
             <div  style={modalStyle}  className={classes.paper}>
                 <h1>Update Todo Text</h1>
                 <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                 <Button variant="contained" onClick={updateTodo}>Update Todo</Button>
             </div>
         </Modal>
            <List className="todo">
                <ListItem className="todo__text">
                    <ListItemText primary={props.todo.todo} secondary=""/>
                </ListItem>
                
                <Button  variant="contained" color="secondary" className="todo__buttone" onClick={e => setOpen(true)}>Edit Me</Button>
                <DeleteIcon className="todo__button" onClick={event => db.collection("todos").doc(props.todo.id).delete()}/>
                
            </List>
            </>
    )
}

export default Todo
