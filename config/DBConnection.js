const mongoose = require("mongoose");
require("dotenv").config({path:"./.env"});
const _DBUrl =`mongodb://localhost:27017`;

mongoose
  .connect(_DBUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("Connected Successful")).catch((err) => console.log(`Connection failed ! Error : ${err}`));
