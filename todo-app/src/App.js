import React from 'react'
import "./App.css"

const App = () => {
 

  return (
    <div className="App">
     <div className='Container'>
       <h1>Todo App</h1>
       <form className='todoForm'>
         <input type='text'/>
         <button>go</button>
       </form>
      <ul className='allTodos'>
        <li className='singleTodo'>
          <span className='todoText'>Learn React</span>
          <button>edit</button>
          <button>delete</button>
        </li>
      </ul>
     </div>
    </div>
  )
}

export default App
