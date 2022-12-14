import React from 'react'

function Button({totalPage, postPage,setCurrentPage}) {
   
const arr = [];
     for(let i = 1 ; i <= (totalPage / postPage) ; i++){
    arr.push(i)
     }
   
  return (
    <div>
    {
         arr.map((item , i)=>{
            return(
                <div className='button'>
                    <button className='btn' onClick={(e)=>setCurrentPage(e.target.innerHTML)}>{i+1}</button>
                </div>
            )
         })
    }
    </div>
  )
}

export default Button;
