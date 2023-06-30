import useFetch from "./useFetch";
import MovieList from "./MovieList";
export default function Home(){

    const {data:movies,isPending,error}=useFetch("http://localhost:9999/movies");
    return(
        <div className="homePage">
            <h1 className="heading">Welcome to About-Movies</h1>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {movies && <MovieList movies={movies} />}

        </div>
    )
}