import React from 'react';
import Headerimage from '../components/Headerimage';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import userRegistration from '../utils/registerNewUser';



function Registration() {
    let [UsernameAvailable, setUsernameAvailable] = useState(true);

    const navigate = useNavigate();

    const isUsernameAvailable=(e)=>{
        
        
        let usernameToCheck = e.target.value;

        if(usernameToCheck){
        fetch('http://localhost:8083/api/username_available/' + usernameToCheck)
        .then(response => response.json())
        .then(data => {
            
            if(!data.available){

                setUsernameAvailable(false)
            }
            else
            {
                setUsernameAvailable(true)
            }
            })
        }


    }

    const handleRegistration = (event) => {
        event.preventDefault()
        let form = event.target;
        let formData =  new FormData(form);
        let formDataObj = Object.fromEntries(formData.entries());
        //console.log(formDataObj);

        let validationStatus = performValidations(formDataObj);
        if(validationStatus){
            let bodyData = {
                name : formDataObj.name,
                username :  formDataObj.username,
                password : formDataObj.password
            }
            submitRegistration(bodyData)
        }

    }

    function performValidations(formDataObj){
        if(formDataObj.name== "" || formDataObj.username =="" || formDataObj.password == "" || formDataObj.repassword ==""){
            alert("Fields cannot be left empty!")
            return false;
        }

        if(formDataObj.username.includes(" ")){
            alert("No spaces in username!");
            return false;
        }

        let passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/; 
        if (!passwordregex.test(formDataObj.password)){
            alert("Your password should be between 8 to 15 characters which should contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.")
            return false;
        }


        if(formDataObj.password != formDataObj.repassword){
            alert("Please enter same password in both fields!")
            return false;
        }

        if(!UsernameAvailable){
            alert("Username is not available!")
            return false;
        }

        return true;
    }


    async function submitRegistration(bodyData){
       
         userRegistration(bodyData);
         navigate("/successful")

        //toast.success("Registration Successful !")
        
       
        //setData(data = tasksList);
        
        
    }

    




  return (
    <>
      <Headerimage />
      <form onSubmit={handleRegistration} method='POST'>
      <div className="d-flex justify-content-center row">
      
                <div className="col-10  ">
                    <label htmlFor="name" className="form-label">
                        <sup>*</sup>Name
                    </label>
                    <input type="text" name="name" required id="name" className="form-control" placeholder="Type your name" />
                    
                </div>
                

                <div className="col-10 ">
                    <label htmlFor="username" className="form-label">
                        <sup>*</sup>Username
                    </label>
                    <input type="text" name="username" required id="username" className="form-control" placeholder="Type your username" onBlur={(e)=>isUsernameAvailable(e)} />
                    {UsernameAvailable ? "": <small className='text-danger passInst'>Username not available.</small>}
                </div>

                {/* onkeyup="isUsernameAvailable()" */}
                

                <div className="col-10 ">
                    <label htmlFor="password" className="form-label">
                        <sup>*</sup>Password
                    </label>
                    <input type="password" name="password" id="password" className="form-control" placeholder="Type your password"  />
                    <p className='text-secondary passInst'>Password should be 8 to 15 char long with at least one lowercase, one uppercase letter, one digit, and one special character.</p>
                </div>

                <div className="col-10 ">
                    <label htmlFor="repassword" className="form-label">
                        <sup>*</sup>Re-enter Password
                    </label>
                    <input type="password" name="repassword" id="repassword" className="form-control" placeholder="Type your password again"  />
                    <span id="showmsg2" className="showErrorMsg"></span>
                
                </div>
                {/* oninput="doPasswordsMatch()"  */}

                <div className="d-flex justify-content-center col-10 mt-4 ">
                    <button className="reglogbtn btn btn-dark loginBtn"  type='submit'>REGISTER</button>
                </div>

                

                <div className="d-flex justify-content-center col-10 mt-2">
                    <Link to="/userlogin" className="link-secondary">CANCEL</Link>
                </div>

                
            </div>
            </form>
    </>
  )
}

export default Registration
