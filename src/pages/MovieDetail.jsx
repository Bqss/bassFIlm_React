import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const MovieDetail = () => {
  const {title} = useParams();

  const  {data: film , isLoading, isErr} = useFetch([], async() => {
    const result = await axios.get("https://www.omdbapi.com/?apikey=63118199&t="+title);
    return result.data;
  });

  const {Poster, Title, Genre, Released, Plot} = film;

  if(isLoading) return <div className='loader'>Loading...</div>
 
  return (
    <div className='filmDetail'>
      <img className='filmDetail__poster' src={Poster} alt="" />
      <div className="filmDetail__description">
        <h1>{Title}</h1>
        <span className='filmDetail__sub'>{"Genre : "+Genre}</span>
        <span className='filmDetail__sub'>{"Released : "+Released}</span>
        <p className='filmDetail__plot'>{Plot}</p>
      </div>
    </div>
  )
}

export default MovieDetail