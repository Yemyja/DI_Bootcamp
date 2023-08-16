
import { useState, useEffect } from 'react'
import React from 'react'
import "./App.css"
import MovieCard from './MovieCard';


function App() {

  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=4ef3f36bc9a885c3d3a2664a78f8520a";
  const API_SEARCH = "https://api.themoviedb.org/3/search/movie?api_key=4ef3f36bc9a885c3d3a2664a78f8520a&query=";
  
  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }, [])

  console.log(movies);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(API_SEARCH + term)
      .then(res => res.json())
      .then(data => setMovies(data.results))
  }

  const handleGoBack = () => {
    window.location.reload();
  
  };

  return (
    <div className='App'>
      <div className='title1'>
            <h1>Peliculas del momento</h1>
          </div>
      <div className='search_nav'>
          
<br></br>
          <div className='search_box'>
            <form onSubmit={handleSearch}>
              <input onChange={(e) => setTerm(e.target.value)}/>
              <button>Search</button>
            </form>
          </div>
          <div className= 'go-back'>
          <button onClick={handleGoBack}>Go back</button>
          </div>
      </div>

      <div className='movies'>
        {movies.map((movie) => (
          <MovieCard {...movie} /> 
        ))}
      </div>
    </div>
  )
}

export default App