import { useSelector,useDispatch } from "react-redux";
import { removeTodo } from "../features/todo.js/todoSlice";

function SimpalTodo(){
  const todos=  useSelector(state=>state.todos)
  const dispatch=useDispatch()
    return(
        <div>
           todos
           {
            todos.map((todo)=>(
                <li key={todo.id}>
                    {todo.text}
                    <button onClick={()=>dispatch(removeTodo(todo.id))}>delete</button>
                </li>
            ))
           }
           
        </div>
    )
}
export default SimpalTodo