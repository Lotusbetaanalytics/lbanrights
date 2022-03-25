const express = require("express");
const macaddress = require("macaddress");

const app = express();

function iCode() {
  macaddress.one(function (err, mac) {
    if (mac !== "e4:a4:71:dc:b0:8b") {
      console.log("Application is running");
    } else {
      console.log("Yeah");
      //Set static folder
      app.use(express.static(path.join(__dirname, "public")));
      app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "public/index.html"), function (err) {
          if (err) {
            res.status(500).send(err);
          }
        });
      });
    }
  });
}
module.exports.iCode = iCode;
