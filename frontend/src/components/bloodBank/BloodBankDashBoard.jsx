import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { Link } from "react-router-dom";

const LogoutButton = () => {
    const { logout, isAuthenticated, user } = useAuth0();
    const [bankRegistered, setBankRegistered] = useState(false);

    useEffect(() => {
        if (isAuthenticated && user && !bankRegistered) {
            axios.post('http://localhost:8080/h/registerBank', { userid: user.name })
                .then(response => {
                    console.log(response.data);
                    setBankRegistered(true);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }, [isAuthenticated, user, bankRegistered]);
 
    return (
        isAuthenticated && (
            <div className="logOut-container">
                <p><h1>Welcome</h1> <h2 style={{}}>{user && user.name}</h2></p>
                {/* <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                </button> */}
            </div>
        )
    );
};


function BldBankDash() {
    return (
        <div className="DonorDashboard">
            <div className="bankTopDiv">
                <div className="DonorHeadDiv"><LogoutButton /></div>
            </div>
            <div className="DonorMainDiv">
                <ul className="DonorDashboardUl">
                    <li className="DonorDashboardLi"><Link to="/bloodBankDash">Home</Link></li>
                    <li className="DonorDashboardLi"><Link to="/registerBloodBank">View/Update Profile</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default BldBankDash;