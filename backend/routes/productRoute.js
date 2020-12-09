import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const route = express.Router();

//@desc fetch all products
//@route /api/products
//@access public
route.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    res.json(products);
  })
);

//@desc fetch all products
//@route /api/products/:id
//@access public
route.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

export default route;
