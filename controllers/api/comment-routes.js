// NOTE: Comment is beyond MVP, but I had extra time to make it

const router = require('express').Router();
const {User, Project, Comment} = require('../../models');

// find all comments
router.get('/', (req, res) => {
    Comment.findAll()
    .then(allComments => res.json(allComments))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// post a comment
router.post('/', (req, res) => {
    Comment.create({
        body: req.body.body,
        user_id: req.session.user_id,
        post_id: req.body.post_id
    })
    .then(newComment => res.json(newComment))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// delete a comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(deleteResults => {
        if (!deleteResults) {
            res.status(404).json({message: 'No comment found matching this id'});
            return;
        }
        res.json(deleteResults);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;