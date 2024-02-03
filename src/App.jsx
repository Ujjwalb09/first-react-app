/* eslint-disable react/jsx-key */
import { useState } from 'react'

//if a parent component gets re-rendered, its child component gets
//re-rendered as well. In below case if app componet gets
//re-rendered
function App() {
  // const [todos, setTodos] = useState([{
  //   title: "Go to gym",
  //   description: "go and workout",
  //   completed: false
  // }, {
  //   title: "Study DSA",
  //   description: "study dsa",
  //   completed: true
  // },
  // {
  //   title: "Study webdev",
  //   description: "study from 9-12",
  //   completed: true
  // }])

  const [todos, setTodos] = useState([])

  async function addTodo(){
    const responseObj = await fetch("https://sum-server.100xdevs.com/todos");

    const obj = await responseObj.json();

    setTodos(obj.todos);
  }

  return (
    <div>
      {/* <Todo title = {todos[0].title} description = {todos[0].description}></Todo>
      <Todo title = {todos[1].title} description = {todos[1].description}></Todo> */}

      <button onClick={addTodo}>Generate random Todos</button>

      {/* better way to render an array is to iterate over it*/}
      {todos.map((todo)=>{
          return <Todo id={todo.id} title = {todo.title} description = {todo.description} completed={todo.completed}></Todo>
      })}
    </div>
  )
}

//so when we render an array to our FE we should create a custom
//component and give the array elements one by one to that custom
//component for render.

function Todo(props){
  return <div>
    <h1>id: {props.id}</h1>
    <h2>title: {props.title}</h2>
    <h3>description: {props.description}</h3>
  </div>
}

export default App
