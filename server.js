const path = require("path");
const express = require("express");
const session = require("express-session");
const cookieparser = require("cookie-parser");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});
const sequelize = require("./config/connections");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// const helpers = require('./utils/helpers');
const routes = require("./controllers/");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));
app.use(cookieParser());
// const hbs = exphbs.create({});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(express.static('views/images'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// {force:false}: optional. if true, will drop and recreate db of all tables on startup. (Equiv to DROP TABLE IF EXISTS)
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT,  "0.0.0.0", () => console.log(`Now listening at ${PORT}`)); // PRODUCTION
  // app.listen(PORT, () => console.log("Now listening")); // DEVELOPMENT
});
