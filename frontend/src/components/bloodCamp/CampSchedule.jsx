import React, { useState } from "react";
import options from "./option";
import {BloodCampTable} from "../layout/Table";
import axios from "axios";

//name  orgName  orgType  orgEmail date time  district city address perName perContact
const headCampSchedule = [
    { name: "Camp Name", date: "Date", district: "District", city: "City", address: "Address", orgName: "Organization Name", orgType: "Organization Type", orgEmail: "Organization Email", perName: "Organizer Name", perCont: "Organizer Contact No" }
]

function CampSchedule() {

    const [user, setUser] = useState({
        state: "",
        city: "",
        district: "",
        date: ""
    });

    const [campData, setCampData] = useState([]);
    const [showPopUp, setPopUp] = useState(false);
    const [showTable, setShowTable] = useState(false);

    const handleInput = (e) => {
        e.preventDefault();

        let value = e.target.value;
        let name = e.target.name;
        if (name === "state") {
            setUser({ ...user, [name]: value, district: "" ,city:""}); // Reset district to "Select District"
        }
        else setUser({ ...user, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user)
        axios.post('http://localhost:8080/g/showCamps', user)
            .then(response => {
                setCampData(response.data);
                if (response.data.length === 0) {
                    setPopUp(true);
                    setShowTable(false);
                }
                else {
                    setShowTable(true);
                    setPopUp(false);
                }
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="camp-container">
            <img className="below-nav-img" src="images/below_nav_img.jpeg"></img>
            <div className="search-container">
                <h1 style={{ color: "#b11717" }}>Camp Schedule</h1>
                <form action="" className="camp-search-form">
                    <div className="camp-subFields">
                        <label htmlFor="state">State<span class="required-field"></span></label>
                        {/* <br></br> */}
                        <select name="state" value={user.state} onChange={handleInput} required>
                            <option value="" selected disabled>Select State</option>
                            {options.map((item) => {
                                return <option value={item.label}>{item.label}</option>
                                {/* console.log(item.label); */ }
                            })}
                        </select>

                    </div>
                    <div>
                        <label htmlFor="district">District</label>
                        {/* <br></br> */}
                        <select name="district" value={user.district} onChange={handleInput} required>
                            <option value="" selected disabled>Select District</option>
                            {options.map((item) => {
                                if (item.label === user.state) {
                                    return item.district.map((itemDis) => {
                                        return <option value={itemDis}>{itemDis}</option>
                                        {/* console.log(itemDis); */ }
                                    })
                                }
                            })}
                        </select>
                    </div>

                    {/* <div className="camp-subFields">
                        <label htmlFor="city">City</label>
                        <input name="city" type="text" value={user.city} onChange={handleInput} placeholder="Optional"></input>
                    </div> */}
                    <div className="camp-subFields">
                        <label htmlFor="state">Camp Date</label>
                        <div className="camp-subFields-date">
                            <input name="date" type="date" value={user.date} onChange={handleInput} placeholder="select date" required></input>
                        </div>
                    </div>
                </form>
                <div className="camp-submit">
                    <button type="submit" onClick={handleSubmit}>Search</button>
                </div>
            </div>
            <div>
                {showTable && (
                    <div className="bloodBankTable">
                        <h1 style={{ color: "#b11717" }}>Search Result</h1>
                        <BloodCampTable data={campData} headingData={headCampSchedule} />
                    </div>
                )}
            </div>
            <div>
                {showPopUp && (
                    <div className="popUp-container popUp-background">
                        <h3>No Blood Camps Available</h3>
                        <button style={{ width: "100%", border: "2px solid #d5d2d2" }} onClick={(e) => {
                            setPopUp(false);
                        }} >Cancel</button>
                    </div>
                )}
            </div>
        </div>

    )
}

export default CampSchedule;