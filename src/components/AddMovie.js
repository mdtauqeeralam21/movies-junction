import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMovie(){
    const[name,setMname]=useState('');
    const[genre,setGenre]=useState('');
    const[actor,setActor]=useState('');
    const[released,setReleased]=useState('');
    const[rating,setRating]=useState('');
    const navigate=useNavigate();

    const movie={name,genre,actor,released,rating};

    const handleSubmit=()=>{
        fetch('http://localhost:9999/movies',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(movie)
        }).then(res=>{
            res.json();
        }).then(
                navigate("/")
        )
    }


    return(
        <div className="flex flex-col justify-center items-center">
            <h1>Add a movie</h1>
            <form onSubmit={handleSubmit}>
                <lable>Movie name:</lable>
                <input type="text" required value={name} onChange={(e)=>setMname(e.target.value)} />
                <br />
                <lable>Genre:</lable>
                <input type="text" required value={genre} onChange={(e)=>setGenre(e.target.value)} />
                <br />
                <lable>Actor:</lable>
                <input type="text" required value={actor} onChange={(e)=>setActor(e.target.value)} />
                <br />
                <lable>Released year:</lable>
                <input type="text" required value={released} onChange={(e)=>setReleased(e.target.value)} />
                <br />
                <lable>Rating:</lable>
                <input type="text" required value={rating} onChange={(e)=>setRating(e.target.value)} />
                <br />
                <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add</button>
            </form>
        </div>
    )
}