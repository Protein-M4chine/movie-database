import "./CreateForm.css";
import {useState} from 'react';

const CreateForm = ({onAdd}) => {


    //define form level state
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [rating, setRating] = useState('')
    const [runtime, setRuntime] = useState('')
    const [director, setDirector] = useState('')

    //function determines actions to be taken upon form submission
    const onSubmit = (e) => {
        //prevents form from submitting to a page
        e.preventDefault()

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

        //pass the following values as a movie object back up to the App state level
        onAdd({title, year, rating, runtime, director})

        //reset the form after submission
        setTitle("")
        setYear("")
        setRating("")
        setRuntime("")
        setDirector("")
    }

    return (
        <form className="add-movie" onSubmit={onSubmit}>
            <h1 className="create-header">Create New Movie</h1>
            <div className="form-control">
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type="number" placeholder = "Year" value={year} onChange={(e) => setYear(e.target.value)}/>
                <input type="text" placeholder = "Rating" value={rating} onChange={(e) => setRating(e.target.value)}/>
                <input type="number" placeholder = "Runtime" value={runtime} onChange={(e) => setRuntime(e.target.value)}/>
                <input type="text" placeholder = "Director" value={director} onChange={(e) => setDirector(e.target.value)}/>
            </div>
            <input type="submit" className="submit"/>
            <hr />
        </form>
    )
}

export default CreateForm
