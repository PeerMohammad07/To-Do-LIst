import React,{useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 


function EditTodo({value,AddEdit}) {

  const [editDo,setEditDo] = useState(value.do)

  const updateEdit = ()=>{
    if(editDo.trim()==''){
      toast.error("Enter your task");
      return;
    }

    AddEdit(value.id,editDo)
    setEditDo('')
  }

  const inputChange = (e)=>{
    setEditDo(e.target.value)
  }

  return (
    <>
    <div className='To-do-Edit'>
      <input type="text" value={editDo} onChange={inputChange} />
      <button className="update-button" onClick={updateEdit}>
        <FontAwesomeIcon icon={faCheck} />
      </button>
    </div>
    </>
  )
}


export default EditTodo
