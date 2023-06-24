const express = require("express");
const {verifyToken} = require("../services/auth");
const { categoryValidation, putCategoryValidation } = require("../services/validation");
const {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");
const router = express.Router();
router.get("/", getAllCategories);
router.post("/",verifyToken, categoryValidation, createCategory);
router
  .route("/:id")    
  .get(getCategoryById)
  .put(verifyToken, putCategoryValidation, updateCategory)
  .delete(verifyToken, deleteCategory);

module.exports = router;
