const User = require("../models/user.model");

module.exports.registerUser = async (req, res, next) => {
  try {
    const { userName, email, password, dateOfBirth } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await User.hashPassword(password);

    const user = await User.create({
      userName,
      email,
      password: hashedPassword,
      dateOfBirth: new Date(dateOfBirth),
    });
    const token = user.generateAuthToken();

    const sanitizedUser = {
      userName: user.userName,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      _id: user._id,
    };

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      maxAge: 3600000,
    });

    res.status(201).json({
      user: sanitizedUser,

      message: "User registered successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isValidPassword = await user.comparePassword(password);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }
    const token = user.generateAuthToken();

    const sanitizedUser = {
      userName: user.userName,
      email: user.email,
      dateOfBirth: user.dateOfBirth,
      _id: user._id,
    };

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
      maxAge: 3600000,
    });

    res.status(200).json({
      user: sanitizedUser,

      message: "User logged in successfully!",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports.logoutUser = async (req, res, next) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    });
    res.status(200).json({ message: "User logged out successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
