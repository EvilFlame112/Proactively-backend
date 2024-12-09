const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ error: 'Invalid token.' });
    }
};

const roleMiddleware = (role) => (req, res, next) => {
    if (req.user.role !== role) {
        return res.status(403).json({ error: `Access denied for ${req.user.role}` });
    }
    next();
};

module.exports = { authMiddleware, roleMiddleware };
