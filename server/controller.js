const { user, SearcHistory } = require("./models");

exports.getUsers = async (req, res) => {
  try {
    console.log("Fetching users");
    const data = await user.find();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.createUsers = async (req, res) => {
  try {
    console.log("Creating user");
    const newUser = new user(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.login = async (req, res) => {
  try {
    console.log("Logging in");
    const data = await user.find(req.body);
    if (data.length === 0) {
      return res.status(401).json({ message: "Invalid username or password" });
    }
    res.status(200).json({ message: "Login successful", user: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

exports.createSearchHistory = async (req, res) => {
  try {
    console.log("Creating search history");
    const { query } = req.body;
    const newSearch = new SearcHistory({ query });
    await newSearch.save();
    res.status(201).json(newSearch);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
};

exports.getSearchHistoryList = async (req, res) => {
  try {
    console.log("Fetching search history list");
    const historyList = await SearcHistory.find().sort({ timestamp: -1 }).limit(10);
    res.status(200).json(historyList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
