const BloodBank = require("../models/bloodBanks");
const router = require("express").Router();

router.post("/bloodBanks",async(req,res) => {
    console.log(req.body);
    const bloodBank = new BloodBank({ 
        SrNo: req.body.SrNo,
        BloodBankName: req.body.BloodBankName,
        State:req.body.State,
        District: req.body.District,
        City: req.body.City,
        Address: req.body.Address,
        Pincode: req.body.Pincode,
        ContactNo: req.body.ContactNo,
        Mobile: req.body.Mobile,
        Helpline:req.body.Helpline,
        Fax: req.body.Fax,
        Email: req.body.Email,
        Website: req.body.Website,
        NodalOfficer: req.body.NodalOfficer,
        ContactNodalOfficer: req.body.ContactNodalOfficer,
        MobileNodalOfficer: req.body.MobileNodalOfficer,
        EmailNodalOfficer: req.body.EmailNodalOfficer,
        QualificationNodalOfficer: req.body.QualificationNodalOfficer,
        Category: req.body.Category,
        BloodComponentAvailable: req.body.BloodComponentAvailable,
        Apheresis: req.body.Apheresis,
        ServiceTime: req.body.ServiceTime,
        LicenseNo: req.body.LicenseNo,
        DateLicenseObtained: req.body.DateLicenseObtained,
        DateofRenewal: req.body.DateofRenewal,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude,
        Registered: req.body.Registered
    });
    try {
        const savedUser = await bloodBank.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;
