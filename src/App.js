import Heading from "./components/Heading";
import AddTodo from './components/AddTodo';
import List from "./components/List";
import { useState } from "react";
const App = () => {
  // let count=0;
  let [count,setCount] =useState([])
  const handleIncreament =(e) =>setCount(prev=>prev+1)
  const handleDecreament =(e) =>setCount(prev=>prev-1)
  // const message = "Hello World";
  // const val = 90
  // const todos = ["task1","task2","task3"];
  return ( 
    <div>
      {/* <h1>{count}</h1>
      <button onClick={handleIncreament}>+</button>
      &nbsp;
      &nbsp;
      <button onClick={handleDecreament}>-</button> */}

      {/* <h1>hi from react</h1>
      <h1>{message}</h1>
      <div>{val>10?"val is greater than 10":"val is less than 10"}</div>
      <Heading/>*/}
      {/* <List todos={todos}/>  */}
      <Heading/>
      <AddTodo setTodos={setTodos} />
      <List todos={todos} />
    </div>
   );
}
 
export default App;