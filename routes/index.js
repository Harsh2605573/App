var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');

router.post('/',user.index);
router.post('/login',user.check_password);
router.post('/add_product',user.add_product);
router.get('/',user.view_product);




module.exports = router;
