const router = require("express").Router();
const sequelize = require("sequelize");
const { User, Project } = require("../models");
const authLogin = require("../utils/auth");
const getWhereObj = require("../utils/projectQueryObj");

// homepage (prompt login & sign up)
router.get("/", authLogin, (req, res) => {
  Project.findAll({
    order: [["id", "ASC"]],
    include: [
      {
        model: User,
        attributes: ["name", "institution", "email"],
      },
    ],
  })
    .then((allProjectsData) => {
      // this formats the data Sequelize gives us in a readable format
      const allProjects = allProjectsData.map((project) =>
        project.get({ plain: true })
      );

      res.render("home", { allProjects });
    })
    .catch((err) => {
      console.log("ENTERING ERROR");
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/search", authLogin, (req, res) => {
  console.log("ENTERING ROUTE");
  const where = getWhereObj(req.query);
  Project.findAll({
    where,
    order: [["id", "ASC"]],
    include: [
      {
        model: User,
        attributes: ["name", "institution", "email"],
      },
    ],
  })
    .then((allProjectsData) => {
      // this formats the data Sequelize gives us in a readable format
      const allProjects = allProjectsData.map((project) =>
        project.get({ plain: true })
      );

      res.render("home", { allProjects });
    })
    .catch((err) => {
      console.log("ENTERING ERROR");
      console.log(err);
      res.status(500).json(err);
    });
});

// display a specific project on its own page
router.get("project/:id", authLogin, (req, res) => {
  Project.findOne({
    where: {
      id: req.params.id
    },
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
      const project = projectData.get({plain: true});
      // use the data from the response to render project.handlebars
      res.render("project", { project });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// display the login page
router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

module.exports = router;