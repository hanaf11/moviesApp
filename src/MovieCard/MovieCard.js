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
        <img className="poster" src={props.pic}/>
      <h1>{props.title}</h1>
      <hr/>
      <p>{props.overview}</p>
      <p className="rating">Rating: {props.rating}</p>
      <button className="btn-details"onClick={routing}>Details</button>
      </div>
    );
  }
  
  export default MovieCard;