const Speaker = require('../models/Speaker');

const addSpeakerProfile = async (req, res) => {
    try {
        const { expertise, pricePerSession } = req.body;
        const speaker = await Speaker.create({ ...req.body });
        res.status(201).json({ message: 'Speaker profile created', speaker });
    } catch (error) {
        res.status(500).json({ error: 'Error creating speaker profile' });
    }
};

const getSpeakers = async (req, res) => {
    try {
        const speakers = await Speaker.findAll();
        res.status(200).json({ speakers });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching speaker profiles' });
    }
};

module.exports = { addSpeakerProfile, getSpeakers };
