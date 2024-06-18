const jwt = require("jsonwebtoken");
const  User  = require("../models/login");

const JWT_SECRET = "shahil_patel";

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized - Missing token" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    // console.log("Decoded payload:", decoded);
    const userId = decoded.userId;
    // console.log("Decoded User ID:", userId); 
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.userId = userId;
    req.user = user;

    next();
  } catch (error) {
    console.error("Token verification error:", error);

    return res.status(403).json({ message: "Forbidden - Invalid token" });
  }
};

module.exports = {
  authenticateToken,
  JWT_SECRET,
};
