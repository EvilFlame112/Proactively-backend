const express = require('express');
const { authMiddleware, roleMiddleware } = require('../middleware/authMiddleware');
const { bookSession, getUserBookings } = require('../controllers/bookingController');

const router = express.Router();

/**
 * @swagger
 * /bookings:
 *   post:
 *     summary: Book a session with a speaker.
 *     security:
 *       - bearerAuth: []
 */
router.post('/', authMiddleware, roleMiddleware('user'), bookSession);

/**
 * @swagger
 * /bookings/user:
 *   get:
 *     summary: Get all bookings for a user.
 *     security:
 *       - bearerAuth: []
 */
router.get('/user', authMiddleware, roleMiddleware('user'), getUserBookings);

module.exports = router;
