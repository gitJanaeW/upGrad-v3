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

// comment on a project
router.post('/', (req, res) => {
    console.log(req);
    Comment.create({
        body: req.body.body,
        project_id: req.body.project_id,
        user_id: 1 // change back to req.session.user_id later
        
    })
    .then(newComment => {
        res.json(newComment) 
        console.log("SUCCESS ADDED NEW COMMENT", newComment)})
    .catch(err => {
        console.log("Create Comment ERR", err);
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