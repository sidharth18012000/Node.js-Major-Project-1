const express = require('express');

const router = express.Router();
const usersController = require('../controllers/users_controller');

// router.get('/', function(req, res){
//     res.end('welcome to profile page');
// });
router.get('/', usersController.profile);


module.exports = router;