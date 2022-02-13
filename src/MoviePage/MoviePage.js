import "./MoviePage.css"
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import React from "react";
import { FlagOutlined } from "@material-ui/icons";
import { TimerOutlined } from "@material-ui/icons";
import { MoneySharp } from "@material-ui/icons";
import { CalendarTodayOutlined } from "@material-ui/icons";

function MoviePage() {
  let param=useParams();
  let imagePath;
  const [movie,setMovie]=useState(null);
  
 
    useEffect(()=>{
      
        axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=179ffdb14b3d28c09ee69f31efea6adb&language=en-US`)
        .then(response=>{
           
           setMovie(response.data); 
        })
        .catch(error=>{
            console.log("error fetching data" + error);
           
        })

     
    },[])
    
    if(movie!=null){
      imagePath="https://image.tmdb.org/t/p/w500"+movie.backdrop_path;
      return(<div className="moviepage">
       <div className="banner-container">
        <img className="banner" src={imagePath}/>
       <h1>{movie.original_title}</h1>
       </div>

       <div className="details-box">
       <p className="desc">{movie.overview}</p>
       <div className="details-container" >
         
        
            <p className="detail"><FlagOutlined/> Original language:   {movie.original_language}</p>
            <p className="detail"><MoneySharp/> Budget:  {movie.budget}$</p>
            <p className="detail"><CalendarTodayOutlined/> Release date: {movie.release_date}</p>
            <p className="detail"><TimerOutlined/> Runtime {movie.runtime}min</p>

       
        </div>
        <br/><br/>
       <button className="btn-more"><a href={movie.homepage}>More about the movie</a></button>
     </div>
      
      </div>)
    }else{
      return(<div>
        <h1>Nothing</h1>
      </div>);
    }

  }
  

  export default MoviePage;