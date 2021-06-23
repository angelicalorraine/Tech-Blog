const router = require('express').Router();
const { Blog } = require('../../models');
//const withAuth = require('../../utils/auth');


// GET all
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            order: [['blog_title', 'ASC']],
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));
        res.render('homePage', { blogs });

    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single
router.get('/:id', async (req, res) => {


});

// DELETE a 
router.delete('/:id', async (req, res) => {

});

module.exports = router;
