import React from 'react'

const Form = ({ inputText, setinputText, ToDos, setToDos, setStatus, filteredToDos }) => {
  const inputTextHandler = (e) => {
    setinputText(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    setToDos([...ToDos, { text: inputText, completed: false, id: Math.random() * 1000 }])
    setinputText('')
  }

  const StatusHandler = (e) => {
    setStatus(e.target.value)
  }
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
      <button onClick={onSubmitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={StatusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  )
}

export default Form
