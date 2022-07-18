import Heading from "./components/Heading";
import AddTodo from './components/AddTodo';
import List from "./components/List";
import { useState ,useEffect} from "react";

const App = () => {
  // let count=0;
  // let [todos,setTodos] =useState([])
  const [Count,setCount] = useState(0)
  const [value,setValue] = useState('')

  useEffect(()=>{
    console.log('effect ran')
  })
  // const handleIncreament =(e) =>setCount(prev=>prev+1)
  // const handleDecreament =(e) =>setCount(prev=>prev-1)
  // const message = "Hello World";
  // const val = 90
  // const todos = ["task1","task2","task3"];
  return ( 
    <div>
      <button onClick={()=>setCount(count=>count+1)}>Increament</button>
      <input onChange={()=>setValue(prev=>prev+"a")} type="text" />
    </div>
   );
}
 
export default App;