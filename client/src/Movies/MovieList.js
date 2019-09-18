import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';


const MovieList = props => {
  const [movie, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    
    getMovies();
  }, []);
  
  return (
    <div className="movie-list">
      {/* {movies.map(movie => (
        // <MovieDetails key={movie.id} movie={movie} />
      ))} */}
     <Link to={`/movies/${movie.id}`}>Click to see Movie</Link>
     </div>
  );
}

export default MovieList;
