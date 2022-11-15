const router = require('express').Router();
const apiRoutes = require('./api');

const homeRoutes = require('./home-routes');
const dashRoutes = require('./dashboard-routes')

router.use('/dashboard', dashRoutes);

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
