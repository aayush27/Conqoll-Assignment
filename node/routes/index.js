import express from 'express';
import auth from './auth.route';
import { checkRoomAvailability, bookRoom, cancelBooking } from '../controllers/booking.controller';
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

module.exports = router;
