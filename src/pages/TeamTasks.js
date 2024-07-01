import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import SelectUser from '../components/SelectUser';
import Tasklist from '../components/Tasklist';
import { useState } from 'react';
import Filters from '../components/Filters';
import SearchBar from '../components/SearchBar';

function TeamTasks() {
  let [taskUser, setTaskUser] = useState("");
  let [filter, setFilter] = useState("");
  let [search, setSearch] = useState("");
  
  return (

    <>
      <Header />
      <Filters getFilters = {setFilter} />
      <SearchBar onSearch = {setSearch} />
      <div className='simply1'>
      <SelectUser getUser = {setTaskUser}/>
      </div>
      
      <Tasklist filterString = {filter} getSearchedItem= {search} tasksForUser ={taskUser}/>
      <Footer />
    </>
  )
}

export default TeamTasks
