const mongoose = require("mongoose");
const user = "prithiv22";
const pass = "prithiv936";

const uri = `mongodb+srv://${user}:${pass}@trialmern.5ocftsh.mongodb.net/?retryWrites=true&w=majority&appName=trialmern`;

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });
