import './Output.css'
const Output = (props)=>{
    
    const deleteHandle = (id)=>{
        let newTodos = props.todos.filter((eachTodo) => {
            return eachTodo.un !== id;
          });
          props.onDelete(newTodos)
    }

    
    return(
        
    <ul >
        {props.todos.map(todo=> <>
        <li className='elements' key={Math.random().toString(36)} >
            <input type='checkbox' id='checkId' className='check'></input>
            <label htmlFor='checkId' className='checkClass' style={{display:"inline",marginLeft:"1%"}}>{todo.item}</label>
            <button className='modify delete' onClick={()=>deleteHandle(todo.un)}>{props.delete}</button>
        </li> 
        </>
        )}   
    </ul>
    
)}
export default Output