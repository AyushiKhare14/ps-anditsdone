import React from 'react'
import getSpecificTask from '../utils/getSpecificTask';
import { useState, useEffect } from 'react';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate, useLocation } from 'react-router-dom';
import markCompletedBtnClicked from '../utils/toggleTaskStatus'
import getAllUser from '../utils/getAllUsers'
import deleteTask from '../utils/deleteTask';
import { GiConfirmed } from "react-icons/gi";
import { MdOutlineCancel } from "react-icons/md";
import getAllCategories from '../utils/getAllCategories';




function SpecificTaskDetails({ taskId }) {
  const [isLoading, setIsLoading] = useState(false);

  let loggedinUserid = sessionStorage.getItem("id");
  let [data, setData] = useState([]);
  let [taskupdated, setTaskUpdated] = useState([]);
  let [username, setUsername] = useState("");
  let [deleteConfirm, setDeleteConfirm] = useState(false);
  let [editMode, setEditMode] = useState(false);
  let navigate = useNavigate();



  async function fetchSpecificTask(taskId) {
    let tasksDetails = await getSpecificTask(taskId);
    setData(data = tasksDetails);
    fetchUsers();


  }


  //EDIT

  let [today, setToday] = useState(new Date())
  function disablePastDates() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    setToday(today = yyyy + '-' + mm + '-' + dd);

  }

  useEffect(() => {
    setEditedCat(data.category);
    setEditedDead(data.deadline);
    setEditedPri(data.priority);
    setEditedDesc(data.description);
    disablePastDates()
  }, [data])



  let [editedCat, setEditedCat] = useState("")
  let [editedDead, setEditedDead] = useState("")
  let [editedPri, setEditedPri] = useState("")
  let [editedDesc, setEditedDesc] = useState("")



  const handleCategoryChange = (e) => {
    setEditedCat(editedCat = e.target.value);
    //console.log(editedCat);
  }

  const handleDeadline = (e) => {
    setEditedDead(editedDead = e.target.value)
    //console.log(editedDead);
  }

  const handlePriority = (e) => {
    setEditedPri(editedPri = e.target.value)
    //console.log(editedPri)
  }

  const handleDescription = (e) => {
    setEditedDesc(editedDesc = e.target.value)
    //console.log( editedDesc)
  }

  const submitEditedForm = () => {

    if (editedCat == "" || editedDead == "" || editedPri == "" || editedDesc == "") {
      alert("No Changes are made to the task, please either update or cancel edit.")
      return
    }
    let bodyData = {
      category: editedCat,
      description: editedDesc,
      deadline: editedDead,
      priority: editedPri,
      completed: false,
    }

    markCompletedBtnClicked(data.id, bodyData);
    if (!alert('Task Updated!')) { navigate(-1); }
  }


  //END EDIT



  //Display single task details
  async function fetchUsers() {
    let users = await getAllUser();
    users.map((user) => {
      if (user.id == data.userid) { setUsername(user.name); }
    })
  }


  let [categories, setCategories] = useState([]);
  async function fetchCategories() {
    let fetchedCategories = await getAllCategories();
    setCategories(categories = fetchedCategories);

  }



  function updateCompletionStatus(id) {
    if (loggedinUserid == data.userid) {
      setDeleteConfirm(false);
      markCompletedBtnClicked(id);
      setTaskUpdated({ ...taskupdated, "say": "hello" })
    }
    else {
      alert("Action not permitted.")
    }
  }

  function processDeleteTask(todoid) {
    setDeleteConfirm(true);
  }

  function deleteConfirmed(todoid) {
    deleteTask(todoid);
    navigate(-1);
  }

  useEffect(() => {
    setIsLoading(true);
    fetchSpecificTask(taskId);
    fetchCategories();
    setIsLoading(false);

  }, [taskupdated])





  return (
    <>
      {isLoading ? <h5 className='text-center text-primary mt-5'>Loading...</h5> : null}
      {!editMode &&
        <div>
          <div className='d-flex justify-content-between m-2'>
            <div className='fw-bold fs-5'>Task Details</div>
            <div className='me-3'><IoArrowBackCircleOutline size={35} color='black' onClick={() => navigate(-1)} /></div>
          </div>


          <div className='descriptionDiv'>
            <div className='d-flex justify-content-between m-2 pt-2'>
              <div className='descHeading'>Task assigned to</div>    <div className='desc' > {username}</div>
            </div>

            <div className='d-flex justify-content-between m-2 pt-2'>
              <div className='descHeading'>Category</div>     <div className='desc'>{data.category}</div>
            </div>

            <div className='d-flex justify-content-between m-2 pt-2' >
              <div className='descHeading'>Deadline</div>     <div className='desc'>{data.deadline}</div>
            </div>

            <div className='d-flex justify-content-between m-2 pt-2'>
              <div className='descHeading'>Priority</div>     <div className='desc'>{data.priority}</div>
            </div>

            <div className='d-flex justify-content-between m-2 pt-2'>
              <div className='descHeading'>Status</div>     <div className='desc'>{data.completed ? "Completed" : "Pending"}</div>
            </div>

            <div className='d-flex justify-content-between m-2 pt-2'>
              <div className='descHeading'>Description</div>     <div className='desc ps-2 pt-2 text-end'>{data.description}</div>
            </div>

            {loggedinUserid == data.userid &&

              <div className='d-flex justify-content-around mt-3  updateDiv' >
                <button className='filterOptionBtn fw-bolder' style={{ width: "33.33%" }} onClick={() => updateCompletionStatus(data.id)}>{data.completed ? "Mark Pending" : "Mark Completed"}</button>
                <button className='filterOptionBtn fw-bolder' style={{ width: "33.33%" }} onClick={() => { setEditMode(true) }}>Edit</button>
                <button className='filterOptionBtn fw-bolder' style={{ width: "33.33%" }} onClick={() => processDeleteTask(data.id)}>Delete</button>

              </div>}

            {deleteConfirm &&
              <div>
                <div className='text-danger mt-3 text-center fw-bold '><small>Please reconfirm to delete this task.</small></div>
                <div className='d-flex justify-content-around pb-3 mt-2'>
                  <div><MdOutlineCancel size={30} onClick={() => setDeleteConfirm(false)} /></div>
                  <div><GiConfirmed size={27} onClick={() => deleteConfirmed(data.id)} /></div>
                </div>
              </div>
            }
          </div>
        </div>
      }
      {/* Edit */}

      {editMode &&

        <div>

          <div className='d-flex justify-content-between m-2'>
            <div className='fw-bolder fs-2'>Edit Task</div>
          </div>


          <div className='descriptionDiv'>
            <div className='d-flex justify-content-between m-2 pt-2'>
              <div className='descHeading'>Task assigned to</div>    <div className='desc' > {username}</div>
            </div>

            <div className='d-flex justify-content-between m-2 pt-2'>
              <div className='descHeading'>Category</div>
              <select className="desc w-50 " name="category" defaultValue={data.category} onChange={handleCategoryChange}>
                <option value="" className="" >Select category...</option>
                {categories.map((category) =>
                  <option key={category.id} value={category.name} className="">{category.name}</option>
                )}
              </select>

            </div>

            <div className='d-flex justify-content-between m-2 pt-2' >
              <div className='descHeading'>Deadline</div>     <input type="date" min={today} defaultValue={data.deadline} onChange={handleDeadline} name="deadline" className='desc w-50' />
            </div>

            <div className='d-flex justify-content-between m-2 pt-2'>
              <div className='descHeading'>Priority</div>
              <select className="desc w-50" name="priority" defaultValue={data.priority} onChange={handlePriority}>
                <option value="">Choose priority...</option>
                <option value="High" >High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div className='d-flex justify-content-between m-2 pt-2'>
              <div className='descHeading'>Status</div>     <div className='desc'>Pending</div>
            </div>

            <div className='d-flex justify-content-between m-2 pt-2'>
              <div className='descHeading'>Description</div>     <textarea className='desc w-50' name="description" defaultValue={data.description} rows={4} onChange={handleDescription}></textarea>
            </div>

            <div className='d-flex justify-content-around mt-3 mb-5 updateDiv' >
              <button className='filterOptionBtn fw-bolder' style={{ width: "50%" }} onClick={() => { setEditMode(false) }}>Cancel</button>

              <button type='submit' className='filterOptionBtn fw-bolder' style={{ width: "50%" }} onClick={submitEditedForm}>Submit Changes</button>

            </div>


            <div>
              <p className='editnote'>Note: The edited task will be automatically marked pending.</p>
            </div>


          </div>





        </div>

      }




    </>
  )
}

export default SpecificTaskDetails

