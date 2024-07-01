import React from 'react';
import { FaCirclePlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function AddNewTaskButton() {
    
  return (
    <div className='addNewTaskDiv d-flex justify-content-between me-1 mt-1'>
        <div className='simply' ></div>
        <Link to="/addnewtask" ><FaCirclePlus color='purple' size={35}/></Link>
    </div>
  )
}

export default AddNewTaskButton
