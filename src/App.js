import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import './App.css'
import ToDoList from './components/ToDoList'
import ToDo from './components/ToDo'

const App = () => {
  const [inputText, setinputText] = useState('')
  const [ToDos, setToDos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredToDos, setfilteredToDos] = useState([])

  useEffect(() => {
    filterHandler()
  }, [ToDos, status])

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setfilteredToDos(ToDos.filter((todo) => todo.completed === true))
        break
      case 'uncompleted':
        setfilteredToDos(ToDos.filter((todo) => todo.completed === false))
        break
      default:
        setfilteredToDos(ToDos)
        break
    }
  }

  return (
    <div>
      <header>
        <h1>Cosmos's To Do List</h1>
      </header>
      <Form inputText={inputText} setinputText={setinputText} ToDos={ToDos} setToDos={setToDos} setStatus={setStatus} />
      <ToDoList ToDos={ToDos} setToDos={setToDos} filteredToDos={filteredToDos} />
    </div>
  )
}

export default App
