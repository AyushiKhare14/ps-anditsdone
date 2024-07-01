import React from 'react'
import Headerimage from '../components/Headerimage'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function SuccessComp() {
  let [timer, setTimer] = useState(3)
    const navigate = useNavigate()
    useEffect(()=>{

        setTimeout(() => {

            navigate("/userlogin")
          }, 3000);
        
    },[])

    useEffect(()=>{

      setTimeout(() => {

        setTimer(timer -1)
      }, 1000);

    },[timer])
  return (
    <div>
        <Headerimage />
        <div className='outerdiv'>
          <div className='innerfiv'>
        <h1 className=' text-center'>Registration Successful!</h1>
        <h4 className=' text-center'>Redirecting to login page in</h4>
        <h2 className=' text-center'>{timer}</h2>
        </div>
        </div>
    </div>
  )
}

export default SuccessComp
