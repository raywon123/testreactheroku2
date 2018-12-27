import React from "react";
import "./Title.css";

let str = "Click on an image to earn points, but don't click on any more than once!";

const Title = props => (
    <div>
        <div className="row">
            <div className="col-lg-12">
                <h1 className="title">{props.children}</h1>
                <h4> {str} </h4>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <h4> {props.message}</h4>
                <h4 className="clickcount">Score: {props.point} | Top Score: {props.highPoint} </h4>
            </div>
        </div>
        
    </div >
);
export default Title;
