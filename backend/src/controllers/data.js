const Data = require('../models/data');

const addData = async (req, res) => {
    try {
        
        const { description, category, language, duration, } = req.body;
        
    
        const image = req.file ? req.file.path : '';

       
        const newData = await Data.create({ image, description, category, language, duration });

        res.status(201).send('Data added successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

module.exports = {
    addData
};
