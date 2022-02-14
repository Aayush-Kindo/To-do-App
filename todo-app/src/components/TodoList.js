import React from 'react'

const TodoList = ({todos,handleEdit,handleDelete}) => {
  return (
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
  )
}

export default TodoList