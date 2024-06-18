const Data = require('../models/add');

const addContentData = async (req, res) => {
    try {
        const { content, definition, category, subcategory, category_type, duration } = req.body;

        const newData = await Data.create({
            content,
            definition,
            category,
            subcategory,
            category_type,
            duration
        });

        res.status(201).send('Data added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error", message: error.message });
    }
};

module.exports = {
  addContentData
};
