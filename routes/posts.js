const express = require("express");
const router = express.Router();
const PostControllers = require("../controllers/post.js");

router.get("/", PostControllers.getPosts);
router.post("/", PostControllers.createPosts);
router.patch("/:id", PostControllers.patchPost);
router.delete("/:id", PostControllers.deletePost);
router.delete("/", PostControllers.deleteAllPosts);

module.exports = router;
