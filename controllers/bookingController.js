const Booking = require('../models/Booking');
const Speaker = require('../models/Speaker');

const bookSession = async (req, res) => {
    try {
        const { speakerId, date, timeSlot } = req.body;
        const existingBooking = await Booking.findOne({ where: { speakerId, date, timeSlot } });

        if (existingBooking) {
            return res.status(400).json({ error: 'Time slot already booked' });
        }

        const booking = await Booking.create({
            userId: req.user.id,
            speakerId,
            date,
            timeSlot,
        });

        res.status(201).json({ message: 'Session booked successfully', booking });
    } catch (error) {
        res.status(500).json({ error: 'Error booking session' });
    }
};

const getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll({ where: { userId: req.user.id } });
        res.status(200).json({ bookings });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching bookings' });
    }
};

module.exports = { bookSession, getUserBookings };
