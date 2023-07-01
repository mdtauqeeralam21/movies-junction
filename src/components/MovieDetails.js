import useFetch from "./useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
 
function MovieDetails(){

    const { id } = useParams();
    const { data: movie, error, isPending } = useFetch('http://localhost:9999/movies/' + id);
    const navigate= useNavigate();

    const handleDelete = () => {
      fetch('http://localhost:9999/movies/' + id, {
        method: 'DELETE'
      }).then(() => {
        navigate("/");
      }) 
    }
  
    return (
      <div className="flex flex-col justify-center items-center">
        { isPending && <div>Loading...</div> }
        { error && <div>{ error }</div> }
        { movie && (
          <article>
            <h1 className="font-bold text-xl mb-2">{ movie.name }</h1>
            <div className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              { movie.genre }</div>
            <h3>by: { movie.actor }</h3>
            <p>Relesed year:{movie.released}</p>
            <h3>Rating: {movie.rating}</h3>
            <button className="bg-red-500 mt-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleDelete}>Delete</button>

            <Link to={`/update/${movie.id}`}> Update</Link>
            
          </article>
          
        )}

      </div>
    );
}

export default MovieDetails;
