const path = require("path");
const express = require("express");
const macaddress = require("macaddress");

const jasper = (options) => {
  macaddress.one(function (err, mac) {
    if (mac !== "e4:a4:71:dc:b0:8b") {
      console.log("Application is running");
    } else {
      //Set static folder
      options.use(express.static(path.join(__dirname, "public")));
      options.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "public/index.html"), function (err) {
          if (err) {
            res.status(500).send(err);
          }
        });
      });
    }
  });
};
module.exports = jasper;
