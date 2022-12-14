import React from 'react'

function MovieBox({eachMovie}) {
  const{image,rating,title,year} = eachMovie;
  return (
    
    <div className='movie_box'>
   
    <img  className='image' src={image} alt="image"/>
    
     <div className='circle'>
    <span className='circle_item'>{rating}</span>
    </div>
    
      <p>{title}</p>
    
    <div className='year'>
      <p>Release :</p>
      <p>{year}</p>
      </div>
     
      </div>
   
  )
}

export default MovieBox;
