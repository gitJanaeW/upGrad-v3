const router = require('express').Router();
const userRoutes = require('./user-routes');
const projectRoutes = require('./project-routes');
const commentRoutes = require('./comment-routes');


router.use('/users', userRoutes);
router.use('/projects', projectRoutes);

module.exports = router;