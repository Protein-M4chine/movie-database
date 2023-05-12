import "./EditCardText.css"
import Button from './Button'
import { useState } from 'react'

const EditCardText = ({movie, setEdit, onEdit}) => {
  
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [rating, setRating] = useState('')
  const [runtime, setRuntime] = useState('')
  const [director, setDirector] = useState('')

  const editMovie = () =>{
    
    //create string to hold error messages
    const errors = []

    if(!title || !year || !rating || !runtime || !director){
      if(!title) {
          errors.push("title")
      }
      
      if(!year) {
          errors.push("year")
      }

      if(!rating) {
          errors.push("rating")
      }

      if(!runtime) {
          errors.push("runtime")
      }

      if(!director) {
          errors.push("director")
      }

      alert("The following fields are required: " + errors)
      return
    }
    
    const newMovie = {
      title: title,
      year: year,
      rating: rating,
      runtime: runtime,
      director: director
    };

    onEdit(movie.id, newMovie);

    setTitle("")
    setYear("")
    setRating("")
    setRuntime("")
    setDirector("")

    setEdit();
  }

  return(
    <div className='card'>
      <div className='header'>
        <input placeholder={movie.title} className='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input placeholder={movie.year} className='year' size='1' value={year} onChange={(e) => setYear(e.target.value)}/>
        <input placeholder={movie.rating} className='rating' size='1' value={rating} onChange={(e) => setRating(e.target.value)}/>
        <input placeholder={movie.runtime} className='runtime' size='1' value={runtime} onChange={(e) => setRuntime(e.target.value)}/>
        <input placeholder={movie.director} className='director' value={director} onChange={(e) => setDirector(e.target.value)}/>
      </div>
      <div className='footer'>
        <Button text='Save' color='#ffffb3' onClick={() => {editMovie()}}/>
        <Button text='Cancel' color='#ffcc99' onClick={setEdit}/>
      </div>
    </div>
  )
};

export default EditCardText;
