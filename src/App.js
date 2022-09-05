import './App.css';
import { useState, useEffect } from 'react'
import MovieCard from './components/MovieCard';
import SearchBar from './components/SearchBar';




function App() {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  
  const API_KEY =process.env.REACT_APP_API_KEY
  const searchMovies = async (title) => {
    const APP_URL= `http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}`
    const response = await fetch(`${APP_URL}&s=${title}`)
    const data = await response.json();
    // console.log(data.Search)
    setMovies(data.Search);
    setSearchTerm("");
  
  }
  useEffect(()=>{
    searchMovies();
    
  },[])

  return (
    <div className="app">
      <h1>Movie Earth</h1>
      <SearchBar  searchTerm={searchTerm} setSearchTerm={setSearchTerm} setMovies={searchMovies}/>
      {
        movies?.length > 0 ? 
        (
          <div className="container">
           {movies.map((movie,index) =>(
            <MovieCard key={index} movie={movie}  />
           ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No Movies Found</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
