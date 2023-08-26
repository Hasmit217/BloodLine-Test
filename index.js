require("dotenv").config();

const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//================ routes and models ========================
const BloodRequest = require("./models/bloodReq");
const BloodReqRoute = require("./routes/bloodReq");

const BloodBank = require("./models/bloodBanks");
const BloodBankRoute = require("./routes/bloodBanks");

const ShowBloodBanksRoute = require("./routes/showBloodBanks");

const BloodCampRoute = require("./routes/bloodCamps");

const ShowBloodBanksDirRoute = require("./routes/showBBdir");
const ShowCitiesRoute = require("./routes/showCities");
const ShowCampsRoute = require("./routes/showCamps");
const RegisterBanksRoute = require("./routes/registerBank");
const RegisterDonorsRoute = require("./routes/donor");
const ShowDonorsRoute = require("./routes/showDonor");
const ShowBloodAvailRoute = require("./routes/bloodAvailability");
//===========================================================

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb+srv://ekanshlohiya98:Bloodline%40she98@cluster0.9k4kzet.mongodb.net/bloodlineDB");
    console.log(`Mongo DB Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

connectDB().then(() => {
  const port = process.env.port || 8080;
  app.listen(port, function () {
    console.log("Server started sucessfully");
  });
})

app.use("/a", BloodReqRoute);
app.use("/b", BloodBankRoute);
app.use("/c", ShowBloodBanksRoute);
app.use("/d", BloodCampRoute);
app.use("/e", ShowBloodBanksDirRoute);
app.use("/f", ShowCitiesRoute);
app.use("/g", ShowCampsRoute);
app.use("/h", RegisterBanksRoute);
app.use("/i", RegisterDonorsRoute);
app.use("/j", ShowDonorsRoute);
app.use("/k", ShowBloodAvailRoute);

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
// });

// Serving the Frontend
app.use(express.static(path.join(__dirname,"./frontend/build")));
app.get("*",(req,res)=>{
  res.sendFile(
    path.join(__dirname,"./frontend/build/index.html"),
    function(err){
      res.status(500).send(err)
    }
  )
})


