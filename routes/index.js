const express = require("express");
const router = express.Router();
const isloggedIn = require("../middlewares/isLoggIn");

router.get("/", async (req, res) => {
  let error = req.flash("error");
  res.render("index", { error });
});

router.get("/shop", isloggedIn, (req, res) => {
  res.render("shop");
});




module.exports = router;
