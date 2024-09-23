const express=require("express");
const router=express.Router();
const authenticate = require("../middleware/authenticate.js");
const productController=require("../controller/product.controller.js");

router.get('/',authenticate,  productController.getAllProducts);
router.get('/id/:id',authenticate,  productController.findProductById);
// router.get('/search',authenticate,  productController.searchProduct);
// router.get('/search',authenticate,  productController.searchProduct);


module.exports = router;