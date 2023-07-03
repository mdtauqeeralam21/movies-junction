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
        <div className="flex flex-col justify-center items-center bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
            <h1 className="heading">Add a movie</h1>
            <div className="formDiv">
            <form onSubmit={handleSubmit}>
                <lable>Movie name:</lable>
                <input className="inputbox" 
                type="text" required value={name} onChange={(e)=>setMname(e.target.value)} />
                <br />
                <lable>Genre:</lable><br/>
                <input className="inputbox"
                 type="text" required value={genre} onChange={(e)=>setGenre(e.target.value)} />
                <br />
                <lable>Actor:</lable>
                <br/>
                <input className="inputbox"
                type="text" required value={actor} onChange={(e)=>setActor(e.target.value)} />
                <br />
                <lable>Released year:</lable>
                <br/>
                <input className="inputbox"
                type="text" required value={released} onChange={(e)=>setReleased(e.target.value)} />
                <br />
                <lable>Rating:</lable><br/>
                <input className="inputbox"
                type="text" required value={rating} onChange={(e)=>setRating(e.target.value)} />
                <br />
                <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline">Add</button>
            </form>
            </div>
        </div>
    )
}