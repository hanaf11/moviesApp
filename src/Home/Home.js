import "./Home.css";
import MovieCard from "../MovieCard/MovieCard";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
    const [movies,setMovies]=useState([]);
    var film=null;
    const url="https://image.tmdb.org/t/p/w500";
    const [page,setPage]=useState(null);
   const [filter,setFilter]=useState(null);

    useEffect(()=>{
        if(filter==null){
            axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=179ffdb14b3d28c09ee69f31efea6adb&language=en-US&page=${page}`)
            .then(response=>{
                console.log(response.data.results);
               setMovies(response.data.results);
               
            })
            .catch(error=>{
                console.log("error fetching data" + error);
            })
        }
        else{
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=179ffdb14b3d28c09ee69f31efea6adb&language=en-US&query=${filter}&page=${page}&include_adult=false`)
            .then(response=>{
                console.log(response.data.results);
               setMovies(response.data.results);
               
            })
            .catch(error=>{
                console.log("error fetching data" + error);
            })
        }
      
    },[page,filter])
  return (
    <div className="Home">
    <h1>My Movie App</h1>
    <div className="content">
    <input type="text" id="filter"></input>
    <button onClick={()=>setFilter(document.getElementById("filter").value)}>Search</button>
        {Object.keys(movies).map(key=>{
            film=movies[key];
            console.log(film.title);
            return(
            <MovieCard id={film.id} pic={url+film.backdrop_path} title={film.title} overview={film.overview} rating={film.vote_average}/>
            );
           
        })}

        <label>Choose page</label>  
        <input type="number" id="inputPage"></input>
        <button onClick={()=>setPage(document.getElementById("inputPage").value)}>Choose page</button>
            
        

    </div>
    </div>
  );
}

export default Home;