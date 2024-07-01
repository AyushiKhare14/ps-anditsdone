import React from 'react'
import { useState, useEffect, useRef } from 'react';
import getAllUser from '../utils/getAllUsers';


function SelectUser({getUser}) {
    let [users, setUsers] = useState([])
    let loggedinUserid = sessionStorage.getItem("id");

    async function fetchUsers(){
        //console.log("inside fetch method....;lll")
  
        let fetchedUsers =  await getAllUser();
        setUsers(users = fetchedUsers);
        
    }

    useEffect(()=>{
        fetchUsers();
        
        getUser(loggedinUserid);
        //console.log(loggedinUserid)
    },[])

    // let loggedinUserid = sessionStorage.getItem("id");
    // let selectedUser = useRef(loggedinUserid);
    
    const handleChange = (e) => {
        getUser(e.target.value);
        //console.log(e.target.value)
      };

  return (
    <div className='d-flex justify-content-center mt-3 mb-2'>
        <select className=" userselect" onChange={handleChange}  >
                    <option value="" className="" >Select User...</option>
            {users.map( (user )=> 
            loggedinUserid == user.id 
            ?    <option key={user.id} value={user.id} className="" selected>{user.name}</option>
            :    <option key={user.id} value={user.id} className="">{user.name}</option>
        
            )}
        </select>
        
    </div>
  )
}

export default SelectUser
