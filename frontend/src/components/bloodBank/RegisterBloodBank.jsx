import React, {useState} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import options from "../bloodCamp/option";

function RegisterBloodBank() {

    const [user, setUser] = useState({
        name: "",
        category: "",
        licNo: "",
        licDate: "",
        licRenDate: "",
        bldAvail: "",
        serTime: "",
        state: "",
        district: "",
        city: "",
        pincode: "",
        bankLat: "",
        bankLong: "",
        address: "",
        offName: "",
        offQuali: "",
        offContact: "",
        contact: "",
        helpLine: ""
    });

    const handleInput = (e) => {
        e.preventDefault();

        let value = e.target.value;
        let name = e.target.name;
        if (name === "state") {
            setUser({ ...user, [name]: value, district: "", city: "" }); // Reset district to "Select District"
        }
        else setUser({ ...user, [name]: value });
    }

    const isAnyFieldEmpty = (e) => {
        for (const key in user) {
            if (user[key].trim() === '') {
                return true;
            }
        }
        return false;
    };

    const handleClick = (e) => {
        
        e.preventDefault();

        console.log(user);

        var isEmpty = isAnyFieldEmpty();

        if (!isEmpty) {
            axios.post('http://localhost:8080/h/registerBank', user)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });

            alert('Form submitted successfully!');
            window.location.reload();
        }
        else{
            alert("Please Fill out the required Field!");
        }
    }


    return (
        <div className="br-container">
            <div className="br-heading"><h1>BloodBank Details</h1></div>
            <form method="POST">
                <div className="rc-form">
                    <div className="br-sub-container">
                        <h2>Blood Bank Details</h2>
                        <div className="br-sub-container-field">
                            <label for="name">Blood Bank Name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="name" value={user.name} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="category">Category<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="category" value={user.category} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="licNo">LicenseNo<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="licNo" value={user.licNo} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="licDate">Licence Date<span class="required-field"></span></label>
                            <br></br>
                            <input type="date" name="licDate" value={user.licDate} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="licRenDate">Licence Renewal Date<span class="required-field"></span></label>
                            <br></br>
                            <input type="date" name="licRenDate" value={user.licRenDate} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="text">Blood Availiblity<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="bldAvail" value={user.bldAvail} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="text">Service Time<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="serTime" value={user.serTime} onChange={handleInput} required></input>
                        </div>
                    </div>

                    <div className="br-sub-container">
                        <h2>Location Details</h2>
                        <div className="br-sub-container-field">
                            <label for="state">State<span class="required-field"></span></label>
                            <br></br>
                            <select name="state" onChange={handleInput} value={user.state} required>
                                <option value="" selected disabled>Select State</option>
                                {options.map((item) => {
                                    return <option value={item.label}>{item.label}</option>
                                })}
                            </select>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="district">District<span class="required-field"></span></label>
                            <br></br>
                            <select name="district" onChange={handleInput} value={user.district} required>
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
                        <div className="br-sub-container-field">
                            <label for="city">City<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="city" value={user.city} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="pincode">Pin Code<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="pincode" value={user.pincode} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="campLat">Latitude<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="bankLat" min="0" max="180" step="0.01" value={user.bankLat} onChange={handleInput} required></input>
                            <label for="campLong">Longitude<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="bankLong" min="0" max="180" step="0.01" value={user.bankLong} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="address">Address<span class="required-field"></span></label>
                            <br></br>
                            <textarea name="address" value={user.address} onChange={handleInput} required></textarea>
                        </div>

                    </div>
                    <div className="br-sub-container">
                        <h2>Contact Details</h2>
                        <div className="br-sub-container-field">
                            <label for="offName">Name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="offName" value={user.offName} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="offQuali">Qualification<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="offQuali" value={user.offQuali} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="offContact">Blood Bank Officer Contact Number<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="offContact" value={user.offContact} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="contact">BloodBank Contact Number<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="contact" value={user.contact} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="helpLine">Helpline Number<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="helpLine" value={user.helpLine} onChange={handleInput} required></input>
                        </div>
                    </div>
                </div>
                <div className="br-form-submit">
                    <button type="submit" onClick={handleClick}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterBloodBank;