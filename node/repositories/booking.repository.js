const db = require('../models/index');
import * as constants from '../util/constants';
const Booking = db.Booking;
const Room = db.Room;

exports.createRoomEntry = (req, res) => {
    const params = {
        roomName: "Single Room",
        totalRooms: 2
    }
    const room = new Room(params);
    room.save();
    res.status(200).send('Room entry created successfully');
}

exports.bookRoom = (data) => {
    return new Promise((resolve, reject) => {
        const booking = new Booking(data);
        booking.save(function (err, response) {
            if (err) {
                return reject(err);
            }
            return resolve(response);
        });
    });
}

exports.checkRoomAvailability = (data) => {
    return new Promise((resolve, reject) => {
        Room.findOne({ roomName: data.roomName }, function(error1, room) {
            Booking.find({
                $and: 
                [
                    { $or: [
                        { startDate: { $gte: data.startDate }},
                        { endDate: { $lte: data.startDate }},
                    ]},
                    // { $or: [
                    //     { startDate: { $gte: data.endDate }},
                    //     { endDate: { $lte: data.endDate }},
                    // ]},
                    { roomName: data.roomName },
                    { isCancelled: false },
                ]
            }, function(error2, bookings) {
                console.log('bookings: ', bookings);
                if (bookings && bookings.length < room.totalRooms) {
                    return resolve('Room is available');
                } else {
                    return reject('Room is not available');
                }
            });
        });
    });
}

exports.cancelBooking = (id) => {
    return new Promise((resolve, reject) => {
        Booking.findOneAndUpdate({ _id: id }, { isCancelled: true, updatedAt: new Date() }, { new: true }, function (err, response) {
            if (response && response.id) {
                return resolve(response);
            } else {
                return reject(constants.ERROR_MESSAGE.ID_NOT_EXISTS);
            }   
        });
    });
}

