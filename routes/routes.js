const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers')

router.get('/',controller.defaultController);
router.get('/newadd',controller.newaddController);
router.get('/transaction/:id/edit', controller.editTransactionController);
router.post('/:id?', controller.updateTransactionController);
router.post('/transaction/:id/delete', controller.deleteTransactionController);

module.exports = router;
