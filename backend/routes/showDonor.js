const Donor = require("../models/donor");
const router = require("express").Router();


router.post("/showDonors", function (req, res) {
    // res.send("hello");
    // console.log(req.body);

    var user = req.body;
    console.log(user.bldGrp);

    if (user.district !== "") {

        Donor.find({ district: user.district, bloodgrp: bldGrp })
            .then((donors) => {
                console.log(donors); // array of blood banks with matching district value
                res.json(donors);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Internal server error');
            });
    }
    else if (user.state !== "") {
        Donor.find({ state: user.state, bloodgrp: user.bldGrp })
            .then((donors) => {
                console.log(donors); // array of blood banks with matching district value
                res.json(donors);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Internal server error');
            });
    }
    else {
        Donor.find({ bloodgrp: user.bldGrp })
            .then((donors) => {
                console.log(donors); // array of blood banks with matching district value
                res.json(donors);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Internal server error');
            });

    }

})


module.exports = router;