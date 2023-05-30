const Donor = require("../models/donor");

const router = require("express").Router();

router.post("/registerDonor",async(req,res) => {
    console.log(req.body);
    const donor = new Donor({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        bloodgrp: req.body.bldGrp,
        contactno: req.body.phone,
        address: req.body.address,
        state: req.body.state,
        district: req.body.district,
        city: req.body.city
    });
    try {
        const savedUser = await donor.save();
        console.log(savedUser);
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json(err);
      }
})

module.exports = router;
