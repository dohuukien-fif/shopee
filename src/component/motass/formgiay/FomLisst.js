
import { FaStar,FaPlus } from "react-icons/fa";
import {FaTimes} from 'react-icons/fa';
const Talks = ({todos,toggleTodo,removeTodo,img})=>{
    
    return(

        <div>
           <div className="text">
        <ul>
          {todos.map(todo => (
                   <>
                    <div className="xet">
                           <div className="xet-1">
                           <span className="xet-1-1">{todo.name[0]}</span>
                           </div>
                  
                       <div className="xet2-2">
                       <li key={todo.id}>
                         <FaStar className="icon_m" /> 
                         <FaStar className="icon_m" /> 
                         <FaStar className="icon_m" /> 
                         <FaStar className="icon_m" /> 
                         <FaStar className="icon_m" /> <br/>
                       
              <span
                className={todo.completed ? "todo-completed" : undefined}
                onClick={() => toggleTodo(todo.id)}
              >
            <strong>  {todo.name}</strong>
          
              </span>
              <span onClick={()=>removeTodo(todo.id)}>X</span>
            </li>
                       <li key={todo.id} className="bottom">
              <span
                className={todo.completed ? "todo-completed" : undefined}
                onClick={() => toggleTodo(todo.id)}
              >
           
               <span > {todo.text}</span>
              </span>
              <span onClick={()=>removeTodo(todo.id)}>X</span>
            </li>
                   <li>
                   {img?  <img src={todo.img} />:''}
                   </li>
                       </div>

                    </div>
            
            
                   </>
          ))}
        </ul>
      </div>
        </div>
        
    )
 
}

export default Talks;