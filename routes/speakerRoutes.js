const express = require('express');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');
const { addSpeakerProfile, getSpeakers } = require('../controllers/speakerController');

const router = express.Router();

/**
 * @swagger
 * /speakers:
 *   get:
 *     summary: Get all speakers.
 */
router.get('/', authMiddleware, getSpeakers);

/**
 * @swagger
 * /speakers/profile:
 *   post:
 *     summary: Add or update a speaker profile.
 *     security:
 *       - bearerAuth: []
 */
router.post('/profile', authMiddleware, roleMiddleware('speaker'), addSpeakerProfile);

module.exports = router;
