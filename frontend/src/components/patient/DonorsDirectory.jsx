import React,{useState} from "react";
import options,{bloodgroup} from "../bloodCamp/option";
import axios from "axios";
import { DonorTable } from "../layout/Table";


const headDonor = [
    { name: "Name", age: "Age", gender:"Gender", district: "District", city: "City", address: "Address", contactno : "Contact Number"}
]

function DonorsDir(){
    

    const [user, setUser] = useState({
        state: "",
        district: "",
        bldGrp: ""
    });

    const [donorDir, setDonorDir] = useState([]);
    const [showPopUp, setPopUp] = useState(false);
    const [showTable, setShowTable] = useState(false);

    const handleInput = (e) => {
        e.preventDefault();

        let value = e.target.value;
        let name = e.target.name;
        if (name === "bldGrp") {
            setUser({ ...user, [name]: value,state:"", district: ""}); // Reset district to "Select District"
        }
        else if(name==="state"){
            setUser({ ...user, [name]: value, district: ""}); // Reset district to "Select District"
        }
        else setUser({ ...user, [name]: value });
    }

    const handleSearchClick = () => {
        console.log("hello");
        axios.post('http://localhost:8080/j/showDonors', user)
            .then(response => {
                setDonorDir(response.data);
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
                <h1 style={{ color: "#b11717" }}>Search Nearby Donor</h1>
                <form action="" className="camp-search-form">
                    <div className="camp-subFields">
                        <label htmlFor="state">Blood Group<span class="required-field"></span></label>
                        <select name="bldGrp" value={user.bldGrp} onChange={(e) => {
                            handleInput(e);
                        }} required>
                            <option value="" selected disabled>Select Blood Group</option>
                            {bloodgroup.map((item) => {
                                return <option value={item}>{item}</option>
                            })}
                        </select>

                    </div>
                    <div className="camp-subFields">
                        <label htmlFor="state">State<span class="required-field"></span></label>
                     
                        <select name="state" value={user.state} onChange={(e) => {
                            handleInput(e);
                        }} required>
                            <option value="" selected disabled>Select State</option>
                            {options.map((item) => {
                                return <option value={item.label}>{item.label}</option>
                            })}
                        </select>
                    </div>
                    <div>
                        <label htmlFor="district">District</label>
                        <select name="district" value={user.district} onChange={(e) => {
                            handleInput(e);
                        }}>
                            <option value="" selected disabled>Select District</option>
                            {options.map((item) => {
                                if (item.label === user.state) {
                                    return item.district.map((itemDis) => {
                                        return <option value={itemDis}>{itemDis}</option>
                                    })
                                }
                            })}
                        </select>
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
                        <DonorTable data={donorDir} headingData={headDonor} />
                    </div>
                )}
            </div>
            <div>
                {showPopUp && (
                    <div className="popUp-container popUp-background">
                        <h3>No Donors Available</h3>
                        <button style={{width:"100%",border:"2px solid #d5d2d2"}} onClick={(e) => {
                            setPopUp(false);
                        }} >Cancel</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default DonorsDir;
