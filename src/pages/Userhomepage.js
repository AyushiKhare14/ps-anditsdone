import React, { useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Filters from '../components/Filters';
// import { filter } from '../components/Filters';
import Tasklist from '../components/Tasklist';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import AddNewTaskButton from '../components/AddNewTaskButton';




function Userhomepage() {
  let [filter, setFilter] = useState("");
  let [search, setSearch] = useState("");

  return (
    <div  >   
      <Header />
      <Filters getFilters = {setFilter} />
      <SearchBar onSearch = {setSearch} />
      {sessionStorage.getItem("id") && <AddNewTaskButton />}
      {/* {!sessionStorage.getItem("id")=="" && 
      <div className='text-center mt-5'>
        <h3>Please login to view data!</h3>
        <Link to="/userlogin"><button className='reglogbtn btn btn-large btn-primary mt-4'>Go back to login page!</button></Link>
        </div>} */}
      <Tasklist filterString = {filter} getSearchedItem= {search}/>
      
      <Footer />

    </div>
  )
}

export default Userhomepage;
