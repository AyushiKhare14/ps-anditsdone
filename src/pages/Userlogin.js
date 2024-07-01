import React from 'react'
import { Link } from 'react-router-dom'
import Headerimage from '../components/Headerimage'
import { useState, useEffect } from 'react'
import getAllUser from '../utils/getAllUsers'
import { useNavigate } from "react-router-dom";



function Userlogin() {
    useEffect(()=>{
        sessionStorage.setItem("id", null);
        sessionStorage.setItem("name", null);
    },[])
    
    const [showPwd, setShowPwd] = useState(false);
    const [loginFailed, setLoginFaled] = useState(true)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function validateUser() {

        if (username == "" || password== ""){
            alert("Please provide username and password to login.")
            return
        }

        
        const allUser = await getAllUser();
        

        for (let i = 0; i < allUser.length; i++) {
        
            if (allUser[i].username === username && allUser[i].password === password){
                sessionStorage.setItem("id", allUser[i].id);
                sessionStorage.setItem("name", allUser[i].name);
                
               navigate("/userhomepage");
               return;


                
            }
            
            
        }
        alert("Username or password do not match. Please retry or register as new user!")
    }

    const showPassword = () => {
        showPwd ? setShowPwd(false) :setShowPwd(true)
    }


  return (
    <>
    <Headerimage />
    {/* <div className="d-flex justify-content-center align-self-center flex-column m-2"> */}
    <div className="d-flex justify-content-center row">

        <div className="col-10 mt-2">
            <sup>*</sup><label htmlFor="username" className="form-label">
                Username
            </label>
            
            <input type="text" required id="username" className="form-control" value={username} placeholder="Type your username" onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="col-10 mt-2">
            <sup>*</sup><label htmlFor="password" className="form-label">
                Password
            </label>
            
            <input required type={showPwd ? "text" :"password"} id="password" className="form-control" value={password} placeholder="Type your password" onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="d-flex mt-2 justify-content-around text-secondary loginoptions">
            <div><input type="checkbox" onClick={showPassword} /><small>Show Password</small></div>
            <div><small>Forgot Password?</small></div>
        </div>

        <div className="d-flex justify-content-center mt-4">
            <button className="reglogbtn btn btn-dark loginBtn" onClick={validateUser}>LOGIN</button>
        </div>

        <div className="mt-2 d-flex justify-content-center text-secondary">
            <small>Not registered?</small><Link to="/registration"><small>Create account!</small></Link>
        </div>

        

        <div className="d-flex justify-content-center col-12 mt-4">
            <Link to="/" className="link-secondary">CANCEL</Link>
        </div>

    </div>
    </>
        
  )
}

export default Userlogin
