const mongoose = require("mongoose");

const BloodRequestSchema = new mongoose.Schema({
    name: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    bloodgrp: {type: String, required: true},
    contactName:  {type: String, required: true},
    contactNameRel: {type: String},
    contactNum: {type: Number, required: true},
    email: {type: String, required:true,unique:true},
    address: {type: String, required: true},
    treatment: {type: String, required: true},
    remark: {type: String},
    state: {type: String, required: true},
    district: {type: String, required: true},
    city: {type: String, required: true},
    hospital: {type: String, required: true}
    });

module.exports = mongoose.model("BloodRequest",BloodRequestSchema);