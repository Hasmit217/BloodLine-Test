const mongoose = require("mongoose");

const BloodCampSchema = new mongoose.Schema({
    name: {type:String},
    orgName: {type:String},
    orgType: {type:String},
    orgEmail: {type:String},
    participant: {type:Number},
    date: {type:String},
    time: {type:String},
    state: {type:String},
    district: {type:String},
    city: {type:String},
    bldBank: {type:String},
    campLat: {type:String},
    campLong: {type:String},
    address: {type:String},
    orgPerName: {type:String},
    orgPerContact: {type:String},
    orgPerEmail: {type:String},
    remark: {type:String}
});

module.exports = mongoose.model("BloodCamp",BloodCampSchema);