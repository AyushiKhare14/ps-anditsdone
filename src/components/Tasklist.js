import React, { useState } from 'react';
import { useEffect } from 'react';
import getAllTasksByUser from '../utils/getAllTasksByUser';
import { TiTick } from "react-icons/ti";
import { FcHighPriority } from "react-icons/fc";
import { FcMediumPriority } from "react-icons/fc";
import { FcLowPriority } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';
import markCompletedBtnClicked from '../utils/toggleTaskStatus'
import { SiTicktick } from "react-icons/si";






function Tasklist(props) {
  const [isLoading, setIsLoading] = useState(false);
  let loggedinUserid = sessionStorage.getItem("id");
    let navigate = useNavigate();
    let [data, setData] = useState([]);
    let [taskupdated, setTaskUpdated] = useState([]);
    //let [filterApplied, setfilterApplied] = useState(false);

    async function getTasks(userid){
       
        let tasksList =  await getAllTasksByUser(userid);
        setIsLoading(false);
        setData(data = tasksList);
        
        
    }

    
    useEffect(() => { 
      setIsLoading(true);
      if(props.tasksForUser ){
        getTasks(props.tasksForUser);
      }
      else {
       
       
        let userid = sessionStorage.getItem("id")
        getTasks(userid);
       }
    },[ props,taskupdated]);

    let searchedData = data.filter(task => {
        let taskDesc = task.description.toUpperCase();
        let toSearch = props.getSearchedItem.toUpperCase();
        if(taskDesc.includes(toSearch)){
            return true;
        }
    })

    function updateCompletionStatus(id, userid){
      if(loggedinUserid == userid ){
        
        markCompletedBtnClicked(id);
        setTaskUpdated({...taskupdated, "say" : "hello"})
      }
      else{
        alert("Action not permitted.")
      }

    }
   


    let filterApplied = false;
    props.filterString != '' ? filterApplied =true : filterApplied = false;

    
    let filteredData = data.filter(task => {
            if(eval(props.filterString)){
                return true}
        })
    
     
    
    
    const renderTask = (task) => (
        <div className='d-flex justify-content-between taskdiv mt-3 ' key={task.id}>
            
 
          <div>{
          task.priority == 'High' ? <FcHighPriority size={20}/> : task.priority == 'Medium' ?  <FcMediumPriority size={20}/> :  <FcLowPriority size={20} />
          }</div>
          
          
          <div className={task.completed ? 'strikethrough' : "text-dark "} onClick={()=>{navigate("/taskdetails/"+task.id)}}>{task.description.slice(0,30)+"..."}</div>
          
          
          <div onClick={()=>updateCompletionStatus(task.id, task.userid)}>
            {
            task.completed ? (
              <SiTicktick color='green' size={20} />
            ) : (
              <SiTicktick color='grey' size={20} />
            )}
          </div>

        </div>
      );

  

  
  
    return (
    

       
    <>
      {isLoading ? <h5 className='text-center text-primary mt-5'>Loading...</h5> : null}
      {
        props.getSearchedItem ? searchedData.map(task => renderTask(task)) :
        filterApplied
        ? filteredData.toReversed().map(task => renderTask(task))
        : data.toReversed().map(task => renderTask(task))}


            
       
      </>
  )
}

export default Tasklist
