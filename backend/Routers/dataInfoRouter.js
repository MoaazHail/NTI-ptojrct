const dataInfoController = require('../Controllers/dataInfoController');

const express = require('express');
const router = express.Router();

router.post('/add',dataInfoController.addData);
router.patch('/update',dataInfoController.updateData);
router.get('/data',dataInfoController.getData);




module.exports = router;