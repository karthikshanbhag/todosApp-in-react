const  List= (props) => {
console.log(props)
    return ( 
        <ol>
            {
        //    props.todos.map((todo,index) => <li key={index}>{todo}</li>)
        todos.length===0?"No todos yet": todos.map((todo,i) => {
            return <li key={i}>{todo}</li>

            }
        </ol>
     );
}
 
export default List;