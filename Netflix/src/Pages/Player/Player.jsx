import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Link, useParams } from 'react-router-dom'
const Player = () => {
  const {id} =useParams();

  const [apiData, setApiData] = useState({
    name:'',
    key: '',
    published_at:'',
    typeof:'',
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNWYxOGU3NmZhY2Y3OWY1NWJiZGFlZDU1YThmNTBhMyIsIm5iZiI6MTczNzcwMjIxNi4yNDQsInN1YiI6IjY3OTMzYjQ4NTU5ZTJkOTc0YjQ4MmUwMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HOE_lZfsWnlU497bArflgtfiS2sMJk48wp536FJ9qRQ'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(data => setApiData(data.results[0]))
      .catch(err => console.error(err));
  }, [])

  return (
    <div className='player'>
      <Link to='/'><img src={back_arrow_icon} alt="" /></Link>
      <iframe width='90%' height='90%'
       src={`https://www.youtube.com/embed/${apiData.key}`}  title='trailer' frameBorder='0' allowFullScreen></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0,10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.key}</p>
      </div>
    </div>
  )
}

export default Player