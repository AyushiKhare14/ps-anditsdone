import React from 'react';
import { Link } from 'react-router-dom';
import welcome_image from '../images/welcome_image.png';

function Welcome() {
  return (
    <div className='m-2 mt-5 text-center d-flex flex-column justify-content-between' >
        <div >
            <img src={welcome_image} alt="welcome_image" className='img-fluid'/>
        </div>

        <div className='mt-4'>
            <h2>And It's Done!</h2>
            <h6>A Task Manager and To Do List</h6>
            <p className='text-secondary mt-3'>Plan ahead and organise your day. <br />
            Collaborate with your team and more.</p>
        </div>
        
        <div >
            <Link to="userlogin"><button className='reglogbtn btn btn-large btn-primary mt-4'>Let's get started!</button></Link>
        </div>
      
    </div>
  )
}

export default Welcome
