import React from "react";
import { Link } from "react-router-dom";

function HomeCard(props)
{
    return(
        <div className = "HomeCarddiv">
            {/* <img src = {props.imgURL} ></img> */}
            <Link to={props.pageURL}><h3>{props.name}</h3></Link>
        </div>
    )
}

export default HomeCard;