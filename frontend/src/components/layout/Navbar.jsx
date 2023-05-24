// import React from "react";
// import { Link } from "react-router-dom";
// import { useAuth0 } from "@auth0/auth0-react";


// const LoginButton = () => {
//     const { loginWithRedirect,isAuthenticated} = useAuth0();
  
//     return !isAuthenticated && <button onClick={() => loginWithRedirect()}>Log In</button> ;
// };


// const LogoutButton = () => {
// const { logout ,isAuthenticated,user} = useAuth0();

// return (isAuthenticated && (
//     <div>
//     <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
//     Log Out
//     </button>
//         <p>Hi! {user.name}</p>
//     </div>
//     )
// );
// };

// function navbar() {
//     return (
//         <div>
//             <nav className="navbar">
//                 <a href="#">
//                     <img className="logo-img" src="images/BloodLine.png"></img>
//                 </a>
//                 <div className="navbar-func-container">
//                     <div className="navbar-func"> <a href="#">Dashboard</a>
//                         <div className="dropdown-content">
//                             <li>
//                                 <Link to="/">Home</Link>
//                                 <Link to="/AboutUs">About Us</Link>
//                                 {/* <Link to="/camp">Contact Us</Link> */}
//                                 <Link to="/news">Notification/News</Link>
//                             </li>
//                         </div>
//                     </div>
//                     <div className="navbar-func"> <a href="#">Donate Blood</a>
//                         <div className="dropdown-content">
//                             <li>
//                                 <Link to="/DonorLogin">Donor login</Link>
//                                 <Link to="/campSchedule">Search Blood donation camps</Link>
//                                 <Link to="/RegistrationVolDonor">Register as Volunteer</Link>
//                                 {/* <Link to="">About Blood donation</Link> */}
//                             </li>
//                         </div>
//                     </div>
//                     <div className="navbar-func"> <a href="#">Find Blood</a>
//                         <div className="dropdown-content">
//                             <li>
//                                 <Link to="/bloodAvailSearch">Blood availiblity</Link>
//                                 <Link to="/BloodBankDir">Blood bank Directory</Link>
//                                 <Link to="/donorDirectory">Contact volunteer donors</Link>
//                                 <Link to="/requestBloodForm">Make Blood Request</Link>
//                             </li>
//                         </div>
//                     </div>
//                     <div className="navbar-func"> <a href="#">Blood Bank</a>
//                         <div className="dropdown-content">
//                             <li>
//                                 {/* <Link to="">{<LoginButton/>}</Link> */}
//                                 <Link to="/BloodBankLogin">Login/Register</Link>
//                                 {/* <Link to="/registerBloodBank">Register Blood bank</Link> */}
//                             </li>
//                         </div>
//                     </div>
//                     <div className="navbar-func"> <a href="#">Blood Camp</a>
//                         <div className="dropdown-content">
//                             <li>
//                                 <Link to="/RegisterCamp">Register Blood Camp</Link>
//                                 {/* <Link to="">Learn About Hosting Blood camp</Link> */}
//                             </li>
//                         </div>
//                     </div>
//                 </div>


//             </nav>
//         </div>
//     )
// }

// export default navbar;



import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div>
      <nav className="navbar">
        <a href="#">
          <img className="logo-img" src="images/BloodLine.png" alt="BloodLine Logo"></img>
        </a>
        <div className="navbar-func-container">
          <div className="navbar-func">
            <a href="#">Dashboard</a>
            <div className="dropdown-content">
              <li>
                <Link to="/">Home</Link>
                <Link to="/AboutUs">About Us</Link>
                {/* <Link to="/camp">Contact Us</Link> */}
                <Link to="/news">Notification/News</Link>
              </li>
            </div>
          </div>
          <div className="navbar-func">
            <a href="#">Donate Blood</a>
            <div className="dropdown-content">
              <li>
                <Link to="/DonorLogin">Donor login</Link>
                <Link to="/campSchedule">Search Blood donation camps</Link>
                <Link to="/RegistrationVolDonor">Register as Volunteer</Link>
                {/* <Link to="">About Blood donation</Link> */}
              </li>
            </div>
          </div>
          <div className="navbar-func">
            <a href="#">Find Blood</a>
            <div className="dropdown-content">
              <li>
                <Link to="/bloodAvailSearch">Blood availiblity</Link>
                <Link to="/BloodBankDir">Blood bank Directory</Link>
                <Link to="/donorDirectory">Contact volunteer donors</Link>
                <Link to="/requestBloodForm">Make Blood Request</Link>
              </li>
            </div>
          </div>
          <div className="navbar-func">
            <a href="#">Blood Bank</a>
            <div className="dropdown-content">
              <li>
                {console.log(isAuthenticated)}
                {!isAuthenticated ? (
                  <Link to="/BloodBankLogin">Login/Register</Link>
                ) : (
                  <>
                    <Link to="/bloodBankDash">BloodBank Dashboard</Link>
                    <Link onClick={() => logout({ returnTo: window.location.origin })}>Logout</Link>
                  </>
                )}
                {/* <Link to="/registerBloodBank">Register Blood bank</Link> */}
              </li>
            </div>
          </div>
          <div className="navbar-func">
            <a href="#">Blood Camp</a>
            <div className="dropdown-content">
              <li>
                <Link to="/RegisterCamp">Register Blood Camp</Link>
                {/* <Link to="">Learn About Hosting Blood camp</Link> */}
              </li>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;