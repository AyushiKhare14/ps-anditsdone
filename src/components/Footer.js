import React from 'react'
import { FaUser , FaUsers} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//let userhome = false;



function Footer() {
    const navigate = useNavigate();
    let location = useLocation();


const handleMyPage =()=>{
    navigate('/userhomepage');
    
}

const handleGroupPage = () => {
    navigate('/teamtasks');
}
  return (
    <>
        <div className="btn-group userpagefooter" role="group" aria-label="Basic checkbox toggle button group">
            <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" onChange={handleMyPage} />
            <label className="btn userpagefooterBtn" htmlFor="btncheck1">{location.pathname.includes("userhomepage") ? <FaUser color='white' size={18}/> : <FaUser color='black' size={18}/> }</label>

            <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" onChange={handleGroupPage} />
            <label className="btn userpagefooterBtn" htmlFor="btncheck2">{location.pathname.includes("teamtasks") ? <FaUsers color='white' size={25}/> : <FaUsers color='black' size={25}/> }</label>
        </div>
    </>
  )
}

export default Footer
