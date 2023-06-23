const productData = require("../models/productModel");
const categoryData = require("../models/categoryModel");
const logger = require("../logger");
const products = require("../models/productModel");
const productLogger = logger.productLogger;
const getAllProducts = () => {
    try {
        productLogger.getAllProductsSuccess();
        console.log(productData);
        return productData;
    } catch (error) {
        productLogger.getAllProductsFailed();
    }
}
const createProduct = (product) => {
    try {
        const index = categoryData.findIndex((category) => category.id === product.category_id);
        if(index === -1) return new Error("Category not found");
        console.log(product);
        productData.push(product);
        console.log(productData);
        productLogger.createProductSuccess();
        return product;
    } catch (error) {
        productLogger.createProductFailed();
    }
}
const getProductById = (id) => {
    try {
        productLogger.getProductByIdSuccess();
        console.log(productData);
        return productData.find((product) => product.id === id);
    } catch (error) {
        productLogger.getProductByIdFailed();
    }
}
const updateProduct = (id, product) => {
    try {
        const index = productData.findIndex((product) => product.id === id);
        if (index !== -1) {
            productData[index] = product;
            productLogger.updateProductSuccess();
        }
        return index !== -1 ? productData[index] : new Error("Product not found");
    } catch (error) {
        productLogger.updateProductFailed();
    }
}
const deleteProduct = (id) => {
    try {
        const index = productData.findIndex((product) => product.id === id);
        productData.splice(index, 1);
        productLogger.deleteProductSuccess();
        console.log(productData);
    } catch (error) {
        productLogger.deleteProductFailed();
    }
}
module.exports = {
    getAllProducts,
    createProduct,
    getProductById,
    updateProduct,
    deleteProduct
}