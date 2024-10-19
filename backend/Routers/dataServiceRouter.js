const dataServiceController = require('../Controllers/dataServiceController');

const express = require('express');
const router = express.Router();

router.post('/add',dataServiceController.addData);
router.patch('/update/:serviceTitle?',dataServiceController.updateData);
router.delete('/delete/:serviceTitle?',dataServiceController.deleteData);
router.get('/data',dataServiceController.getData);

module.exports = router;