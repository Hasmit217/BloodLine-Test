import React, { useState } from "react";
import options, { bloodgroup } from "../bloodCamp/option";
import { BloodTable } from "../layout/Table";
import axios from "axios";


const headBloodAvail = [
    { BloodBankName: "Name", BloodComponentAvailable: "Blood Available", District: "District", City: "City", Address: "Address", ContactNo: "Contact Number", Category: "Category", ServiceTime: "Service Time" }
]

function BloodAvail() {

    const [bloodAvail, setBloodAvail] = useState([]);
    const [showPopUp, setPopUp] = useState(false);
    const [showTable, setShowTable] = useState(false);


    const [user, setUser] = useState({
        state: "",
        district: "",
        blood: ""
    });

    const handleInput = (e) => {
        e.preventDefault();

        let value = e.target.value;
        let name = e.target.name;
        if (name === "state") {
            setUser({ ...user, [name]: value, district: "" }); // Reset district to "Select District"
        }
        else setUser({ ...user, [name]: value });
    }

    const handleSearchClick = () => {
        console.log("hello");
        axios.post('http://localhost:8080/k/showBloodAvail', user)
            .then(response => {
                setBloodAvail(response.data);
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
                <h1 style={{ color: "#b11717" }}>Search Blood Availability</h1>
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
                        <select name="district" value={user.district} onChange={handleInput}>
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
                        <label htmlFor="state">City</label>
                        <input type="text" placeholder="Optional"></input>
                    </div> */}



                </form>
                <div className="camp-submit">
                    <button onClick={handleSearchClick} type="submit">Search</button>
                </div>
            </div>
            <div>
                {showTable && (
                    <div className="bloodBankTable">
                        <h1 style={{ color: "#b11717" }}>Search Result</h1>
                        <BloodTable data={bloodAvail} headingData={headBloodAvail} />
                    </div>
                )}
            </div>
            <div>
                {showPopUp && (
                    <div className="popUp-container popUp-background">
                        <h3>No Blood Available</h3>
                        <button style={{ width: "100%", border: "2px solid #d5d2d2" }} onClick={(e) => {
                            setPopUp(false);
                        }} >Cancel</button>
                    </div>
                )}
            </div>
        </div>

    )
}

export default BloodAvail;