const { Schema, model } = require('mongoose');

const BookingSchema = new Schema({
    'name': String,
    'number': String,
    'town': String,
    'state': String,
    'zip': String,
    'startDate': String,
    'level': String,
    'duration': String,
    'vip': [{ type: String }]
})

const BookingModel = model('booking', BookingSchema, 'bookings');

module.exports = BookingModel;

