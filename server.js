const express = require("express");
const routes = require("./routes");
const db = require("./models");
const passport = require("./config/passport");
<<<<<<< HEAD

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
=======
>>>>>>> jc

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(passport.initialize());
app.use(passport.session());
app.use(routes);


db.sequelize.sync({ force: false }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
