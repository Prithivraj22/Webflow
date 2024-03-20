const moongoose = require("mongoose");
const Schema = moongoose.Schema;

const auth = new Schema({
  userName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  
});

const historySchema = new Schema({
 query:{
  type: String,
  required: true
 },
 timestamp:{
  type: Date,
  default: Date.now
 }
});

const user = moongoose.model("Authentication", auth);
const SearcHistory =moongoose.model("SearcHistory", historySchema);
module.exports = {user,SearcHistory}
