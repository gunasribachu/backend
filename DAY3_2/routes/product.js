const express = require("express");
const router = express.Router();
const c=require("../controllers/productController");

router.get("",c.getProducts);

router.get("/:id", c.getProduct);

router.post("/", c.postProducts);

router.put("/:id", c.putProducts);

router.delete("/:id", c.deleteProduct);

module.exports = router;