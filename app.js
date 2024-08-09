const express = require("express");
const { default: mongoose } = require("mongoose");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
 const passport = require("passport");

const { blogRouter } = require("./router/blog.route");
// const { healthRouter } = require("./routes/health");
const { authRouter } = require("./router/auth.routes");
const { MONGO_URI } = require("./env");
const { logger } = require("./middelware/logger");
const { ensureAuth } = require("./middelware/auth");

const PORT = 8080;
const app = express();

require("dotenv").config();

app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(logger);

// Passport.js
// const ppConfig = require('./config/passport')
// ppConfig(passport)
// ==
require("./config/passport")(passport);
app.use(
  session({
    secret: process.env["SESSION_SECRET"],
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_message = req.flash("success_msg");
  res.locals.error_message = req.flash("error_msg");
  res.locals.error = req.flash("error");
  res.locals.author = req.author || null;

  next();
});

//app.use("/health", healthRouter);
app.use("/blog", ensureAuth, blogRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  console.log(`server running on PORT: ${PORT}`);
  mongoose.connect(MONGO_URI);
});
