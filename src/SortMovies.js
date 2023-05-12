import "./SortMovies.css";
import Button from './Button'

const SortMovies = ({onSort, sortDescending, changeAscendingDescending, updateSelectedSortButton, selectedSortButton}) => {

    const sortButtonOnClick = (sortByType) => {
        onSort(sortByType)
        updateSelectedSortButton(sortByType)
    }

    return (
        <div className="sort-movies">
            <h1 className="sort-header">Sort By:</h1>
            <div className="buttonGroup">
                <div><Button color={selectedSortButton != "Title" ? "#e6e6e6" : "#b3b3b3"} text="Title" onClick={() => sortButtonOnClick("Title")}/></div>
                <div><Button color={selectedSortButton != "Year" ? "#e6e6e6" : "#b3b3b3"} text="Year" onClick={() => sortButtonOnClick("Year")}/></div>
                <div><Button color={selectedSortButton != "Rating" ? "#e6e6e6" : "#b3b3b3"} text="Rating" onClick={() => sortButtonOnClick("Rating")}/></div>
                <div><Button color={selectedSortButton != "Runtime" ? "#e6e6e6" : "#b3b3b3"} text="Runtime" onClick={() => sortButtonOnClick("Runtime")}/></div>
                <div><Button color={selectedSortButton != "Director" ? "#e6e6e6" : "#b3b3b3"} text="Director" onClick={() => sortButtonOnClick("Director")}/></div>
            </div>
            <div className="gridDescendButtonGroup">
                <div className="gridDescendButton"><Button className="gridDescendButton" color={!sortDescending ? "#ffccff" : "#ccffff"} text={!sortDescending ? "Descending" : "Ascending"} onClick={changeAscendingDescending}/></div>
            </div>
            <hr />
        </div>
    )
}

export default SortMovies
