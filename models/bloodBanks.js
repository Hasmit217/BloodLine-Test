const mongoose = require("mongoose")

const BloodBankSchema = new mongoose.Schema({
   SrNo: {type:String}, 
   BloodBankName: {type:String},
   State:{type:String},
   District: {type:String},
   City: {type:String},
   Address: {type:String},
   Pincode: {type:String},
   ContactNo: {type:String},
   Mobile: {type:String},
   Helpline:{type:String},
   Fax: {type:String},
   Email: {type:String},
   Website: {type:String},
   NodalOfficer: {type:String},
   ContactNodalOfficer: {type:String},
   MobileNodalOfficer: {type:String},
   EmailNodalOfficer: {type:String},
   QualificationNodalOfficer: {type:String},
   Category: {type:String},
   BloodComponentAvailable: {type:String},
   Apheresis: {type:String},
   ServiceTime: {type:String},
   LicenseNo: {type:String},
   DateLicenseObtained: {type:String},
   DateofRenewal: {type:String},
   Latitude: {type:String},
   Longitude: {type:String},
   Registered: {type:String}
});

module.exports = mongoose.model("BloodBank",BloodBankSchema);
