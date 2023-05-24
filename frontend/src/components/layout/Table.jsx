import React from "react";
import { Link } from "react-router-dom";

const BBTRow = (props) => {
    const { name, city, address, phone, email, category, serviceTime } = props; // Destructuring Props
    return (<tr>
        <td>{name}</td>
        <td>{city}</td>
        <td style={{ width: "240px" }}>{address}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{category}</td>
        <td>{serviceTime}</td>
    </tr>)
}

const BBTHeadRow = (props) => {
    const { headName, headCity, headAddress, headPhone, headEmail, headCategory, headService } = props;
    return (<tr>
        <th>{headName}</th>
        <th>{headCity}</th>
        <th style={{ width: "240px" }}>{headAddress}</th>
        <th>{headPhone}</th>
        <th>{headEmail}</th>
        <th>{headCategory}</th>
        <th style={{ width: "75px" }}>{headService}</th>
    </tr>)
}

const BloodBankTable = (props) => {
    const { data, headingData } = props;
    // const[rows,setRows]=useState(bloodbank);
    return (
        <div className="tableContainer">
            <table>
                <tbody>
                    {headingData.map(row =>
                        <BBTHeadRow headName={row.name}
                            headCity={row.city}
                            headAddress={row.address}
                            headPhone={row.phone}
                            headEmail={row.email}
                            headCategory={row.category}
                            headService={row.serviceTime}
                        />
                    )}
                    {data.map(row =>
                        <BBTRow name={row.BloodBankName}
                            city={row.City}
                            address={row.Address}
                            phone={row.ContactNo}
                            email={row.Email}
                            category={row.Category}
                            serviceTime={row.ServiceTime}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}

// ***********************************************************************************************************
const BCTHeadRow = (props) => {
    const { headName, headDate, headDistrict, headCity, headAddress, headOrgName, headOrgType, headOrgEmail, headPerName, headPerCont } = props;
    return (<tr>
        <th>{headName}</th>
        <th style={{ width: "75px" }}>{headDate}</th>
        <th>{headDistrict}</th>
        <th>{headCity}</th>
        <th style={{ width: "170px" }}>{headAddress}</th>
        <th >{headOrgName}</th>
        <th>{headOrgType}</th>
        <th style={{ width: "150px" }}>{headOrgEmail}</th>
        <th>{headPerName}</th>
        <th>{headPerCont}</th>
        <th>Register</th>
    </tr>)
}
const BCTRow = (props) => {
    const { name, date, district, city, address, orgName, orgType, orgEmail, perName, perCont } = props; // Destructuring Props
    return (<tr>
        <td>{name}</td>
        <td>{date}</td>
        <td>{district}</td>
        <td>{city}</td>
        <td style={{ width: "170px" }}>{address}</td>
        <td>{orgName}</td>
        <td>{orgType}</td>
        <td style={{ width: "150px" }}>{orgEmail}</td>
        <td>{perName}</td>
        <td>{perCont}</td>
        {/* <td><button style={{ width: '100%', fontSize: '13.5px' }}>Register as Volunteer</button></td> */}
        <td><Link to="/DonorLogin" style={{ color: 'red', fontSize: '20px' }}>Register as Volunteer</Link></td>
    </tr>)
}
const BloodCampTable = (props) => {
    const { data, headingData } = props;
    // const[rows,setRows]=useState(bloodbank);
    return (
        <div className="tableContainer">
            <table>
                <tbody>
                    {headingData.map(row =>
                        <BCTHeadRow headName={row.name}
                            headDate={row.date}
                            headDistrict={row.district}
                            headCity={row.city}
                            headAddress={row.address}
                            headOrgName={row.orgName}
                            headOrgType={row.orgType}
                            headOrgEmail={row.orgEmail}
                            headPerName={row.perName}
                            headPerCont={row.perCont}
                        />
                    )}


                    {data.map(row =>
                        <BCTRow name={row.name}
                            date={row.date}
                            district={row.district}
                            city={row.city}
                            address={row.address}
                            orgName={row.orgName}
                            orgType={row.orgType}
                            orgEmail={row.orgEmail}
                            perName={row.orgPerName}
                            perCont={row.orgPerContact}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}
// *************************************************************
const DonorHeadRow = (props) => {
    const { headName, headGender, headAge, headDistrict, headCity, headAddress, headContact } = props;
    return (<tr>
        <th>{headName}</th>
        <th>{headGender}</th>
        <th>{headAge}</th>
        <th >{headDistrict}</th>
        <th>{headCity}</th>
        <th style={{ width: "200px" }}>{headAddress}</th>
        <th>{headContact}</th>
    </tr>)
}
const DonorRow = (props) => {
    const { name, gender, age, district, city, address, contact } = props; // Destructuring Props
    return (<tr>
        <td>{name}</td>
        <td>{gender}</td>
        <td>{age}</td>
        <td>{district}</td>
        <td>{city}</td>
        <td style={{ width: "200px" }}>{address}</td>
        <td>{contact}</td>
    </tr>)
}
const DonorTable = (props) => {
    const { data, headingData } = props;
    // const[rows,setRows]=useState(bloodbank);
    return (
        <div className="tableContainer">
            <table>
                <tbody>
                    {headingData.map(row =>
                        <DonorHeadRow headName={row.name}
                            headGender={row.gender}
                            headAge={row.age}
                            headDistrict={row.district}
                            headCity={row.city}
                            headAddress={row.address}
                            headContact={row.contactno}
                        />
                    )}
                    {data.map(row =>
                        <DonorRow name={row.name}
                            gender={row.gender}
                            age={row.age}
                            district={row.district}
                            city={row.city}
                            address={row.address}
                            contact={row.contactno}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}
// **********************************************************************
const BloodHeadRow = (props) => {
    const { headName, headBlood, headDistrict, headCity, headAddress, headContact ,headCategory,headService} = props;
    return (<tr>
        <th>{headName}</th>
        <th>{headBlood}</th>
        <th >{headDistrict}</th>
        <th>{headCity}</th>
        <th style={{ width: "200px" }}>{headAddress}</th>
        <th>{headContact}</th>
        <th>{headCategory}</th>
        <th>{headService}</th>
    </tr>)
}
const BloodRow = (props) => {
    const { name, blood, district, city, address, contact,category,service } = props; // Destructuring Props
    return (<tr>
        <td>{name}</td>
        <td>{blood}</td>
        <td>{district}</td>
        <td>{city}</td>
        <td style={{ width: "200px" }}>{address}</td>
        <td>{contact}</td>
        <td>{category}</td>
        <td>{service}</td>
    </tr>)
}
const BloodTable = (props) => {
    const { data, headingData } = props;
    // const[rows,setRows]=useState(bloodbank);
    return (
        <div className="tableContainer">
            <table>
                <tbody>
                    {headingData.map(row =>
                        <BloodHeadRow headName={row.BloodBankName}
                            headBlood={row.BloodComponentAvailable}
                            headDistrict={row.District}
                            headCity={row.City}
                            headAddress={row.Address}
                            headContact={row.ContactNo}
                            headCategory={row.Category}
                            headService={row.ServiceTime}
                        />
                    )}
                    {data.map(row =>
                        <BloodRow name={row.BloodBankName}
                            blood={row.BloodComponentAvailable}
                            district={row.District}
                            city={row.City}
                            address={row.Address}
                            contact={row.ContactNo}
                            category={row.Category}
                            service={row.ServiceTime}
                        />
                    )}
                </tbody>
            </table>
        </div>
    )
}


export default BloodBankTable;
export { BloodCampTable, DonorTable, BloodTable };
