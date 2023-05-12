import './Hero.css';
import Card from './Card';


const Hero = ({movies, onEdit, onDelete}) => {
    
    return (
        <section>
            <div className = "hero">
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} onEdit={onEdit} onDelete={onDelete} />
                ))}
            </div>
        </section>
    )
}

export default Hero
