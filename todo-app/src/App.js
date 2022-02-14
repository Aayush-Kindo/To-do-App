import React from 'react'
import { useState } from 'react/cjs/react.development'
import "./App.css"
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
   const[todo,setTodo]=useState("");
   const[todos,setTodos]= useState([]);
   const[editId,setEditId]=useState(0);

   const handleSumbit=(e)=>{
    e.preventDefault();

    if(editId){
      const editTodo=todos.find((i)=>i.id===editId);
      const updateTodos=todos.map((t)=>
       t.id===editTodo.id
       ?(t={id:t.id,todo})
       :{id:t.id,todo:t.todo}

      );
      setTodos(updateTodos);
      setEditId(0);
      setTodo("");
      return;



    }
    
    if(todo!==""){
      // setTodos([{ id:`${todo}-${Date.now(),todo}`}]);
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
      
    }

 };

 const handleDelete = (id) =>{
  const delTodo=todos.filter((to)=>to.id!==id);
  setTodos([...delTodo]);
};

const handleEdit=(id)=>{
 const editTodo=todos.find((i)=>i.id===id);
 setTodo(editTodo.todo);
 // why todo
 setEditId(id);
};
   
   


  return (
    <div className="App">
     <div className='Container'>
       <h1>Todo App</h1>
        <TodoForm
         handleSumbit={handleSumbit}
         todo={todo}
         setTodo={setTodo}
         editId={editId}
        />
        <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        />
     </div>
    </div>
  )
}

export default App
