import ToDo from "./Components/ToDo/ToDO";
import Input from "./Components/Input/Input";
import Output from "./Components/Output/Output";
import { useState } from "react";
import delet from "./images/icons8-delete-241.png"


const App = (props)=>{
  const [newTodo,setNewTodo] = useState([])
  const addTodo=(Todo,id)=>{
        setNewTodo((prevtodo)=>{return [...prevtodo,{item:Todo,un:id}]})
  }
  const deleteHandle =(newTod)=>{
    setNewTodo(newTod)
  }
  
  
  return(
    <>
    <ToDo/>
    <Input onAdd = {addTodo}/>
    <Output todos={newTodo} 
    delete={<img src={delet} alt="imge" />}
     onDelete={deleteHandle} />
    </>
  )
}

export default App;
