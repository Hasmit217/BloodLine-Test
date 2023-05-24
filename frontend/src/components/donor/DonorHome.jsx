import React from "react";
import DonorDashboard from "./DonorDashboard";

function DonorHome(){
    return (
        <div className="DonorHomeDiv">  
            <h2 className="DonorHomeh2">Your Blood Group: O-</h2>
            <h2 className="DonorHomeh2">Number of Past Donations: 2</h2>
            <h2 className="DonorHomeh2">Days Remaining Before Next Possible Donation: 27</h2>
        </div>
    );
}

export default DonorHome;