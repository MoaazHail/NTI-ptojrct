const dataCVController = require('../Controllers/dataCVController');

const express = require('express');
const router = express.Router();

router.post('/add',dataCVController.addData);
router.patch('/update/:projectTitle?',dataCVController.updateData);
router.get('/data',dataCVController.getData);




module.exports = router;