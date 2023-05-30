const mongoose = require("mongoose");

const DonorSchema = new mongoose.Schema({
    name: {type:String},
    state: {type:String},
    district: {type:String},
    city: {type:String},
    bloodgrp: {type: String},
    address: {type: String},
    contactno: {type: Number},
    age: {type: Number},
    gender: {type:String}
});

module.exports = mongoose.model("Donor",DonorSchema);