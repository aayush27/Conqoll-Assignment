const db = require('../models/index');
import * as constants from '../util/constants';
const Booking = db.Booking;
const Room = db.Room;

exports.createRoomEntry = (req, res) => {
    const params = {
        roomName: "Single Room",
        totalRooms: 10
    }
    const room = new Room(params);
    room.save();
    res.status(200).send(constants.SUCCESS_MESSAGE.ROOM_CREATED_SUCCESSFULLY);
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
            if (error1) {
                return reject(error1);
            }
            Booking.find({
                $or: 
                [
                    { $and: [
                        { startDate: { $lte: data.startDate }},
                        { endDate: { $gte: data.endDate }},
                    ]},
                    { $and: [
                        { startDate: { $lte: data.startDate }},
                        { endDate: { $gte: data.startDate }},
                        { endDate: { $lte: data.endDate }}
                    ]},
                    { $and: [
                        { startDate: { $gte: data.startDate }},
                        { startDate: { $lte: data.endDate }},
                        { endDate: { $gte: data.endDate }}
                    ]},
                    { $and: [
                        { startDate: { $gte: data.startDate }},
                        { startDate: { $lte: data.endDate }},
                        { endDate: { $lte: data.endDate }}
                    ]}
                ],
                roomName: data.roomName,
                isCancelled: false 
            }, function(error2, bookings) {
                if (error2) {
                    return reject(error2);
                }
                if (bookings && bookings.length < room.totalRooms) {
                    return resolve(constants.SUCCESS_MESSAGE.ROOM_IS_AVAILABLE);
                } else {
                    return reject(constants.ERROR_MESSAGE.ROOM_NOT_AVAILABLE);
                }
            });
        });
    });
}

exports.cancelBooking = (id) => {
    return new Promise((resolve, reject) => {
        Booking.findOneAndUpdate({ _id: id }, { isCancelled: true, updatedAt: new Date() }, { new: true }, function (err, response) {
            if (response && response.id) {
                return resolve(constants.SUCCESS_MESSAGE.BOOKING_CANCELLED);
            } else {
                return reject(constants.ERROR_MESSAGE.ID_NOT_EXISTS);
            }   
        });
    });
}

