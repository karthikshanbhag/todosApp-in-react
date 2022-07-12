const Item = ({setTodos,todo,key}) => {
    const handleDelete =(todo)=>{
        setTodos(prevtodos=>prevtodos.filter(item=>item!==todo))
    }
    return ( 
        <li> key={key} >{todo} &nbsp; <button onClick={()=>handleDelete(todo)}>remove</button></li>
     );
}
 
export default Item;