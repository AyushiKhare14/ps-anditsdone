import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import SpecificTaskDetails from '../components/SpecificTaskDetails'
import { useLocation } from 'react-router-dom';

function TaskDetails() {
  let location = useLocation();
  let taskId = location.pathname.substring(13);
  return (
    <>
      <Header />
      <SpecificTaskDetails taskId = {taskId}/>
      <Footer />
    </>
  )
}

export default TaskDetails
