import './App.css';
import Hero from './Hero';
import Navbar from './Navbar';
import {useState} from 'react';
import Footer from './Footer.js';
import CreateForm from './CreateForm';
import SortMovies from './SortMovies';
import produce from 'immer';
import baseStateSeed from './config/baseStateSeed';

function App() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showSortMenu, setShowSortMenu] = useState(false)
  const [sortDescending, setSortDescending] = useState(false)
  const [selectedSortButton, setSelectedSortButton] = useState("")

  //Sets Movie State at the App component level
  const [movies, setMovies] = useState (baseStateSeed)

  //Crud Operations

  //Add Movie
  const addMovie = (movie) => {

    let id = 1;

    if (movies.length > 0)
    {
      id = (movies[movies.length -1].id) + 1;
    }

    const newMovie = {id, ...movie}

    setMovies([...movies, newMovie])
  }

  //Edit Movie

  const editMovie = (id, inMovie) => {
    let index;
    
    movies.forEach((movie) => {
      if (movie.id == id)
        index = movies.indexOf(movie)
    })

    const movieArray = produce(movies, draft => {
      draft = draft.splice(index, 1, inMovie);

    })

    if (index != null)
      setMovies([...movieArray])
  }

  //Delete Movie
  const deleteMovie = (id) =>{
        //filter out selected movie from In-Memory array
       setMovies(movies.filter((movie) => movie.id !== id))
  }

  //Sort Movies
  const sortMovies = (sortType) => {

    let moviesCopy = [...movies]

    setMovies(moviesCopy.sort((a, b) => {

        switch(sortType)
        {
          case "Title":
            if(a.title > b.title)
              return 1
            else if(b.title > a.title)
              return -1
            else 
              return 0

          case "Year":
            if(a.year > b.year)
              return 1
            else if(b.year > a.year)
              return -1
            else 
              return 0

          case "Rating":
            if(a.rating > b.rating)
              return 1
            else if(b.rating > a.rating)
              return -1
            else 
              return 0

          case "Runtime":
            if(a.runtime > b.runtime)
              return 1
            else if(b.runtime > a.runtime)
              return -1
            else 
              return 0

          case "Director":
            if(a.director > b.director)
              return 1
            else if(b.director > a.director)
              return -1
            else 
              return 0

          default:
              return 0
        }
    }))
  }

  const changeAscendingDescending = () => {
    let moviesCopy = [...movies]

    setSortDescending(!sortDescending)

    setMovies(moviesCopy.reverse())
  }

  const updateSelectedSortButton = (input) =>{
    switch(input)
    {
      case "Title":
        setSelectedSortButton("Title");
        break;

      case "Year":
        setSelectedSortButton("Year");
        break;
 
      case "Rating":
        setSelectedSortButton("Rating")
        break;

      case "Runtime":
        setSelectedSortButton("Runtime")
        break;

      case "Director":
        setSelectedSortButton("Director")
        break;

      default:
        setSelectedSortButton("")
    }
  }

  return (
    <div className="container">
      <Navbar onAddMovie={() => setShowCreateForm(!showCreateForm)} showCreate ={showCreateForm} onSort={() => setShowSortMenu(!showSortMenu)} showSortMenu = {showSortMenu}/>
      {showCreateForm && <CreateForm onAdd={addMovie}/>}
      {showSortMenu && <SortMovies onSort={sortMovies} changeAscendingDescending={changeAscendingDescending} sortDescending={sortDescending} updateSelectedSortButton={updateSelectedSortButton} selectedSortButton={selectedSortButton}/>}
      <Hero movies = {movies} onEdit={editMovie} onDelete={deleteMovie}/>
      <Footer />
    </div>
  );
}

export default App;
