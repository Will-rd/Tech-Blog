const router = require('express').Router();
const api = require('./api');
const homepage = require('./homepage');

router.use('/api', api);

// localhost:3001/
router.use('/', homepage);




module.exports = router;