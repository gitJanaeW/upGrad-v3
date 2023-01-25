const router = require("express").Router();
const sequelize = require("../../config/connections"); // in case of a sequelize.literal
const { User, Project } = require("../../models");
const authLogin = require("../../utils/auth");
const { body, validationResult } = require("express-validator");

// find all users
router.get("/", authLogin, (req, res) => {
  User.findAll({
    raw: true,
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
    // also include a list of user projects
    include: [
      {
        model: Project,
        attributes: [
          'id',
          'user_id',
          'project_name',
          'abstract',
          'collab_status',
          'project_url',
          'subject',
          'ongoing_status'
        ]
      },
    ],
  })
    // respond with all users
    .then((allUsers) => res.json(allUsers))
    // display/respond with an error, if any
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// find a single user
router.get("/:id", authLogin, (req, res) => {
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
      id: 1,
    },
    // also include a list of user projects
    include: [
      {
        model: Project,
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

// create a user (sign up)
router.post(
  "/signup",
  body("email").isEmail().withMessage("email is invalid"),
  body("password").isLength({ min: 5 }).withMessage("password too short"),
  body("name").notEmpty().withMessage("please provide a name"),
  body("institution")
    .notEmpty()
    .withMessage("Please provide a valid institution"),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({ errors: errors.errors, data: undefined, status: 400 });
    }

    // expected req.body:
    // {name: 'Example Name', email: 'exname@gmail.com', password: 'exPassword', institution: 'Ex University'}
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      institution: req.body.institution,
    })
      .then((dbUserData) => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.name = dbUserData.name;
          req.session.loggedIn = true;
          res.cookie('user_id', req.session.user_id, {
            maxAge: 1800000,
            httpOnly: true
          });
          res.json(req.session);
        });
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  }
);

// enter your credentials (login)
router.post("/login", (req, res) => {
  // expected req.body:
  // {email: 'exname@gmail.com', password: 'exPassword'}
  User.findOne({
    // find a matching email in MySQL db
    where: {
      email: req.body.email,
    },
  })
    .then((dbUserData) => {
      // if no db email matches email in the request, return status 404
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this email" });
        // could add frontend or utils function to notify user on webpage that their "email or password is incorrect"
        return;
      }
      // if password is invalid, return status 400
      const validPassword = dbUserData.checkPassword(req.body.password);
      if (!validPassword) {
        res.status(400).json({ message: "Password is incorrect" });
        return;
      }
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.name = dbUserData.name;
        req.session.loggedIn = true;
        res.cookie('user_id', req.session.user_id, {
          maxAge: 1800000,
          httpOnly: true
        });
        res.json(req.session);
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// logout
router.post("/logout", (req, res) => {
  if (!req.session.loggedIn) {
    res.json(req.session);
    return;
  }
  req.session.destroy(() => {
    res.clearCookie("user_id");
    res.json(req.session);
  });
});

// change name/password (past MVP)
router.put("/:id", (req, res) => {
  // expected req.body:
  // {name: 'Example Name', password: 'exPassword'}
  User.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((changedUser) => {
      // if no db user_id matches the params id in the request, return status 404
      if (!changedUser) {
        res.status(404).json({ message: "No user matching this id found" });
        return;
      }
      res.json(changedUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete account (past MVP?)
router.delete("/:id", (req, res) => {
  User.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((deleteResults) => {
      if (!deleteResults) {
        res.status(404).json({ message: "No user found matching this id." });
        return;
      }
      res.json(deleteResults);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;