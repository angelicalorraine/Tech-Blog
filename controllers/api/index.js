const router = require('express').Router();
const PostRoute = require('./PostRoute');
const UserRoute = require('./UserRoute');
const CommentRoute = require('./CommentRoute');

router.use('/posts', PostRoute);
router.use('/users', UserRoute);
router.use('/comments', CommentRoute);

module.exports = router;
