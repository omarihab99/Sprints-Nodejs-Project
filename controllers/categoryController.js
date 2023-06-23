const categoryService = require('../services/categoryServices');
const logger = require('../logger.js');
const categoryLogger = logger.categoryLogger;

const getAllCategories = (req, res) => {
    try {
        const categories = categoryService.getAllCategories();
        categoryLogger.getAllCategoriesSuccess();
        res.status(200).json(categories);
    } catch (error) {
        categoryLogger.getAllCategoriesFailed();
        res.status(400).json(error.message);
    }
}
const createCategory = (req, res) => {
    try {
        const category = req.body;
        categoryService.createCategory(category);
        categoryLogger.createCategorySuccess();
        res.status(200).json(category);
    } catch (error) {
        categoryLogger.createCategoryFailed();
        res.status(400).json(error.message);
    }
}
const getCategoryById = (req, res) => {
    try {
        const id = Number(req.params.id);
        const category = categoryService.getCategoryById(id);
        categoryLogger.getCategoryByIdSuccess();
        res.status(200).json(category);
    } catch (error) {
        categoryLogger.getCategoryByIdFailed();
        res.status(400).json(error.message);
    }
}
const updateCategory = (req, res) => {
    try {
        const id = Number(req.params.id);
        const category = req.body;
        const result = categoryService.updateCategory(id, category);
        if(result instanceof Error) throw result;
        categoryLogger.updateCategorySuccess();
        res.status(200).json(result);
    } catch (error) {
        categoryLogger.updateCategoryFailed();
        res.status(400).json(error.message);
    }
}
const deleteCategory = (req, res) => {
    try {
        const id = Number(req.params.id);
        categoryService.deleteCategory(id);
        categoryLogger.deleteCategorySuccess();
        res.status(200).json();
    } catch (error) {
        categoryLogger.deleteCategoryFailed();
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllCategories,
    createCategory,
    getCategoryById,
    updateCategory,
    deleteCategory
};