import Item from "./Item";
const  List= ({todos,setTodos}) => {
    return ( 
        <ol>
            {
        //    props.todos.map((todo,index) => <li key={index}>{todo}</li>)
        todos.le0?"No todos yet": todos.map((todo,i) => <Item setTodos={setTodos} todo={todo} key={i}/>
        //  {
        //     return <li key={i}>{todo}</li>

        //     }
            )
        }
        </ol>
     );
}
 
export default List;