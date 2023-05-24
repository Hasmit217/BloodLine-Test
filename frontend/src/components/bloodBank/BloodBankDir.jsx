import React, { useState } from "react";
import options from "../bloodCamp/option";
import BloodBankTable from "../layout/Table";
import axios from "axios";

const headBloodbank = [
    { name: "Name", city: "City", address: "Address", phone: "Contact No", email: "Email Id", category: "Category", serviceTime: "Service Time" }
]

function BloodBankDir() {

    const [bldBankDir, setBldBankDir] = useState([])
    const [city, setCity] = useState([])

    const [user, setUser] = useState({
        state: "",
        district: "",
        city: ""
    });

    const [showPopUp, setPopUp] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const [showCity, setShowCity] = useState(false);
    const [showFilter, setShowFilter] = useState(true);

    const handleShowCity = (e) => {
        e.preventDefault();

        console.log(user);
        axios.post('http://localhost:8080/f/showCities', user)
            .then(response => {
                setCity(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error(error);
            });

        setShowCity(true);
        setShowFilter(false);
    }

    const handleInput = (e) => {
        e.preventDefault();

        let value = e.target.value;
        let name = e.target.name;

        if (name === "state") {
            setUser({ ...user, [name]: value, district: "" ,city:""}); // Reset district to "Select District"
        }
        if (name == "district") {
            setUser({ ...user, [name]: value, city: "" });
        }
        if(name=="city"){
            setUser({ ...user, [name]: value});
        }

    }

    const handleSearchClick = () => {
        axios.post('http://localhost:8080/e/showBBdir', user)
            .then(response => {
                setBldBankDir(response.data);
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
                <h1 style={{ color: "#b11717" }}>Search Nearest Blood Bank</h1>
                <form action="" className="camp-search-form">
                    <div className="camp-subFields">
                        <label htmlFor="state">State<span class="required-field"></span></label>
                        {/* <br></br> */}
                        <select name="state" value={user.state} onChange={(e) => {
                            handleInput(e);
                            setShowFilter(true);
                            setShowCity()
                        }} required>
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
                        <select name="district" value={user.district} onChange={(e) => {
                            handleInput(e);
                            setShowFilter(true);
                            setShowCity()
                        }}>
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

                    <div className="camp-subFields">
                        {showFilter &&
                            <a onClick={handleShowCity}>More Filter?</a>
                        }
                        {showCity &&
                            <div>
                                <label htmlFor="city">City</label>
                                <select name="city" value={user.city} onChange={(e) => {
                                    handleInput(e);
                                    console.log("HI");
                                }} required>
                                    <option value="" selected disabled>Select City</option>
                                    {[...new Set(city.map(item => item.City))].map(cityName => (
                                        <option key={cityName} value={cityName}>{cityName}</option>
                                    ))}
                                </select>
                            </div>
                        }
                        {/* <input type="text" name="city" value={user.city} onChange={handleInput} placeholder="Optional"></input> */}
                    </div>
                </form>
                <div className="camp-submit">
                    <button type="button" onClick={handleSearchClick}>Search</button>
                </div>
            </div>
            <div>
                {showTable && (
                    <div className="bloodBankTable">
                        <h1 style={{ color: "#b11717" }}>Search Result</h1>
                        <BloodBankTable data={bldBankDir} headingData={headBloodbank} />
                    </div>
                )}
            </div>
            <div>
                {showPopUp && (
                    <div className="popUp-container popUp-background">
                        <h3>No Blood banks Available</h3>
                        <button style={{width:"100%",border:"2px solid #d5d2d2"}} onClick={(e) => {
                            setPopUp(false);
                        }} >Cancel</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BloodBankDir;