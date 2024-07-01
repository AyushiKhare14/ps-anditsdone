import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SelectUser from '../components/SelectUser'
import AddNewTaskForm from '../components/AddNewTaskForm'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'



function AddNewTask() {
  return (
    <>
    
    <Header />

    <div className='d-flex justify-content-between ms-2 mt-2 mb-1'>
      <div><h3>Assign a new task!</h3></div>
      <div className='me-3'><Link to="/userhomepage"><IoArrowBackCircleOutline size={35} color='black'/></Link></div>
    </div>
      
    <div className='text-secondary m-3'>
      <small >You can assign task to any other registered user, by selecting them in the select user dropdown.</small>
    </div>
    
    <AddNewTaskForm />
   
      
    <Footer />  
    </>
  )
}

export default AddNewTask
