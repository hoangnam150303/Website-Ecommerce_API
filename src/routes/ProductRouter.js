const express = require("express");
const router = express.Router();
const productController = require("../controller/ProductController");
const { autMiddleware } = require("../middleware/authMiddleWare");

router.post("/createProduct", productController.createProduct);
router.put(
  "/updateProduct/:id",
  autMiddleware,
  productController.updateProduct
);
router.get("/detailsProduct/:id", productController.getDetailsProduct);
router.delete(
  "/deleteProduct/:id",
  autMiddleware,
  productController.deleteProduct
);
router.get("/allProducts", productController.getAllProducts);
module.exports = router;
