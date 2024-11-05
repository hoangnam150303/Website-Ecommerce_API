const Product = require("../models/ProductModel");
const productService = require("../services/ProductService");

const createProduct = async (req, res) => {
  try {
    const { name, image, type, price, counInStock, ratting, description } =
      req.body;
    console.log("product", req.body);
    if (
      !name ||
      !image ||
      !type ||
      !price ||
      !counInStock ||
      !ratting ||
      !description
    ) {
      return res.status(200).json({
        status: "ERR",
        message: "The input is required",
      });
    }
    const response = await productService.createProduct(req.body);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    if (!productId) {
      return res.status(200).json({
        status: "ERROR",
        message: "The product is not requried",
      });
    }
    const respone = await productService.updateProduct(productId, data);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getDetailsProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(200).json({
        status: "ERROR",
        message: "The product is not requried",
      });
    }
    const respone = await productService.getDetailsProduct(productId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(200).json({
        status: "ERROR",
        message: "The product is not requried",
      });
    }
    const respone = await productService.deleteProduct(productId);
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
    const respone = await productService.getAllProducts(
      Number(limit) || 10,
      Number(page) || 0,
      sort,
      filter
    );
    return res.status(200).json(respone);
  } catch (e) {
    return res.status(404).json({
      message: e,
    });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  getDetailsProduct,
  deleteProduct,
  getAllProducts,
};
