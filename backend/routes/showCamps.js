const BloodCamp = require("../models/bloodCamps");

const router = require("express").Router();

console.log("opened");
router.post("/showCamps", function (req, res) {
    // res.send("hello");
    // console.log(req.body);

    var user = req.body;
    // console.log(user);
    if (user.district !== "") {
        if (user.date !== "") {
            BloodCamp.find({ district: user.district, date: user.date })
                .then((bloodCamp) => {
                    console.log(bloodCamp); // array of blood banks with matching district value
                    res.json(bloodCamp);
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500).send('Internal server error');
                });
        }
        else {
            BloodCamp.find({ district: user.district })
                .then((bloodCamp) => {
                    console.log(bloodCamp); // array of blood banks with matching district value
                    res.json(bloodCamp);
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500).send('Internal server error');
                });
        }

    }
    else if (user.state !== "") {
        if (user.date !== "") {
            BloodCamp.find({ state: user.state, date: user.date })
                .then((bloodCamp) => {
                    console.log(bloodCamp); // array of blood banks with matching district value
                    res.json(bloodCamp);
                })
                .catch((err) => {
                    console.error(err);
                    res.status(500).send('Internal server error');
                });
        }
        else{
            BloodCamp.find({ state: user.state })
            .then((bloodCamp) => {
                console.log(bloodCamp); // array of blood banks with matching district value
                res.json(bloodCamp);
            })
            .catch((err) => {
                console.error(err);
                res.status(500).send('Internal server error');
            });
        }
        
    }
    // else

    //     BloodCamp.find({ district: user.district, state: user.state, date: user.date })
    //         .then((bloodcamps) => {
    //             console.log(bloodcamps);
    //             res.json(bloodcamps);
    //         })
    //         .catch((err) => {
    //             console.error(err);
    //             res.status(500).send('Internal server error');
    //         });

})

module.exports = router;