const Item = ({todo,key,setTodos}) => {
    const handleDelete =(todo)=>{
        setTodos(prevTodos=>prevTodos.filter(item=>item!==todo))
    }
    return ( 
        <li key={key} >{todo} &nbsp; <button onClick={()=>handleDelete(todo)}>remove</button></li>
     );
}
<h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis facere, omnis minus quisquam mollitia, nisi placeat inventore in quam, rerum obcaecati tenetur eligendi minima id voluptatem culpa deleniti modi nulla!</h1>
export default Item;