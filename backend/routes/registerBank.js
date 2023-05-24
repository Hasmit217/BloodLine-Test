const BloodBank = require("../models/bloodBanks");

const router = require("express").Router();

router.post("/registerBank",async (req,res) => {
    console.log(req.body.userid);

    BloodBank.find({Email:req.body.userid})
    .then(async (bloodBanks) => {
        if(bloodBanks.length===0)
        {
            const bbank = new BloodBank({
                Email: req.body.userid,
                Registered: "true"
            });
            try {
                const savedUser = await bbank.save();
                console.log(savedUser);
                res.status(201).json(savedUser);
              } catch (err) {
                res.status(500).json(err);
              }
        }
        else
        {
            console.log("hello");
            try {
                const updatedUser = await BloodBank.updateOne(
                    { Email: req.body.userid },
                    { Registered: "true" }
                );
                console.log(updatedUser);
                res.status(201).json({ message: "Blood bank already present in directory. Updated registration status." });
            } catch (err) {
                res.status(500).json(err);
            }
        }
    })
    .catch((err)=> {
        console.error(err);
        res.status(500).send('Internal server error');
    });


})

module.exports = router;