import React from "react";
import "./card.css";


function Card(props) {
    return (
        <div className="card border-0 col-lg-3 col-md-4">
    <a href="#"><img src={props.src} /></a>
    <p className="card-title">{props.title}</p>
    <p className="card-price">{props.price}</p>
    <div className="col-lg-3">
    <a href="#"><i className="fa-solid fa-circle-plus"></i>
    </a>
    </div>
    </div>
    
    ) 

}


export default Card;