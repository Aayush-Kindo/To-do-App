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
      <ul>
        <li>learn React
          <button>edit</button>
          <button>delete</button>
        </li>

        <li>learn React
          <button>edit</button>
          <button>delete</button>
        </li>
      </ul>
     </div>
    </div>
  )
}

export default App
