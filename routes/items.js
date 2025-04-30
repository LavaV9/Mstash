const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemController');
const { upload } = require('../middleware/fileUpload');
const {isGuest, isLoggedIn, isAuthor} = require('../middleware/auth');

router.get('/', itemsController.index);
router.get('/new', itemsController.new);
router.post('/', upload.single('image'), itemsController.create);
router.get('/:id', itemsController.show);
router.get('/:id/edit', isLoggedIn, isAuthor, itemsController.edit);
router.put('/:id', isLoggedIn, isAuthor, upload.single('image'), itemsController.update);
router.delete('/:id', isLoggedIn, isAuthor, itemsController.delete);



module.exports = router;
