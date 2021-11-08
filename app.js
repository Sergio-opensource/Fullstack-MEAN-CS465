var hbs = require("hbs");

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./app_server/routes/index");
var usersRouter = require("./app_server/routes/users");
var travelRouter = require("./app_server/routes/travel");
var roomsRouter = require("./app_server/routes/rooms");

const { hasSubscribers } = require("diagnostics_channel");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "app_server", "views"));

// // register handlebars partials (https://ww.npmjs.com/package/hbs)
hbs.registerPartials(path.join(__dirname, "app_server", "views/partials"));

app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// uses public folder to render pages
// app.use(express.static(path.join(__dirname, "public")));
// set up images and css data locations
app.use(express.static(path.join(__dirname, "public/images")));
app.use(express.static(path.join(__dirname, "public/css")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/travel", travelRouter);
app.use("/rooms", roomsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
