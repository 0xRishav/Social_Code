const express = require('express');
const router = express.Router();



const homeController = require('../controllers/home_controller');




// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


console.log('rounter loaded');





router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/features',require('./features'));
module.exports = router;