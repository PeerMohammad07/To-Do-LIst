import React, { useState ,useRef,useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';   


function AddTask(props) {
  const [value,setValue] = useState("")
  const {addToDo} = props

  const addButton = ()=>{
    if(value.trim()===''){
      toast.error("Enter your task");
      return;
    }

    addToDo(value)
    setValue("")
  }

  const inputChange = (e)=>{
    setValue(e.target.value)
  }

  const ref = useRef(null)

  useEffect(()=>{
    ref.current.focus()
  })

  return (
    <>
    <div className="to-do-wrapper">
  <h1 className="heading">To-Do List 📝</h1>
  <div className="input-container">
    <input type="text" ref={ref} value={value} placeholder="🖊️ Add item..." onChange={inputChange} />
    <FontAwesomeIcon icon={faPlus}  onClick={addButton} className="fa-plus" />
  </div>
</div>
    
    </>
  )
}

export default AddTask
