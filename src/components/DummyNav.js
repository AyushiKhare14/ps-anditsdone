import React from 'react'
import {Link} from "react-router-dom";

function DummyNav() {
  return (
    <div>

        <nav>
            <ul>
                <li><Link to="/">Welcome</Link></li>
                <li><Link to="userhomepage">UserHome</Link></li>
                <li><Link to="addnewtask">Add new task</Link></li>
                <li><Link to="performance">Performance</Link></li>
                <li><Link to="registration">Register New user</Link></li>
                <li><Link to="taskdetails/1">Task details</Link></li>
                <li><Link to="teamtasks">Team tasks</Link></li>
                <li><Link to="userlogin">Login</Link></li>
                <li><Link to="error">Error</Link></li>
            </ul>
        </nav>
            
    </div>
  )
}

export default DummyNav
