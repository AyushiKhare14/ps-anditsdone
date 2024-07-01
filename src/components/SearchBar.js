import React from 'react'
import { IoCloseCircleOutline } from "react-icons/io5";

function SearchBar({onSearch}) {

    function handleSearch(e){
        onSearch(e.target.value);
    }

   
  return (
    <div className='searchBarDiv'>

        <input  type='text' placeholder='Search task' className="form-control" onInput={handleSearch} />
    </div>
    
  )
}

export default SearchBar
