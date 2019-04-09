const express = require("express");
const postController = require("../../controllers/DesignersPost");
// const authenticate = require("../../middlewares/auth")
const router = express.Router();

router.get("/", postController.getAllPosts );
router.post("/",
// authenticate,
 postController.postNewWears );

module.exports = router;