import React from "react";
import { Link } from "react-router-dom";

function footer() {
    return (
        <div>
            <footer>
                <div className="footer-row">
                    <div className="footer-col">
                        <h3>Looking For Blood</h3>
                        <ul>
                            <li><Link to="/bloodAvailSearch">Search Blood Availiblity</Link></li>
                            <li><Link to="/donorDirectory">Find Donor</Link></li>
                            <li><Link to="/BloodBankDir">Blood bank Directory</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Want to Donate Blood</h3>
                        <ul>
                            <li><Link to="/RegistrationVolDonor">Register as Volunteer</Link></li>
                            <li><Link to="/campSchedule">Search Blood camps</Link></li>
                            <li><Link to="/DonorLogin">Donor Login</Link></li>
                            {/* <li><Link to="">About Blood Donation</Link></li> */}
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>Blood Bank Login</h3>
                        <ul>
                            <li><Link to="/registerBloodBank">Add your Blood Bank</Link></li>
                            <li><Link to="/BloodBankLogin">Blood Bank login</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h3>About us</h3>
                        <ul>
                            <li><Link to="/AboutUs">About BloodLine</Link></li>
                            <li><Link to="/AboutUs">Contact Us</Link></li>
                            {/* <li><Link to="">Gallery</Link></li>
                            <li><Link to="">About Blood donation</Link></li> */}
                        </ul>
                    </div>
                </div>
                <div className="footer-row">
                    <p>© 2023 Bloodline inc.</p>
                </div>
                <div className="footer-row">
                <p><Link to="">Terms & Condition</Link>|<Link to="">Privacy Policy</Link>| Last Updates:15 April 2023 </p>
                </div>
            </footer>
        </div>
    )
}

export default footer;