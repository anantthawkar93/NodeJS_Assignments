const express = require("express");
const router = express.Router()
const newforumcontroller = require("../controllers/newForumController")

router.get('/forum', newforumcontroller.getForums);
router.post('/forum', newforumcontroller.createForum);
router.get('/forum/:id', newforumcontroller.getSingleForum);
router.put('/forum/edit/:id', newforumcontroller.updateForum);
router.delete('/forum/remove/:id', newforumcontroller.deleteForum);

module.exports = router;