import React from 'react'

const ToDo = ({ text, todo, ToDos, setToDos, filteredToDos }) => {
  const onCompleteHandler = () => {
    setToDos(
      filteredToDos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
    )
  }

  const onDeleteHandler = () => {
    setToDos(filteredToDos.filter((el) => el.id !== todo.id))
  }

  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{text}</li>
      <button onClick={onCompleteHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={onDeleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}

export default ToDo
