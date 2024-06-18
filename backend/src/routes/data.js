const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middleware/auth');
const upload = require("../routes/multer");
const { addData } = require('../controllers/data');
const Data = require("../models/data");
router.post('/addMovie', authenticateToken, upload.single('image'), addData);
router.get('/movies', async (req, res) => {
    try {
        const movies = await Data.findAll();
        res.json(movies);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

router.get('/counseling', async (req, res) => {
    try {
      const movies = await Data.findAll({
        where: { category: 'Counseling' },
     
      });
      res.status(200).json(movies);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });
  
  router.get('/animation', async (req, res) => {
    try {
      const movies = await Data.findAll({
        where: { category: 'Animation' }, 
       
      });
      res.status(200).json(movies);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });
  

  router.get('/article', async (req, res) => {
    try {
      const movies = await Data.findAll({
        where: { category: 'Article' },
      });
      res.status(200).json(movies);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server error');
    }
  });
  
module.exports = router;
