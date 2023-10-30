
import TodoList from "./component/TodoList";
import InputTodo from "./component/inputTodo";


function App() {

  return (
    <>
      <div className="wrapper">
      <br></br>
      <h1 className="text-center">What's the plan for today?</h1>
        <InputTodo />
        <TodoList />
      </div>
      
    </>
  )
}

export default App
