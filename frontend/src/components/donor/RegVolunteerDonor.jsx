import React ,{useState} from "react";
import options ,{bloodgroup} from "../bloodCamp/option";
import axios from "axios";

function RegVolunteerDonor() {

    const [user, setUser] = useState({
        name: "",
        bldGrp: "",
        state: "",
        district: "",
        city: "",
        age: "",
        gender: "",
        phone: "",
        address: ""
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
            axios.post('http://localhost:8080/i/registerDonor', user)
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
        <div className="vd-container">
            <div className="vd-heading"><h1 style={{ color: "#b11717" }}>Register as Volunteer Donor</h1></div>
            <form method="POST">
                <div className="vd-form">
                    <div className="vd-sub-container">
                        <h2>Donor Details</h2>
                        <div className="vd-sub-container-field">
                            <label for="name">Name<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="name" value={user.name} onChange={handleInput} required></input>
                        </div>
                        <div className="vd-sub-container-field">
                            <label for="gender">Gender<span class="required-field"></span></label>
                            <br></br>
                            <select name="gender" value={user.gender} onChange={handleInput}>
                                <option value="" selected disabled>Select Gender<span class="required-field"></span></option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Transgender">Transgender</option>
                            </select>
                        </div>
                        <div className="vd-sub-container-field">
                            <label for="age">Age<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="age" value={user.age} onChange={handleInput} required></input>
                        </div>
                        <div className="vd-sub-container-field">
                            <label for="bldGrp">Blood Group<span class="required-field"></span></label>
                            <br></br>
                            <select name="bldGrp" onChange={handleInput} value={user.bldGrp} required>
                                <option value="" selected disabled>Select Blood Group</option>
                                {bloodgroup.map((item) => {
                                    return <option value={item}>{item}</option>
                                })}
                            </select>
                        </div>
                        <div className="vd-sub-container-field">
                            <label for="state">State<span class="required-field"></span></label>
                            <br></br>
                            <select name="state" onChange={handleInput} value={user.state} required>
                                <option value="" selected disabled>Select State</option>
                                {options.map((item) => {
                                    return <option value={item.label}>{item.label}</option>
                                })}
                            </select>
                        </div>
                        <div className="vd-sub-container-field">
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
                        <div className="vd-sub-container-field">
                            <label for="licRenDate">City<span class="required-field"></span></label>
                            <br></br>
                            <input type="text" name="city" value={user.city} onChange={handleInput} required></input>
                        </div>
                        <div className="vd-sub-container-field">
                            <label for="address">Address<span class="required-field"></span></label>
                            <br></br>
                            <textarea name="address" value={user.address} onChange={handleInput} required></textarea>
                        </div>
                        <div className="vd-sub-container-field">
                            <label for="phone">Contact Number<span class="required-field"></span></label>
                            <br></br>
                            <input type="number" name="phone" value={user.phone} onChange={handleInput} required></input>
                        </div>
                    </div>
                </div>
                <div className="vd-form-submit">
                    <button type="submit" onClick={handleClick}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default RegVolunteerDonor;