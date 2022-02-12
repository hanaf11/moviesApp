import "./MoviePage.css"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import React from "react";


function MoviePage() {
  let param=useParams();
  let imagePath;

    let m;
    const [movie,setMovie]=useState(null);
  
 
    useEffect(()=>{
      
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=179ffdb14b3d28c09ee69f31efea6adb&language=en-US`)
        .then(response=>{
            console.log(response.data);
           setMovie(response.data);
           console.log(movie);
        
           
           m=response.data;
          //console.log(movie);
          console.log(m);
          
        })
        .catch(error=>{
            console.log("error fetching data" + error);
           
        })

       /* return()=>{
          axios.CancelToken.source().cancel();
        }*/
       
     
    },[])
    
    if(movie!=null){
      imagePath="https://image.tmdb.org/t/p/w500"+movie.backdrop_path;
      return(<div className="pokusaj">
       
        <img src={imagePath}/>
       <h1>{movie.original_title}</h1>
      <p>Budget: {movie.budget}</p>
       <button><a href={movie.homepage}>Movie home page</a></button>
       <p>{movie.overview}</p>
       <p>Original language: {movie.original_language}</p>
       <p>Release date: {movie.release_date}</p>
       <p>Runtime {movie.runtime} min</p>
      
      </div>)
    }else{
      return(<div>
        <h1>Nothing</h1>
      </div>);
    }

  }
  

  export default MoviePage;