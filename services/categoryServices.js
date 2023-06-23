const categoryData = require("../models/categoryModel");
const logger = require("../logger");
const categoryLogger = logger.categoryLogger;
const getAllCategories = () => {
  try {
    categoryLogger.getAllCategoriesSuccess();
    console.log(categoryData);
    return categoryData;
  } catch (error) {
    categoryLogger.getAllCategoriesFailed();
  }
};
const createCategory = (category) => {
  try {
    categoryData.push(category);
    console.log(categoryData);
    categoryLogger.createCategorySuccess();
  } catch (error) {
    categoryLogger.createCategoryFailed();
  }
};

const getCategoryById = (id) => {
  try {
    categoryLogger.getCategoryByIdSuccess();
    return categoryData.find((category) => category.id === id);
  } catch (error) {
    categoryLogger.getCategoryByIdFailed();
  }
};

const updateCategory = (id, category) => {
  try {
    const index = categoryData.findIndex((category) => category.id === id);
    if (index !== -1) {
      categoryData[index] = category;
      categoryLogger.updateCategorySuccess();
    }
    return index !== -1 ? categoryData[index] : new Error("Category not found");
  } catch (error) {
    categoryLogger.updateCategoryFailed();
  }
};

const deleteCategory = (id) => {
  try {
    const index = categoryData.findIndex((category) => category.id === id);
    categoryData.splice(index, 1);
    categoryLogger.deleteCategorySuccess();
    console.log(categoryData);
  } catch (error) {
    categoryLogger.deleteCategoryFailed();
  }
};
module.exports = {
  getAllCategories,
  createCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
