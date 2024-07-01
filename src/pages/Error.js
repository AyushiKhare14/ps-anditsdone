import React from 'react'
import Headerimage from '../components/Headerimage'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
  
  let [timer, setTimer] = useState(5)
    const navigate = useNavigate()
    useEffect(()=>{

        setTimeout(() => {

            navigate("/userlogin")
          }, 5000);
        
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
        <h1 className=' text-center text-danger'>404! Page not found!</h1>
        <h6 className=' text-center'>Appologies, the page you are looking for is not available. Redirecting to login page in</h6>
        <h2 className=' text-center'>{timer}</h2>
        </div>
        </div>
    </div>
  )
}



export default Error
