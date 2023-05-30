const BloodCamp = require("../models/bloodCamps");
const router = require("express").Router();


router.post("/registerCamp",async(req,res) => {
    console.log(req.body.date);
    const bloodCamp = new BloodCamp({
        name: req.body.name,
        orgName: req.body.orgName,
        orgType: req.body.orgType,
        orgEmail: req.body.orgEmail,
        participant: req.body.participant,
        date: req.body.date,
        time: req.body.time,
        state: req.body.state,
        district: req.body.district,
        city: req.body.city,
        bldBank: req.body.bldBank,
        campLat: req.body.campLat,
        campLong: req.body.campLong,
        address: req.body.address,
        orgPerName: req.body.orgPerName,
        orgPerContact: req.body.orgPerCont,
        orgPerEmail: req.body.orgPerEmail,
        remark: req.body.remark
    });
    try {
        const savedUser = await bloodCamp.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;
