const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    roomName: { type: String },
    totalRooms: { type: Number },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now },
    isDeleted: { type: Boolean }
});

module.exports = mongoose.model('Room', schema);