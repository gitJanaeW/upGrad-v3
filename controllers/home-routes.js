const router = require("express").Router();
const sequelize = require("sequelize");
const { User, Project } = require("../models");
const authLogin = require("../utils/auth");

// homepage (prompt login & sign up)
router.get("/", (req, res) => {
  res.render("homepage");
});

// display a specific project on its own page
router.get("project/:id", authLogin, (req, res) => {
  Project.findOne({
    include: [
      {
        model: User,
        attributes: ["name", "institution"],
      },
    ],
  })
    .then((projectData) => {
      if (!projectData) {
        res.status(404).json({ message: "No project found with this id" });
        return;
      }
      // this formats the data Sequelize gives us in a readable format
      const project = projectData.get({ plain: true });
      // use the data from the response to render project-view.handlebars
      res.render("project-view", { project });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// display the login page
router.get("/login", (req, res) => {
  // if user is already logged in, redirect them to the homepage
  // if (req.session.loggedIn) {
  //     res.redirect('/');
  //     return;
  // }
  // render login.handlebars
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;