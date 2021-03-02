const express = require('express');
const router = express.Router();
const accountC = require('../controllers/accountC')

//paths of login operation
router.get('/login',accountC.getLogin);
router.post('/login',accountC.postLogin);

//paths of register operation
router.get('/register',accountC.getRegister);
router.post('/register',accountC.postRegister);

//get success page
router.get('/success',accountC.getSuccess);
//get failed page
router.get('/failed',accountC.getFailed);

module.exports = router;
