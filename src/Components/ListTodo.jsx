import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash,faEdit,faPen } from "@fortawesome/free-solid-svg-icons"


function ListTodo({handleCheckboxChange,deleteToDo,value,index,EditTodo}) {

  function Edit(id){
    EditTodo(id)
  }

  return (
    <>
          <input type="checkbox" checked={value.isCompleted}  onChange={() => handleCheckboxChange(value.id)}/>
            <p>{value.do}</p>
                <FontAwesomeIcon icon={faTrash} className="delete-button" onClick={()=>deleteToDo(index)} />
                <button className='edit-button' onClick={()=>Edit(value.id)}>
                <FontAwesomeIcon icon={faPen} />
                </button>              
    </>
  )
}

export default ListTodo
