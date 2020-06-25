const express = require("express");
const router = express.Router();

router.get("/", function (req, res, next) {
  res.render("../views", { title: "Product list" });
});

module.exports = router;
