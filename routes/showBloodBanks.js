const BloodBank = require("../models/bloodBanks");

const router = require("express").Router();

console.log("opened");
router.post("/showBloodBanks", function (req, res) {
    console.log(req.body.chosenDistrict);
    let districtval = req.body.chosenDistrict;

    districtval = districtval.toUpperCase();
    console.log(districtval);

    BloodBank.find({ District: districtval },{BloodBankName:1})
        .then((bloodBanks) => {
            console.log(bloodBanks); // array of blood banks with matching district value
            res.json(bloodBanks);
        })
        .catch((err)=> {
            console.error(err);
            res.status(500).send('Internal server error');
        });

})

module.exports = router;