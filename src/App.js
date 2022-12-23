import './App.css';
import React, { useEffect, useState } from 'react';
// const axios = require("axios");
import axios from 'axios'
import MovieBox from './MovieBox';
import Operation from './operation';
import Button from './Button';
import Header from './Header';

function App() {
  const [movieList, setmovieList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sortValue, setSortValue] = useState('All');
  const [currentPage , setCurrentPage] = useState(1);
  const [ postPage] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
 
  const [pegination,setPegination] = useState([]);
  const [abc, setAbc] = useState([]); 
  
 
useEffect(()=>{
  let arr2 = [];
console.log(abc)
console.log(currentPage)
  arr2 =abc.slice(
        (currentPage - 1) * postPage  , (currentPage-1) * postPage + postPage
        )
console.log(arr2,"2")
  setPegination([...arr2])

},[currentPage,abc])



const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '4133b00787msh57ad8d80f00ca63p1dfc26jsn18ad4307e6fb',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

  // call to api...


useEffect(()=>{
  let arr  = [];
if(inputValue !==""){
   arr =movieList && movieList.filter(e=>e.title.toLowerCase().includes(inputValue.toLowerCase())) 
  }
   else{
    arr=[...movieList]
  }
console.log(arr,"arr")
if(sortValue==="All"){
  arr=[...arr]
}
else if(sortValue==="Year"){
  arr = arr.sort((a,b)=>a.year >b.year?1:-1)
}
else if(sortValue==="Name"){
  arr = arr.sort((a,b)=>a.title> b.title ?1:-1)
}
else if( sortValue=== "Rating"){
  arr= arr.sort((a,b)=>a.rating>b.rating ?1:-1)
}
setAbc([...arr])
setCurrentPage(1);
// setAbc([...pegination])
setTotalPage(arr.length)
},[inputValue, sortValue])



  useEffect(() => {
    axios.request(options).then(function (response) {
      setmovieList(response.data);
      setAbc(response.data);
    
     //setPegination(response.data)
      setTotalPage(response.data.length)
    }).catch(function (error) {
      console.error(error);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 


  // conditional sort...
 ////added a comment to check Git
  function sortFunction(value){
 setSortValue(value)
  }
console.log(totalPage)
  return (
    <div className="App">
   
    <Header/>
      <Operation setInputValue={setInputValue} sortFunction={sortFunction} />
     
      <div className='movie-container'>
        {
          // eslint-disable-next-line array-callback-return
          pegination.map((item) => {
            return (
              <MovieBox eachMovie={item} />
            )
          })
        }
        <Button totalPage={totalPage} postPage={postPage} setCurrentPage={setCurrentPage}/>
      
      </div>

    </div>
  );
}
export default App;
