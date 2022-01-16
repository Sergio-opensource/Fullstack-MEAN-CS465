var fs = require("fs");
var tripsData = JSON.parse(fs.readFileSync("./data/trips.json", "utf8"));

/* GET travel view */
const travel = (req, res) => {
  res.render("travel", { title: "Travlr Getaways", tripsData });
};

module.exports = {
  travel,
};
