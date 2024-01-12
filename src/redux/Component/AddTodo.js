import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo.js/todoSlice";

function AddTodo(){
    const [input,setinput]=useState('');
    const dispatch=useDispatch();

    function handleAdd(e){
        e.preventDefault()
     dispatch(addTodo(input))
     setinput('')
    }

    function handleRemove(){

    }
    return(
        <div>
            <form onSubmit={handleAdd}>
                <input type="text" value={input} onChange={(e)=>setinput(e.target.value)}/>
                <button type="submit">add</button>
            </form>
        </div>
    )
}
export default AddTodo