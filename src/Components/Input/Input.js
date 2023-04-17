import "./Input.css"
import { useState,useEffect } from "react"
const Input =(props)=>{
    const [todo,setTodo] = useState('')
    const [id,setId] =useState('')

    const createhandle =(e)=>{
        setTodo(e.target.value)
        setId(new Date().getTime().toString())
    }

    const todoHandle =(e)=>{
        e.preventDefault()
        
        props.onAdd(todo,id)
        //setTodo('')
       
    }
    return(
        
        <form onSubmit={todoHandle}>
        <input className = 'create_todo' type="text" placeholder="Create new.." onChange={createhandle}></input>
        <button className="button" type="submit">+</button>
        </form>
    )
}
export default Input