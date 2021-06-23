const router = require('express').Router();
const { Blog, User } = require('../models/Blog');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  // We find all dishes in the db and set the data equal to dishData
  const blogData = await Blog.findAll().catch((err) => {
    res.json(err);
  });
  // We use map() to iterate over blogData and then add .get({ plain: true }) each object to serialize it. 
  const blogs = blogData.map((blog) => blog.get({ plain: true }));
  // We render the template, 'all', passing in dishes, a new array of serialized objects.
  res.render('homePage', { blogs });
});


router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});



module.exports = router;
