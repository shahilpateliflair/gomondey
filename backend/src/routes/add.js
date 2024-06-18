// routes/add.js
const express = require('express');
const { authenticateToken } = require('../middleware/auth');
const upload = require('../routes/multer');
const { addContentData } = require('../controllers/add');
const AddData = require('../models/add');
const router = express.Router();

router.post('/', upload.single('image'), addContentData);

router.get('/subcategories/:category', async (req, res) => {
    const { category } = req.params;
    try {
        const subcategories = await AddData.findAll({
            where: { category },
            attributes: ['subcategory'],
            group: ['subcategory']
        });
        res.json(subcategories.map(item => item.subcategory));
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch subcategories' });
    }
});

// Route to get data by category and subcategory
router.get('/data/:category/:subcategory', async (req, res) => {
    const { category, subcategory } = req.params;
    try {
        const data = await AddData.findAll({
            where: {
                category,
                subcategory
            }
        });
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

module.exports = router;
