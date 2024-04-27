import React,{useState} from "react"

function ColorPicker(){
  const [state,setState] = useState('#FFFFF')
  const colorChange = (event)=>{
    setState(event.target.value)
  }
  return (
    <>
    <div className="color-picker-component">
      <h1>Color Picker:{state}</h1>
      <div className="color-display" style={{backgroundColor:state}}>
      </div>
        <p>Selected Color: </p>
        <input type="color" value={state} onChange={colorChange} />
    </div>
    </>
  )
}

export default ColorPicker