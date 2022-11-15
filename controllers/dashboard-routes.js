const router = require("express").Router();
const sequelize = require("sequelize");
const { User, Project } = require("../models");
const authLogin = require("../utils/auth");

//display all projects user has
router.get("/", authLogin, (req, res) => {
  User.findOne({
    // respond with all attributes of user except password
    attributes: {
      // remove password attribute from the response
      exclude: ["password"],
      // add attribute ('project_count') to the response that keeps track of a user's number of Projects
      include: [
        [
          sequelize.literal(
            "(SELECT COUNT(*) FROM project WHERE user.id = project.user_id)"
          ),
          "project_count",
        ],
      ],
    },
    // only respond with user who matched params id
    where: {
      id: req.session.user_id,
    },
    // also include a list of user projects
    include: [
      {
        model: Project
      },
    ],
  })
    // respond with user's data as specified above
    .then((projects) => {
      res.render('profile', { projects })
    })
    // display/respond with an error, if any
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/edit/:id", authLogin, (req, res) => {
  // get a project (based on project id)
  Project.findOne({
    where: {
      id: req.params.id,
    },
    // include the user's name
    include: [
      {
        model: User,
        attributes: ["name"],
      },
    ],
  })
    .then((projectData) => {
      if (!projectData) {
        res.status(404).end();
        return;
      }
      const project = projectData.get({ plain: true });
      // use the data from the response to render edit-project.handlebars
      res.render("edit-project", {
        project
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
