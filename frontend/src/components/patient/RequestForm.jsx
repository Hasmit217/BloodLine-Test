import React, { useState } from "react";
import options, { bloodgroup } from "../bloodCamp/option";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RequestBlood() {

    const [state, setState] = useState("");
    const [districts, setDistrict] = useState("");
    const [blood, setBlood] = useState("");

    const [user, setUser] = useState({
        name: "",
        age: "",
        gender: "",
        bloodgrp: "",
        contactName: "",
        contactNameRel: "",
        contactNum: "",
        email: "",
        address: "",
        treatment: "",
        remark: "",
        state: "",
        district: "",
        city: "",
        hospital: ""
    })

    const handleState = (e) => {
        const value = e.target.value;
        setState(value);
    }
    const handleDistrict = (e) => {
        const value = e.target.value;
        setDistrict(value);
    }
    const handleBlood = (e) => {
        const value = e.target.value;
        setBlood(value);
    }
    const handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        setUser({ ...user, [name]: value })
    }
    const handleBloodInput = (e) => {
        handleBlood(e);
        handleInput(e);
    }
    const handleStateInput = (e) => {
        handleState(e);
        handleInput(e);
    }
    const handleDistrictInput = (e) => {
        handleDistrict(e);
        handleInput(e);
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
            axios.post('http://localhost:8080/a/bloodReq', user)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.error(error);
                });

            alert('Form submitted successfully!');
            window.location.reload();
        }
        else {
            alert("Please Fill out the required Field!");
        }

    }

    return (
        <div className="br-container">
            <div className="br-heading"><h1>SEND REQUEST</h1></div>
            <form method="POST">
                <div className="br-form">
                    <div className="br-sub-container">
                        <h2>Patient Details</h2>
                        <div className="br-sub-container-field">
                            <label for="name">Name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="name" value={user.name} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="age">Age<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="age" value={user.age} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="gender">Gender<span class="required-field"></span></label>
                            <br></br>
                            <select placeholder="Gender" name="gender" value={user.gender} onChange={handleInput}>
                                <option value="" selected disabled>Select Gender<span class="required-field"></span></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="trans">Transgender</option>
                            </select>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="bloodgrp">Blood Group<span class="required-field"></span></label>
                            <br></br>
                            <select name="bloodgrp" onChange={handleBloodInput} value={user.bloodgrp} required>
                                <option value="" selected disabled>Select Blood Group</option>
                                {bloodgroup.map((item) => {
                                    return <option value={item}>{item}</option>
                                    {/* console.log(item.label); */ }
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="br-sub-container">
                        <h2>Contact Details</h2>
                        <div className="br-sub-container-field">
                            <label for="contactName">Contact person name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="contactName" value={user.contactName} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="contactNameRel">Relation with person<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="contactNameRel" value={user.contactNameRel} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="contactNum">Contact Number<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="contactNum" value={user.contactNum} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="email">Email</label>
                            <br></br>
                            <input type="text" value={user.email} onChange={handleInput} name="email"></input>
                        </div>
                    </div>
                    <div className="br-sub-container">
                        <h2>Residence Details</h2>
                        <div className="br-sub-container-field">
                            <label for="address">Address<span class="required-field"></span></label>
                            <br></br>
                            <textarea name="address" value={user.address} onChange={handleInput} required></textarea>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="treatment">Treatment for?<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="treatment" value={user.treatment} onChange={handleInput} required></input>
                        </div>
                        <div className="br-sub-container-field">
                            <label for="remark">Remarks</label>
                            <br></br>
                            <input type="text" value={user.remark} onChange={handleInput} name="remark"></input>
                        </div>
                    </div>
                    <div className="br-sub-container">
                        <h2>Hospital</h2>
                        <div className="br-sub-container-field">
                            <label for="state">State<span class="required-field"></span></label>
                            <br></br>
                            <select name="state" onChange={handleStateInput} value={user.state} required>
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
                            <select name="district" onChange={handleDistrictInput} value={user.district} required>
                                <option value="" selected disabled>Select District</option>
                                {options.map((item) => {
                                    if (item.label === state) {
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
                            <label for="hospital">Hospital<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="hospital" value={user.hospital} onChange={handleInput} required></input>
                        </div>
                    </div>
                </div>
                <div className="br-form-submit">
                    <button type="submit" onClick={handleClick}>Send Request</button>
                </div>
            </form>
        </div>
    )
}

export default RequestBlood;