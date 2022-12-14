import React from 'react'

function Operation({ setInputValue,sortFunction , accending}) {

  return (
    <div className='Operation'>
    <div className='search'>
      <input type="text"  onChange={(e)=>setInputValue(e.target.value)} placeholder="Search Movie ..."/>
      </div>

    <select onChange={(e)=>sortFunction(e.target.value)}>
      <option>Sort By</option>
      <option>All</option>
      <option>Year</option>
      <option>Rating</option>
      <option>Name</option>
    </select>
    
    </div>
  )
}

export default Operation;
