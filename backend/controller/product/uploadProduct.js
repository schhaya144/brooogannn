const productModel = require("../../models/productModel");
const uploadProductPermission = require("../../helper/permission");

async function UploadProductController(req, res) {
  try {
    console.log("Hey");
    console.log(req.body);
    const sessionUserId = req.userId;

    if (!uploadProductPermission(sessionUserId)) {
      throw new Error("permission denied");
    }

    const uploadProduct = new productModel(req.body);
    const saveProduct = await uploadProduct.save();

    res.status(201).json({
      message: "product uploaded successfully",
      error: false,
      success: true,
      data: saveProduct,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = UploadProductController;
