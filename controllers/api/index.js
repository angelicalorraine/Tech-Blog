const router = require('express').Router();
const BlogRoute = require('./BlogRoute');
const UserRoute = require('./UserRoute');
const api3 = require('./api3');

router.use('/blogs', BlogRoute);
router.use('/users', UserRoute);
router.use('/', api3);

module.exports = router;
