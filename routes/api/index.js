const router = require('express').Router();
const courseRoutes = require('./userRoutes');

router.use('/users', userRoutes);

module.exports = router;
