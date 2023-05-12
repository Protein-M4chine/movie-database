import './Card.css'
import StandardCardText from './StandardCardText'
import EditCardText from './EditCardText'
import {useState} from 'react';

const Card = ({movie, onEdit, onDelete}) => {
    const [setEdit, setOnEdit] = useState(false)
    
    /**
     * Toggles the Card on/off edit mode
     */
    const editMovie = () => {
        setOnEdit(!setEdit)
    }
    if (setEdit){
        return <EditCardText movie={movie} setEdit={editMovie} onEdit={onEdit}/>
    }
    return <StandardCardText movie={movie} setEdit={editMovie} onDelete={onDelete}/>
}

export default Card

