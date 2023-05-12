import "./StandardCardText.css"
import Button from './Button'

const StandardCardText = ({movie, setEdit, onDelete}) => {
  return(
    <div className='card'>
      <div className='header'>
        <h1>{movie.title}</h1>
        <h2>{movie.year} | {movie.rating} | {movie.runtime} min</h2>
        <h3>{movie.director}</h3>
      </div>
      <div className='footer'>
        <Button text='Edit' color='#A2E9FF' onClick={() => {setEdit()}}/>
        <Button text='Delete' color='#F97D7D' onClick={() => onDelete(movie.id)}/>
      </div>
    </div>
  )
}

export default StandardCardText;
