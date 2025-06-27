const User = require("../models/User");

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  const saved = await newUser.save();
  res.json(saved);
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && user.password === password) {
    res.json({ message: "Login successful", user });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
};

module.exports = { registerUser, loginUser };