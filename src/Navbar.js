import './Navbar.css';
import Button from './Button';

const Navbar = ({onAddMovie, showCreate, onSort, showSortMenu}) => {
    return (
        <nav className="navbar">
            <h1 href="#" id="movie" onClick={() => {window.location.reload()}}>Movie <span>DB</span></h1>
            <div className="button-group">
                <Button color={!showCreate ? '#73F3AF' : '#ffd699'} text={!showCreate ? 'Add Movie' : 'Close Form'} onClick={onAddMovie} />
                <Button color={!showSortMenu ? '#E5E5E5' : '#ffff66'} text={!showSortMenu ? 'Sort' : 'Close Sort'} onClick={onSort}/>
            </div>
            <hr />
        </nav>
    )
}

// let style = {
//     h1{
//         font-family: Poppins;
//         font-weight: 500;
//         font-size: 1.75em;
//     }
    
//     span{
//         color: #2AAED8;
//     }
    
//     hr{
//         color: #878787;
//         opacity: 25%;
//     }
// }

export default Navbar
