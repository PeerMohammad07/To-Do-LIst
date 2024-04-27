  import React, { useEffect, useRef, useState} from 'react'
  import AddTask from './AddTask'
  import { v4 as uuidv4 } from 'uuid';
  import Swal from 'sweetalert2';
  import 'sweetalert2/src/sweetalert2.scss';
  import 'react-toastify/dist/ReactToastify.css';   
  import { toast } from 'react-toastify';
  import ListTodo from './ListTodo';
  import EditTodo from './EditTodo'
  uuidv4()

  function Todo() {

    const getLocalItems = ()=>{
      let list = localStorage.getItem('lists')
      if(list){
        return JSON.parse(localStorage.getItem('lists'))
      }else{
        return []
      }
    }


    const [ToDo,SetToDo] = useState(getLocalItems())
    const [Completed,SetComplted] = useState(false)

    useEffect(()=>{
      localStorage.setItem('lists',JSON.stringify(ToDo))
    },[ToDo])


    const addToDo = (toDo)=>{
      const newTodo = {id:uuidv4(),do:toDo,isCompleted:false,isEditing:false}
      SetToDo([newTodo,...ToDo])
    }

    const deleteToDo = (index)=>{
      Swal.fire({
        title: 'Are you sure?',
        text: 'Are you sure you want to delete this task?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.isConfirmed) {
          const updatedToDo = ToDo.filter((_, i) => i !== index);
          SetToDo(updatedToDo);
        }
      });
    }

    const upToDo = (index)=>{
      const array = [...ToDo]
      if(index>0){
        [array[index],array[index-1]]=[array[index-1],array[index]]
        SetToDo(array)
      }
    }

    const downToDo = (index) =>{
      const array = [...ToDo]
      if(index<ToDo.length-1){
        [array[index],array[index+1]]=[array[index+1],array[index]]
        SetToDo(array)
      }
    }

    const handleCheckboxChange = (id)=>{
      const updatedToDo = ToDo.map((value)=>{
        if(value.id == id){
          value.isCompleted = value.isCompleted ? false : true
        }
        return value
      })
      SetToDo(updatedToDo)
    }

    const reff = useRef(null)

    const changeCompleted = () =>{
      if(Completed){
        SetComplted(false)
        reff.current.textContent = 'Show Completed Tasks' 
      }else{
        SetComplted(true)
        reff.current.textContent = 'Show InCompleted Tasks' 
      }
      
    }

    const EditDo = (id)=>{
      const updatedToDo = ToDo.map((value)=>{
        if(value.id == id){
          return {
            ...value,
            isEditing:true
          }
        }
        return value
      })
      SetToDo(updatedToDo);
    }
    
    const AddEditDo = (id,task)=>{
       const AddEdit =  ToDo.map((val)=>{
        if(val.id == id){
          val.do = task
          val.isEditing = false
        }
        return val
      })
      SetToDo(AddEdit)
      toast.success('Task updated')
    }

  const filteredToDo = Completed ? ToDo.filter( val => val.isCompleted) : ToDo.filter(val => !val.isCompleted)
    return (
      <>
    <div className='Wrap'>
    <AddTask addToDo={addToDo}/>
    <h1><a onClick={changeCompleted} ref={reff}> Show Completed Tasks</a></h1>
    <div className="list-container">{
      filteredToDo.map((value, index) => (  
        value.isEditing ? ( <EditTodo value={value} AddEdit = {AddEditDo}/> ):
       ( <div key={value.id} className='list-item'>
          <ListTodo
            value={value}
            handleCheckboxChange={handleCheckboxChange}
            deleteToDo={deleteToDo}
            downToDo={downToDo}
            upToDo={upToDo}
            index={index}
            EditTodo={EditDo}
          />
        </div>)
      ))}
    </div>
  </div>


      </>
    )
  }

  export default Todo
