const express = require("express");
const router = express.Router();
const isloggedIn = require("../middlewares/isLoggIn");
const productModel = require("../models/product-model");

router.get("/", async (req, res) => {
  let error = req.flash("error");
  res.render("index", { error });
});

router.get("/shop", isloggedIn, async (req, res) => {
   let Products = await productModel.find();

  res.render("shop", { Products });
});




module.exports = router;
