var fs = require("fs");
var roomsData = JSON.parse(fs.readFileSync("./data/rooms.json", "utf8"));

/* GET room page */
const rooms = (req, res) => {
  res.render("rooms", { title: "Rooms", roomsData });
};

module.exports = {
  rooms,
};
