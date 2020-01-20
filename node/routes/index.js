import express from 'express';
import auth from './auth.route';
import { checkRoomAvailability, bookRoom, cancelBooking } from '../controllers/booking.controller';
import { createRoomEntry } from '../repositories/booking.repository';
import { tokenValidator } from '../middleware/auth.middleware';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'Hello world!' });
});

router.use('/auth', auth);

router.get('/checkRoomAvailability', checkRoomAvailability);
router.post('/bookRoom', bookRoom);
router.put('/cancelBooking', cancelBooking);

// One time API to create a entry for a room
router.post('/createRoomEntry', createRoomEntry);

module.exports = router;
