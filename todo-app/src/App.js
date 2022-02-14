import React from 'react'
import { useState } from 'react/cjs/react.development'
import "./App.css"

const App = () => {
   const[todo,setTodo]=useState("");
   const[todos,setTodos]= useState([]);

   const handleSumbit=(e)=>{
    e.preventDefault();
    
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
 const editTodo=todos.find((i)=>i.id!==id);
 setTodo(editTodo.todo);
 // why todo
 setEditId(id);
};
   
   


  return (
    <div className="App">
     <div className='Container'>
       <h1>Todo App</h1>
       <form className='todoForm'onSubmit={handleSumbit}>
         <input 
         type='text'
         value={todo}
          onChange={(e)=> setTodo(e.target.value)}/>
         <button type="submit">go</button>
       </form>
      <ul className='allTodos'>
        {todos.map((t)=>(
           <li className='singleTodo'>
           <span className='todoText' key={t.id}> 
           {t.todo}</span>  
           {/* why t.todo works and t.todos does not */}
           <button>edit</button>
           <button onClick={() => handleDelete(t.id)}>Delete</button>
           <button onClick={()=> handleEdit(t.id)}>Edit</button>
         </li>
        

        ))}
       
      </ul>
     </div>
    </div>
  )
}

export default App
