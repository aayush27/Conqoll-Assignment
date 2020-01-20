import { bookRoom, cancelBooking, checkRoomAvailability } from '../services/booking.service';

exports.bookRoom = (req, res) => {
    const params = {
        guestName: req.body.guestName,
        idProof: req.body.idProof,
        idProofNumber: req.body.idProofNumber,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        roomName: req.body.roomName
    }
    bookRoom(params)
        .then((response) => {
            res.status(200).json(response);
        })
        .catch((error) => {
            res.status(400).json({ error: error});
        });
}

exports.checkRoomAvailability = (req, res) => {
    const params = {
        roomName: req.query.roomName,
        startDate: req.query.startDate,
        endDate: req.query.endDate
    }
    checkRoomAvailability(params)
        .then((response) => {
            res.status(200).json({ data: response });
        })
        .catch((error) => {
            console.log('checkRoomAvailability - error = ', error);
            res.status(400).json({ error: error});
        });
};

exports.cancelBooking = (req, res) => {
    const id = req.body.id;
    cancelBooking(id)
        .then((response) => {
            res.status(200).json({ data: response });
        })
        .catch((error) => {
            res.status(400).json({ error: error});
        });
}