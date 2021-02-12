import React from 'react'
import ToDo from './ToDo'

const ToDoList = ({ ToDos, setToDos, filteredToDos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredToDos.map((todo) => (
          <ToDo text={todo.text} key={todo.id} todo={todo} ToDos={ToDos} setToDos={setToDos} filteredToDos={filteredToDos} />
        ))}
      </ul>
    </div>
  )
}

export default ToDoList
