const express = require("express");
const router = express.Router()
const forumcontroller = require("../controllers/forumController")

router.get('/forum', forumcontroller.getForums);
router.post('/forum', forumcontroller.createForum);
router.get('/forum/:id', forumcontroller.getSingleForum);
router.put('/forum/edit/:id', forumcontroller.updateForum);
router.delete('/forum/remove/:id', forumcontroller.deleteForum);

module.exports = router;