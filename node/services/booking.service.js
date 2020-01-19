import { bookRoom, cancelBooking, checkRoomAvailability } from '../repositories/booking.repository';

exports.bookRoom = (data) => {
    return new Promise((resolve, reject)=> {
        checkRoomAvailability(data)
            .then((response) => {
                console.log('response service -  -  - : ', response);
                return bookRoom(data)
            })
            .then((booking) => {
                return resolve(booking);
            })
            .catch((error) => {
                return reject(error);
            })
    });
}

exports.checkRoomAvailability = (data) => {
    return new Promise((resolve, reject)=> {
        checkRoomAvailability(data)
            .then((response) => {
                return resolve(response);
            })
            .catch((error) => {
                return reject(error);
            })
    });
}

exports.cancelBooking = (data) => {
    return new Promise((resolve, reject)=> {
        cancelBooking(data)
            .then((response) => {
                return resolve(response);
            })
            .catch((error) => {
                return reject(error);
            })
    });
}