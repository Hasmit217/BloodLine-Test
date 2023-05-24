import React, { useState } from "react";
import options from "../bloodCamp/option";
import axios from "axios";

function RegisterCamp() {

    const [bloodBank, setBloodBank] = useState([]);

    const [user, setUser] = useState({
        name: "",
        orgName: "",
        orgType: "",
        orgEmail: "",
        participant: "",
        date: "",
        time: "",
        address: "",
        state: "",
        district: "",
        city: "",
        bldBank: "",
        campLat: "",
        campLong: "",
        orgPerName: "",
        orgPerCont: "",
        orgPerEmail: "",
        remark: ""
    });

    const handleInput = (e) => {
        e.preventDefault();

        let value = e.target.value;
        let name = e.target.name;
        setUser({ ...user, [name]: value })
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
            axios.post('http://localhost:8080/d/registerCamp', user)
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
            <div className="br-heading"><h1>Register BloodCamp</h1></div>
            <form method="POST">
                <div className="rc-form">
                    <div className="br-sub-container">
                        <h2>Camp Details</h2>
                        <div className="br-sub-container-field">
                            <label for="name">Camp Name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="name" value={user.name} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="orgName">Organization Name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="orgName" value={user.orgName} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="orgType">Organization Type<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="orgType" value={user.orgType} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="orgEmail">Organization Email<span class="required-field"></span></label>
                            <br></br>
                            <input type="email" name="orgEmail" value={user.orgEmail} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="participant">Estimated participant<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="participant" value={user.participant} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="date">Camp Schedule Date<span class="required-field"></span></label>
                            <br></br>
                            <input type="date" placeholder="Select Date" name="date" value={user.date} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="time">Camp Schedule Time<span class="required-field"></span></label>
                            <br></br>
                            <input type="time" placeholder="Select Date" name="time" value={user.time} onChange={handleInput} required></input>
                        </div>
                    </div>

                    <div className="br-sub-container">
                        <h2>Camp Location Details</h2>
                        <div className="br-sub-container-field">
                            <label for="state">State<span class="required-field"></span></label>
                            <br></br>
                            <select name="state" onChange={handleInput} value={user.state} required>
                                <option value="" selected disabled>Select State</option>
                                {options.map((item) => {
                                    return <option value={item.label}>{item.label}</option>
                                    {/* console.log(item.label); */ }
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
                                            {/* console.log(itemDis); */ }
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
                            <label for="bldBank">Blood Bank<span class="required-field"></span></label>
                            <br></br>
                            <select name="bldBank" onChange={handleInput} value={user.bldBank} required>
                                <option value="" selected disabled>Select Blood Bank</option>
                                {bloodBank.map((item) => {
                                    return <option value={item.BloodBankName}>{item.BloodBankName}</option>
                                    {/* console.log(item.label); */ }
                                })}
                            </select>
                            {/* <input type="text" name="bldBank" value={user.bldBank} onChange={handleInput} required></input> */}
                        </div>
                        <div className="br-sub-container-field">
                            <label for="campLat">Latitude<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="campLat" min="0" max="180" step="0.01" value={user.campLat} onChange={handleInput} required></input>
                            <label for="campLong">Longitude<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="campLong" min="0" max="180" step="0.01" value={user.campLong} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="address">Address<span class="required-field"></span></label>
                            <br></br>
                            <textarea name="address" value={user.address} onChange={handleInput} required></textarea>
                        </div>

                    </div>
                    <div className="br-sub-container">
                        <h2>Camp Organizer Details</h2>
                        <div className="br-sub-container-field">
                            <label for="orgPerName">Organizer Name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="orgPerName" value={user.orgPerName} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="orgPerContact">Contact Number<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="orgPerCont" value={user.orgPerCont} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="orgPerEmail">Organizer Email<span class="required-field"></span></label>
                            <br></br>
                            <input type="email" name="orgPerEmail" value={user.orgPerEmail} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="remark">Remarks</label>
                            <br></br>
                            <input type="text" value={user.remark} onChange={handleInput} name="remark"></input>
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

export default RegisterCamp;