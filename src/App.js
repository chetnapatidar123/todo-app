import React from 'react'
import Header from './MyComponents/Header'
import Todos from './MyComponents/Todos'
import Footer from './MyComponents/Footer'
import { useState } from 'react'
import AddTodo from './MyComponents/AddTodo'

const App = () => {
  let initTodo;
  if (localStorage.getItem("todos") === null){
    initTodo = [];
  } else{
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }

  const onDelete = (todo) => {
console.log("i am on delete", todo)

setTodos(todos.filter((e) => {
return e!== todo
}));
localStorage.setItem("todos", JSON.stringify(todos))
}

const addTodo = (title,desc) => {
  console.log("i am adding  todo" , title,desc)

  let sno;
  if(todos.length == 0){
    sno = 0;
  }else{
   sno = todos[todos.length-1].sno + 1

  }
  const myTodo = {
    sno: sno,
    title: title,
    desc: desc
  }

  setTodos([...todos, myTodo]);
  console.log(myTodo)
  localStorage.setItem("todos", JSON.stringify(todos))
  
}

  const [todos, setTodos] = useState(initTodo)

  return (
    <div>

      <Header title="My Todo List" searchBar={false }/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos = {todos} onDelete = {onDelete}/>
      <Footer/>

    </div>
  )
}

export default App