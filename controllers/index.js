const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashRoutes = require('./dashboard-routes');
const projectRoutes = require('./project-routes');

router.use('/dashboard', dashRoutes);
router.use('/', homeRoutes);
router.use('/projects', projectRoutes);
router.use('/api', apiRoutes);

module.exports = router;
