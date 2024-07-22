const express = require("express");
const router = express.Router();
const isloggedIn = require("../middlewares/isLoggIn");
const productModel = require("../models/product-model");
const usersModel = require("../models/users-model");

router.get("/", async (req, res) => {
  let error = req.flash("error");
  res.render("index", { error, loggedin: false });
});

router.get("/shop", isloggedIn, async (req, res) => {
  let Products = await productModel.find();
  let success = req.flash("success");
  res.render("shop", { Products, success, loggedin: true });
});

router.get("/cart", isloggedIn, async (req, res) => {
  let user = await usersModel
    .findOne({ email: req.user.email })
    .populate("cart");

    const bill = (Number(user.cart[0].price)+20 ) - Number(user.cart[0].discount)


  res.render("cart", { user , bill  });
});

router.get("/addtocard/:productid", isloggedIn, async (req, res) => {
  let user = await usersModel.findOne({ email: req.user.email });

  user.cart.push(req.params.productid);
  await user.save();
  req.flash("success", "Added to cart.");
  res.redirect("/shop");
});

module.exports = router;
