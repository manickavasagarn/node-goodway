var express = require('express');
var router = express.Router();
var test = require("../modules/testmodule");
router.get("/",test.gettest);
router.post("/create",test.posttest);
router.patch("/update/:id",test.updatetest);
router.delete("/delete/:id",test.deletetest);
module.exports = router;