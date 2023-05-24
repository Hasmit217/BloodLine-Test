const BloodRequest = require("../models/bloodReq");

const router = require("express").Router();

router.post("/bloodReq",async(req,res) => {
    console.log(req.body);
    const bloodRequest = new BloodRequest({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        bloodgrp: req.body.bloodgrp,
        contactName: req.body.contactName,
        contactNameRel: req.body.contactNameRel,
        contactNum: req.body.contactNum,
        email: req.body.email,
        address: req.body.address,
        treatment: req.body.treatment,
        remark: req.body.remark,
        state: req.body.state,
        district: req.body.district,
        city: req.body.city,
        hospital: req.body.hospital
    });
    try {
        const savedUser = await bloodRequest.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;
