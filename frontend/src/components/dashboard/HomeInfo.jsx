import React from "react";

function HomeInfo(){
    return(
        <div className="HomeInfodiv">
            <h1>New to Blood Donation??</h1>
            <h2>Know about Donation</h2>
            <img className = "dyk_img" src="images/home_dyk.png"></img>
            <img className = "bc_img" src="images/blood_compatibility.jpeg" alt = "blood compatible table"></img>
            <h2>Benefits</h2>
            <img className="benefits_img" src="images/benefits.png"></img>
        </div>
    )
} 

export default HomeInfo;