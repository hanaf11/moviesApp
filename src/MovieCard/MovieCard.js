import "./MovieCard.css"

import { useNavigate } from "react-router-dom";

function MovieCard(props) {
 const navigate=useNavigate();
 let filmId=props.id;
  const routing=()=>{
    navigate(`/details/${filmId}`);
  }

    return (
      <div className="moviecard">
        <img src={props.pic}/>
      <h1>{props.title}</h1>
      <p>{props.overview}</p>
      <p>{props.rating}</p>
      <button onClick={routing}>Details</button>
      </div>
    );
  }
  
  export default MovieCard;