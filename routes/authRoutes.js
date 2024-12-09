const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Signup a new user or speaker.
 */
router.post('/signup', signup);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user or speaker.
 */
router.post('/login', login);

module.exports = router;
