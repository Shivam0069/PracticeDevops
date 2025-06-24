const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
module.exports.authUser = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized", error: "Token not found" });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
      const user = await User.findById(decoded._id);
      if (!user) {
        return res
          .status(401)
          .json({ message: "Unauthorized", error: "User not found" });
      }
      req.user = user;
      return next();
    } catch (jwtError) {
      return res
        .status(401)
        .json({ message: "Unauthorized", error: "Invalid token" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};
