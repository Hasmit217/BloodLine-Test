import React from "react"

function News() {
    return (
        <div className="mainNewscontainer" style={{'margin-top':'120px'}}>
            <div className="newsHead"><h1 style={{ color: '#b11717' }}>News Section</h1></div>
            <div className="newsContainer">

                <ul>
                    <div className="newsSection">
                        Blood donation centers and hospitals are experiencing a shortage of blood supply due to the ongoing COVID-19 pandemic.
                    </div>
                    <div className="newsSection">
                        In response, blood donation drives have been organized across the country to encourage more people to donate blood.
                    </div>
                    <div className="newsSection">
                        The American Red Cross has launched a new blood donor app that allows users to schedule appointments, track their blood donations, and receive rewards for their donations.
                    </div>
                    <div className="newsSection">
                        Many blood donation centers are also offering incentives such as free movie tickets and gift cards to encourage people to donate blood.
                    </div>
                    <div className="newsSection">
                        Blood banks are using technology to improve the management of blood supplies and reduce waste.
                    </div>
                    <div className="newsSection">
                        Some blood banks are implementing blockchain technology to track the journey of donated blood from the donor to the patient.
                    </div>
                    <div className="newsSection">
                        Many blood banks are also partnering with hospitals and healthcare providers to ensure that blood supplies are readily available when needed.
                    </div>
                    <div className="newsSection">
                        Blood camp organizers are using data analytics and AI to improve the planning and execution of blood camps.
                    </div>
                    <div className="newsSection">
                        Blood camp organizers are also leveraging social media and digital marketing to raise awareness about the importance of blood donation and to encourage more people to participate in blood donation drives.
                    </div>
                    <div className="newsSection">
                        Mobile blood collection vans are being used to bring blood donation centers to remote and underserved areas.
                    </div>
                </ul>
            </div>
        </div>

    )
}

export default News;
