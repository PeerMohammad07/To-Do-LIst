import React from 'react'
import Todo from './Components/Todo'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer /> {/* Toast alert message */}
      <Todo/>
    </>
  )
}

export default App
