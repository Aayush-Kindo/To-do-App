import React from 'react'

const TodoForm = ({handleSumbit,todo,setTodo,editId}) => {
  return (
    <form className='todoForm'onSubmit={handleSumbit}>
    <input 
    type='text'
    value={todo}
     onChange={(e)=> setTodo(e.target.value)}/>
    <button type="submit">{ editId ? "Edit":"Go"}</button>
  </form>
  )
}

export default TodoForm