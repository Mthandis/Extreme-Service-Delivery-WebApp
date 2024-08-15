const router = require('express').Router();
const registerController = require('../controllers/registerController');

router.post('/resident', registerController.registerResident);
router.post('/admin', registerController.registerAdmin);
router.post('/manager', registerController.registerManager);
router.post('/supervisor', registerController.registerSupervisor);

module.exports = router;