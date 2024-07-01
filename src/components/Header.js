import React from 'react'
import Logout from './Logout';

function Header() {
    const d = new Date();
    let day = d.getDate();
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let monthinwords = month[d.getMonth()];
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let weekdayinwords = weekday[d.getDay()];

    let todayDate = `${monthinwords} ${day}, ${weekdayinwords}`;

  return (
    <>
      <div className='userhome-header d-flex justify-content-between'>
        <div className='d-flex flex-column mt-2 ms-2'>
            <div><h5>
                Hi {sessionStorage.getItem("name")}
            </h5></div>
            <div><p>
                Let's organise your day!
            </p></div>
        </div>
        <div className='d-flex flex-column mt-1 me-2'>
            <div className='d-flex justify-content-end me-2'>
                 < Logout />
            </div>
            <div>
                <p>{todayDate}</p>
            </div>
            
        </div>

      </div>
    </>
  )
}

export default Header
