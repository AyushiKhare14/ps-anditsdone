import React from 'react'
import { useNavigate } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";


function Logout() {

  let navigate = useNavigate();

  const logout = () => {
    sessionStorage.clear();
    navigate('/');

  }


  return (
    <>
      <button className='btn text-light' onClick={() => logout()}> <IoMdLogOut size={25}/> </button>
    </>
  )
}

export default Logout
