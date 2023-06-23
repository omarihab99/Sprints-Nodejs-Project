const express = require("express");
const {productValidation, putProductValidation} = require("../services/validation");
const {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct,
} = require("../controllers/productController");
const router = express.Router();
router.get("/", getAllProducts);
router.post("/", productValidation, createProduct);
router
    .route("/:id")
    .get(getProductById)
    .put(putProductValidation, updateProduct)
    .delete(deleteProduct);

module.exports = router;