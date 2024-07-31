const express = require("express");

const router = express.Router();

const userSignUpController = require("../controller/user/useSignUp");
const userSignInController = require("../controller/user/userSignIn");
const userDetailsController = require("../controller/user/userDetails");
const userLogoutController = require("../controller/user/userLogout");
const UploadProductController = require("../controller/product/uploadProduct");
const authToken = require("../middleware/authToken");

const allUsers = require("../controller/user/allusers");
const updateUser = require("../controller/user/updateUser");
const getProductDetails = require("../controller/product/getProdDetails");

const getProductController = require("../controller/product/getProduct");
const updateProductController = require("../controller/product/updateProduct");
const getCategoryProduct = require("../controller/product/getCategoryProductOne");
const getCategoryWiseProductc = require("../controller/product/getCategoryWiseProduct");
const addToCartController = require("../controller/user/addToCartController");
const countAddToCartProduct = require("../controller/user/countAddToCartProduct");
const addToCartViewProduct = require("../controller/user/addToCartViewProduct");
const updateAddToCartProduct = require("../controller/user/updateAddToCartProduct");
const deleteAddToCartProduct = require("../controller/user/deleteAddToCartProduct");
const filterProductController = require("../controller/product/filterProduct");
const searchProduct = require("../controller/product/searchProduct");
const phonePePayment = require("../controller/payment/phonePe");
const paymentStatus = require("../controller/payment/payment-status");

const contactusController = require("../controller/user/contactus");
const contactDetailDisplay = require("../controller/user/contactusDetail");

router.post("/signup", userSignUpController);
router.post("/signin", userSignInController);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogoutController);
router.post("/contact-us", contactusController);
router.get("/contact-details", contactDetailDisplay);

router.post('/order', phonePePayment)
router.post('/status', authToken, paymentStatus)

//admin panel

router.get("/all-user", authToken, allUsers);
router.post("/update-user", authToken, updateUser);

//  product
router.post("/upload-product", authToken, UploadProductController);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, updateProductController);
router.get("/get-categoryProduct", getCategoryProduct);
router.post("/category-product", getCategoryWiseProductc);
router.post("/product-details", getProductDetails);
router.post("/filter-product", filterProductController);
router.get("/search", searchProduct);

// use add to cart
router.post("/addtoCart", authToken, addToCartController);
router.get("/countAddToCartProduct", authToken, countAddToCartProduct);
router.get("/view-card-product", authToken, addToCartViewProduct);
router.post("/update-cart-product", authToken, updateAddToCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);

module.exports = router;
