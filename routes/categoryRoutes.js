const express = require("express");
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
router.post("/", categoryValidation, createCategory);
router
  .route("/:id")    
  .get(getCategoryById)
  .put(putCategoryValidation, updateCategory)
  .delete(deleteCategory);

module.exports = router;
