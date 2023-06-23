const productService = require('../services/productServices');
const logger = require('../logger');
const productLogger = logger.productLogger;

const getAllProducts = (req, res) => {
    try {
        const products = productService.getAllProducts();
        productLogger.getAllProductsSuccess();
        res.status(200).json(products);
    } catch (error) {
        productLogger.getAllProductsFailed();
        res.status(400).json(error.message);
    }
}
const createProduct = (req, res) => {
    try {
        const product = req.body;
        const result = productService.createProduct(product);
        if(result instanceof Error) throw result;
        productLogger.createProductSuccess();
        res.status(200).json(product);
    } catch (error) {
        productLogger.createProductFailed();
        res.status(400).json(error.message);
    }
}
const getProductById = (req, res) => {
    try {
        const id = Number(req.params.id);
        const product = productService.getProductById(id);
        productLogger.getProductByIdSuccess();
        res.status(200).json(product);
    } catch (error) {
        productLogger.getProductByIdFailed();
        res.status(400).json(error.message);
    }
}
const updateProduct = (req, res) => {
    try {
        const id = Number(req.params.id);
        const product = req.body;
        const result = productService.updateProduct(id, product);
        if(result instanceof Error) throw result;
        productLogger.updateProductSuccess();
        res.status(200).json(result);
    } catch (error) {
        productLogger.updateProductFailed();
        res.status(400).json(error.message);
    }
}
const deleteProduct = (req, res) => {
    try {
        const id = Number(req.params.id);
        productService.deleteProduct(id);
        productLogger.deleteProductSuccess();
        res.status(200).json();
    } catch (error) {
        productLogger.deleteProductFailed();
        res.status(400).json(error.message);
    }
}

module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
}