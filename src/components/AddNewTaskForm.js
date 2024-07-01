import React from 'react'
import getAllCategories from '../utils/getAllCategories'
import { useState, useEffect } from 'react';
import SelectUser from './SelectUser';
import submitNewTask from '../utils/submitNewTask'
import { useNavigate } from 'react-router-dom';


function AddNewTaskForm() {
    let [taskUser, setTaskUser] = useState("");
    let [taskCategory, setTaskCategory] = useState("");
    let [taskDesc, setTaskDesc] = useState("");
    let [taskDeadline, setTaskDeadline] = useState("");
    let [taskPriority, setTaskPriority] = useState("");
    let [categories, setCategories] = useState([]);

    let navigate = useNavigate();

    
    
    // Fetching categories
    async function fetchCategories(){
        let fetchedCategories =  await getAllCategories();
        setCategories(categories = fetchedCategories);   
    }

    const handleCategoryChange= (e) => {
        setTaskCategory(taskCategory = e.target.value);
    }

    const handleDesc = (e) => {
        setTaskDesc(taskDesc = e.target.value)
    }

    const handleDeadline = (e) => {
        setTaskDeadline(taskDeadline = e.target.value)
    }

    const handlePriority = (e)=>{
        setTaskPriority(taskPriority = e.target.value)
    }


    const handleTaskSubmit = () =>
        {
            console.log(taskCategory)
            if(taskUser==""){
                alert("Please select a user to assign task!");
                return;
            }
            if(taskCategory==""){
                alert("Please select a category to assign task!");
                return;
            }
            if(taskDesc==""){
                alert("Please provide task description in few words!");
                return;
            }
            if(taskDeadline==""){
                alert("A deadline must be associated with a task!");
                return;
            }
            if(taskPriority==""){
                alert("Please assign a priority to the task!");
                return;
            }
            let taskData = {
                userid: taskUser,
                category: taskCategory,
                description: taskDesc,
                deadline: taskDeadline,
                priority: taskPriority,
            }

            
            submitNewTaskForm(taskData);
            
        }

    async function submitNewTaskForm(taskData){
        submitNewTask(taskData);
        if(!alert('Task Added!')){navigate(-1);} 
    } 
    

    let [today, setToday] = useState(new Date())
    function disablePastDates() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        setToday(today = yyyy + '-' + mm + '-' + dd);
    }


    useEffect(()=>{
        fetchCategories();
        disablePastDates();
    },[])

  
  
    return (
    <div className='d-flex flex-column col-md-5'>

        {/* Select User */}
        <SelectUser getUser = {setTaskUser}/>


        {/* Select Category */}
        <div className='d-flex justify-content-center mt-2 mb-2'>
            <select className=" userselect" onChange={handleCategoryChange} required>
                        <option value="" className="" >Select category...</option>
                {categories.map( (category )=> 
                    
                    <option key={category.id} value={category.name} className="">{category.name}</option>
            
                )}
            </select>
        </div>

        {/* Provide Task Description */}
        <div className='d-flex justify-content-center mt-2 mb-2'>
                <textarea required className=" userselect userselecttestarea" value={taskDesc} onChange={handleDesc} placeholder='Provide task details...'></textarea>
        </div>

        {/* Pick deadline */}
        <div className='d-flex justify-content-center mt-2 mb-2'>   
        <input required id="deadline"  type="date" min={today} className="userselect" onChange={handleDeadline} />

        </div>

        {/* Set Priority */}
        <div className='d-flex justify-content-center mt-2 mb-2'>
            <select required className="userselect" onChange={handlePriority}>
                <option value="">Choose priority...</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
            </select>
        </div>

        <div className="d-flex justify-content-center mt-2">
            <button  className="assignTaskBtn" onClick={handleTaskSubmit}>Assign Task</button>
        </div>
        
      
    </div>
  )
}

export default AddNewTaskForm
