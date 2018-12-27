import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
     
     <button className="btn btn-warning"  onClick={() => props.addPoint(props.id)}>
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.image} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
          </ul>
        </div>
      </div>
      </button>
      
    )

export default FriendCard;
