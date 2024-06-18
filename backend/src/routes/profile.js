const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');

const { getProfile,updateUser} = require('../controllers/profle');

router.get('/getprofile',authenticateToken, getProfile);

module.exports = router;