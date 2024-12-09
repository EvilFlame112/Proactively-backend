const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ firstName, lastName, email, password: hashedPassword, role });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ error: 'Error signing up user' });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRY,
        });
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in user' });
    }
};

module.exports = { signup, login };