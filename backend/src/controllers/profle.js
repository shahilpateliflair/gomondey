const User = require("../models/login");

const getProfile = async (req, res) => {
  try {
    const userId = req.userId;
    console.log("User ID:", userId); 
    const userProfile = await User.findByPk(userId, {
        attributes: { exclude: ['password'] }
      });

    if (!userProfile) {
      return res.status(404).json({ message: "User profile not found" });
    }

    res.status(200).json(userProfile);
  } catch (error) {
    console.error("Error retrieving user profile:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



module.exports = { getProfile };