import React from 'react';
import Tasklist from './Tasklist';
import { useState, useEffect } from 'react';

function Filters({getFilters}) {
  
    const [selectedFilters, setSelectedFilters] = useState([]);
    let [filterArray, setFilterArray] = useState([]);
    let [filterSubArray1, setFilterSubArray1] = useState([])
    let [filterSubArray2, setFilterSubArray2] = useState([])
    let [filterSubArray3, setFilterSubArray3] = useState([])
    let [filterToBe, setFilterToBe] = useState("")
    let [filter, setFilter] = useState("")

    let [filterSubString1, setFilterSubString1]=useState("");
    let [filterSubString2, setFilterSubString2]=useState(""); 
    let [filterSubString3, setFilterSubString3]=useState("");
    

    const filterObj = {
        1: "task.completed == false",
        2: "task.completed == true",
        3: "task.category.includes('Personal')",
        4: "task.category.includes('Household')",
        5: "task.category.includes('Financial')",
        6: "task.category.includes('Help')",
        7: "task.category.includes('Errand')",
        8: "task.category.includes('Work')",
        9: "task.priority == 'High'",
        10: "task.priority === 'Medium'",
        11: "task.priority === 'Low'",

    }
        
    function updateFilter(num){
        let filterString = filterObj[num];
        setSelectedFilters(prevFilters =>
          prevFilters.includes(num)
            ? prevFilters.filter(id => id !== num) // remove if already selected
            : [...prevFilters, num] // add if not selected
        );


      if([1,2].includes(num)){

          if(filterSubArray1.includes(filterString)){
            setFilterSubArray1(filterSubArray1= filterSubArray1.filter((ele)=>ele != filterString))
          }
          else{
            setFilterSubArray1(filterSubArray1 = [...filterSubArray1, filterString])
          }
          setFilterSubString1(filterSubString1 = filterSubArray1.join("||"));
      }


        if([3,4,5,6,7,8].includes(num)){

            if(filterSubArray2.includes(filterString)){
              setFilterSubArray2(filterSubArray2= filterSubArray2.filter((ele)=>ele != filterString))
            }
            else{
              setFilterSubArray2(filterSubArray2 = [...filterSubArray2, filterString])
            }
            setFilterSubString2(filterSubString2 = filterSubArray2.join("||"));
        }


        if([9,10,11].includes(num)){
          if(filterSubArray3.includes(filterString)){
            setFilterSubArray3(filterSubArray3= filterSubArray3.filter((ele)=>ele != filterString))
          }
          else{
            setFilterSubArray3(filterSubArray3 = [...filterSubArray3, filterString])
          }
            
          setFilterSubString3(filterSubString3 = filterSubArray3.join("||"));
          
        }

       
      console.log(filterSubString1, filterSubString2, filterSubString3)  
       
       setFilterToBe(filterToBe = (filterSubString1 ? `(${filterSubString1}) && ` : "" )
       + (filterSubString2 ? `(${filterSubString2}) && ` : "")
       + (filterSubString3 ? `(${filterSubString3})` : "")
      
      )
      console.log(filterToBe)

      if(filterToBe.endsWith('&& ')){
        setFilter(filter = filterToBe.trim().replace(/&&\s*$/, ''))
      }
      else{
        setFilter(filter = filterToBe)
      }

     // console.log(filter)
      getFilters(filter);
        
    }

    function clearFilters(){
      setFilterToBe(filterToBe="");
      setFilter(filter = "");
      setFilterSubArray1([]);
      setFilterSubArray2([]);
      setFilterSubArray3([]);
      setFilterSubString1("");
      setFilterSubString2("");
      setFilterSubString3("");
      setSelectedFilters([]);
      
        
        getFilters(filter);

    }

    function showToday(){
      
      clearFilters();
      setFilter(filter = "Math.abs(new Date().setHours(0, 0, 0, 0) - new Date(task.deadline).setHours(0, 0, 0, 0)) < 86400000")
      getFilters(filter);
    }
    function showTodayHigh(){
      clearFilters();
      setFilter(filter = "(Math.abs(new Date().setHours(0, 0, 0, 0) - new Date(task.deadline).setHours(0, 0, 0, 0)) < 86400000) && task.priority =='High'")
      getFilters(filter);
    }
    

  return (
    <>
    <div className='filtersdiv'>
   


    {/* Completion Status */}
      <div className='d-flex justify-content-around ' >
        {/* {console.log(filterApplied)} */}
        {/* <button className='btn btn-sm' style={{backgroundColor:"#FFE5E5", width: "50%"}} onClick={()=> updateFilter(1)}>Pending</button>
        <button className='btn btn-sm' style={{backgroundColor:"#f6eac2", width: "50%"}} onClick={()=> updateFilter(2)}>Completed</button> */}
        <button
        className={`btn btn-sm ${selectedFilters.includes(1) ? 'selected' : ''}`}
        style={{ backgroundColor: "#FFE5E5", width: "50%" }}
        onClick={() => updateFilter(1)}
      >
        Pending
      </button>
      <button
        className={`btn btn-sm ${selectedFilters.includes(2) ? 'selected' : ''}`}
        style={{ backgroundColor: "#f6eac2", width: "50%" }}
        onClick={() => updateFilter(2)}
      >
        Completed
      </button>
      </div>


      {/* Category */}
      <div className='d-flex justify-content-around ' >
        {/* <button className='btn btn-sm' style={{backgroundColor:"#c6dbda" , width: "16.66%"}} onClick={()=> updateFilter(3)}>Personal</button>
        <button className='btn btn-sm' style={{backgroundColor:"#f6eac2" , width: "16.66%"}} onClick={()=> updateFilter(4)}>Household</button>
        <button className='btn btn-sm' style={{backgroundColor:"#fed7c3" , width: "16.66%"}} onClick={()=> updateFilter(5)}>Financial</button>
        <button className='btn btn-sm' style={{backgroundColor:"#d4f0f0" , width: "16.66%"}} onClick={()=> updateFilter(6)}>HelpOther</button>
        <button className='btn btn-sm' style={{backgroundColor:"#ecd5e3" , width: "16.66%"}} onClick={()=> updateFilter(7)}>Errand</button>
        <button className='btn btn-sm' style={{backgroundColor:"#FFE5E5" , width: "16.66%"}} onClick={()=> updateFilter(8)}>Work</button> */}

      <button
        className={`btn btn-sm ${selectedFilters.includes(3) ? 'selected' : ''}`}
        style={{ backgroundColor: "#c6dbda", width: "16.66%" }}
        onClick={() => updateFilter(3)}
      >
        Personal
      </button>
      <button
        className={`btn btn-sm ${selectedFilters.includes(4) ? 'selected' : ''}`}
        style={{ backgroundColor: "#f6eac2", width: "16.66%" }}
        onClick={() => updateFilter(4)}
      >
        Household
      </button>
      <button
        className={`btn btn-sm ${selectedFilters.includes(5) ? 'selected' : ''}`}
        style={{ backgroundColor: "#fed7c3", width: "16.66%" }}
        onClick={() => updateFilter(5)}
      >
        Financial
      </button>
      <button
        className={`btn btn-sm ${selectedFilters.includes(6) ? 'selected' : ''}`}
        style={{ backgroundColor: "#d4f0f0", width: "16.66%" }}
        onClick={() => updateFilter(6)}
      >
        HelpOther
      </button>
      <button
        className={`btn btn-sm ${selectedFilters.includes(7) ? 'selected' : ''}`}
        style={{ backgroundColor: "#ecd5e3", width: "16.66%" }}
        onClick={() => updateFilter(7)}
      >
        Errand
      </button>
      <button
        className={`btn btn-sm ${selectedFilters.includes(8) ? 'selected' : ''}`}
        style={{ backgroundColor: "#FFE5E5", width: "16.66%" }}
        onClick={() => updateFilter(8)}
      >
        Work
      </button>
      </div>

        {/* Priority */}
      <div className='d-flex justify-content-around r' >
        {/* <button className='btn btn-sm' style={{backgroundColor:"#d5edf8" , width: "33.33%"}} onClick={()=> updateFilter(9)}>High</button>
        <button className='btn btn-sm' style={{backgroundColor:"#FFE5E5" , width: "33.33%"}} onClick={()=> updateFilter(10)}>Medium</button>
        <button className='btn btn-sm' style={{backgroundColor:"#d5e2d3" , width: "33.33%"}} onClick={()=> updateFilter(11)}>Medium</button> */}
        <button
        className={`btn btn-sm ${selectedFilters.includes(9) ? 'selected' : ''}`}
        style={{ backgroundColor: "#d5edf8", width: "33.33%" }}
        onClick={() => updateFilter(9)}
      >
        High
      </button>
      <button
        className={`btn btn-sm ${selectedFilters.includes(10) ? 'selected' : ''}`}
        style={{ backgroundColor: "#FFE5E5", width: "33.33%" }}
        onClick={() => updateFilter(10)}
      >
        Medium
      </button>
      <button
        className={`btn btn-sm ${selectedFilters.includes(11) ? 'selected' : ''}`}
        style={{ backgroundColor: "#d5e2d3", width: "33.33%" }}
        onClick={() => updateFilter(11)}
      >
        Low
      </button>
      </div>

      <div className='d-flex justify-content-around ' >
            <button className='filterOptionBtn fw-bolder' style={{ width: "50%"}} onClick={()=> showToday()}>Today's</button> 
            <button className='filterOptionBtn fw-bolder' style={{ width: "50%"}} onClick={()=> showTodayHigh()}>Today's High Priority</button>

        </div>

        <div className='d-flex justify-content-around ' >
            <button className='filterOptionBtn fw-bolder' style={{ width: "100%"}} onClick={clearFilters}>Clear Filters</button>

        </div>
      
    </div>
  
   </>
  )
}

export default Filters

