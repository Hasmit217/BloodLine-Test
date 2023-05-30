const BloodBank = require("../models/bloodBanks");

const router = require("express").Router();

console.log("opened");
router.post("/showBBdir", function (req, res) {
    // res.send("hello");
    // console.log(req.body);

    var user = req.body;

    if(user.city !== "")
    {
        BloodBank.find({ City: user.city },{BloodBankName:1,Address:1,ContactNo:1,Email:1,Category:1,City:1,ServiceTime:1})
        .then((bloodBanks) => {
            console.log(bloodBanks); // array of blood banks with matching district value
            res.json(bloodBanks);
        })
        .catch((err)=> {
            console.error(err);
            res.status(500).send('Internal server error');
        });
    }
    else if(user.district !== "")
    {
        BloodBank.find({ District: user.district.toUpperCase() },{BloodBankName:1,Address:1,ContactNo:1,City:1,Email:1,Category:1,ServiceTime:1})
        .then((bloodBanks) => {
            console.log(bloodBanks); // array of blood banks with matching district value
            res.json(bloodBanks);
        })
        .catch((err)=> {
            console.error(err);
            res.status(500).send('Internal server error');
        });
    }
    else
    {
        BloodBank.find({ State: user.state },{BloodBankName:1,Address:1,ContactNo:1,Email:1,Category:1,City:1,ServiceTime:1})
        .then((bloodBanks) => {
            console.log(bloodBanks); // array of blood banks with matching district value
            res.json(bloodBanks);
        })
        .catch((err)=> {
            console.error(err);
            res.status(500).send('Internal server error');
        });
    }

})

module.exports = router;