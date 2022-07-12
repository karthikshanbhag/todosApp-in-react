import Heading from "./components/Heading";
import AddTodo from './components/AddTodo';
import List from "./components/List";
import { useState } from "react";
const App = () => {
  // let count=0;
  let [todos,setTodos] =useState([])
  // const handleIncreament =(e) =>setCount(prev=>prev+1)
  // const handleDecreament =(e) =>setCount(prev=>prev-1)
  // const message = "Hello World";
  // const val = 90
  // const todos = ["task1","task2","task3"];
  return ( 
    <div>
     <Heading/>
     <AddTodo setTodos={setTodos}/>
      <List setTodos={setTodos} todos={todos} />
    </div>
   );
}
 
export default App;