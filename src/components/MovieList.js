import { Link } from "react-router-dom"

export default function MovieList({movies}){

    return(
        <div className="moviesList" >
            {movies.map(movie=>
            <div className="movie" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
            <h2 className="movieName"> {movie.name}</h2>
            <p className="genre"> {movie.genre}</p>
            <h4 className="actor"> {movie.actor}</h4>
            </Link>
        </div>)}
        </div>
    )
}