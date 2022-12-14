import logo from './logo.svg';
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
  const [currentPage , setCurrentPage] = useState(1);
  const [ postPage , setPostPage] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  const [allItem , setAllItem] = useState([]);
  
   const indexOfFirstPage = currentPage * postPage; 
   const indexOFLastPage =   indexOfFirstPage -postPage;  



const pegination = movieList.slice(
  (currentPage - 1) * postPage  , (currentPage-1) * postPage + postPage
  );
  console.log(pegination)
// useEffect(()=>{
  
//     // setmovieList([...pegination])
// }, [])

  // const options = {
  //   method: 'GET',
  //   url: 'https://imdb-top-100-movies.p.rapidapi.com/premiummovies',
  //   headers: {
  //     'X-RapidAPI-Key': 'f564200555msh13a2a6f11d4faf2p183371jsn34d384336953',
  //     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  //   }
  // };
  // const options = {
  //   mathod : 'Get',
  //   url : 'https://imdb-top-100-movies.p.rapidapi.com/',
  //   header : {
  //     'X-RapidAPI-Key': '4133b00787msh57ad8d80f00ca63p1dfc26jsn18ad4307e6fb',
  //     'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  //   }
  // };
 


const options = {
  method: 'GET',
  url: 'https://imdb-top-100-movies.p.rapidapi.com/',
  headers: {
    'X-RapidAPI-Key': '4133b00787msh57ad8d80f00ca63p1dfc26jsn18ad4307e6fb',
    'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
  }
};

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

  // call to api...
  useEffect(() => {
    axios.request(options).then(function (response) {
      setmovieList(response.data);
      setAllItem(response.data);
      setTotalPage(response.data.length)
    }).catch(function (error) {
      console.error(error);
    });
  }, []) 


  // conditional sort...
 
  function sortFunction(value){
   
 if( value === "Year"){
       
        let arr= pegination.sort((a,b)=> a.year >b.year?1:-1)
    
       setAllItem([...arr])
 }
 else if(value === "Rating"){
   
  let arr= pegination.sort((a,b)=> a.rating > b.rating ? 1 : -1)
   
    setAllItem([...arr])
 }
 else if(value === "Name"){
  
  let arr= pegination.sort((a,b)=> a.title > b.title ? 1 : -1)
  
   setAllItem([...arr])
 }
 else{
  setAllItem([...movieList])
 }
  }

  return (
    <div className="App">
   
    <Header/>
      <Operation setInputValue={setInputValue} sortFunction={sortFunction} />
     
      <div className='movie-container'>
        {
          allItem.filter((item) => {
            if (item.title == "") {
              return item;
            }
            else if (item.title.toLowerCase().includes(inputValue.toLowerCase())) {
              return item;
            }

          })
          .map((item) => {
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
