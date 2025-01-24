import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import card_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';
const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWYxOGU3NmZhY2Y3OWY1NWJiZGFlZDU1YThmNTBhMyIsIm5iZiI6MTczNzcwMjIxNi4yNDQsInN1YiI6IjY3OTMzYjQ4NTU5ZTJkOTc0YjQ4MmUwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOE_lZfsWnlU497bArflgtfiS2sMJk48wp536FJ9qRQ'
    }
  };
  
  

  const handleWheel = (e) =>{
    e.preventDefault();
    cardRef.current.scrollLeft += e.deltaY;
  }

  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(data => setApiData(data.results))
    .catch(err => console.error(err));
    cardRef.current.addEventListener('wheel',handleWheel)
  },[])

  return (
    <div className='titlecard'>
        <h2>{title? title: "Popular on Netflix" }</h2>
        <div className="card-list" ref={cardRef}>
          {
            apiData.map((item,i)=>{
              return <Link to={`/player/${item.id}`} className="card" key={i}>
                <img src={`https://image.tmdb.org/t/p/w500`+item.backdrop_path} alt="" />
                <p>{item.original_title}</p>
              </Link>
            })
          }
        </div>
    </div>
  )
}

export default TitleCards