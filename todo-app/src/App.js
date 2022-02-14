import React from 'react'
import { useState } from 'react/cjs/react.development'
import "./App.css"

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
       <form className='todoForm'onSubmit={handleSumbit}>
         <input 
         type='text'
         value={todo}
          onChange={(e)=> setTodo(e.target.value)}/>
         <button type="submit">{ editId ? "Edit":"Go"}</button>
       </form>
      <ul className='allTodos'>
        {todos.map((t)=>(
           <li className='singleTodo'>
           <span className='todoText' key={t.id}> 
           {t.todo}</span>  
           {/* why t.todo works and t.todos does not */}
           
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
