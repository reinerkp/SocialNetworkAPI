const router = require('express').Router();
const thoughtsRoutes = require('./thoughtsRoutes');
const userRoutes = require('./UserRoutes');

router.use('/thoughts', thoughtsRoutes);
router.use('/users', userRoutes);

module.exports = router;
