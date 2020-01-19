const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    guestName: { type: String },
    idProof: { type: String },
    idProofNumber: { type: String },
    startDate: { type: Date },
    endDate: { type: Date },
    roomName: { type: String },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    isCancelled: { type: Boolean, default: false }
});

module.exports = mongoose.model('Booking', schema);