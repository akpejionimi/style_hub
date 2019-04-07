const express = require("express");
const router = express.Router();
const {getAllPosts, postNewWears}= require("../controller/DesignerPost");

router.get("/", getAllPosts);
router.post("/", postNewWears);

module.exports = router;