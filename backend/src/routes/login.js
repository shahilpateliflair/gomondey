const express = require("express");
const { addUser, getUser } = require("../controllers/login");

const router = express.Router();

router.post("/register", addUser);
router.post("/login", getUser);
module.exports = router;


