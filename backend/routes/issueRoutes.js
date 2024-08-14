const router = require('express').Router();
const issueController = require('../controllers/issueController');
const auth = require('../middleware/auth');
const roles = require('../middleware/role');

router.post('/report-issue',auth, roles('RESIDENT'), issueController.reportIssue);

module.exports = router;
