const dataProjectController = require('../Controllers/dataProjectController');
const auth = require('../Utiliy/auth');
const upload = require('../Utiliy/multer');
const express = require('express');
const router = express.Router();

router.post('/add', upload.single('file'), dataProjectController.addData);
router.patch('/update/:projectTitle?',auth.isAdmin,dataProjectController.updateData);  
router.delete('/delete/:projectTitle?',auth.isAdmin,dataProjectController.deleteData);
router.get('/data',dataProjectController.getData);




module.exports = router;