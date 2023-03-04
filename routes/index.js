const express=require('express');
const router=express.Router();

const homecontroller=require('../controllers/home_Controller');

router.get('/',homecontroller.home);
router.get('/SignIn',homecontroller.signin);
router.get('/Signup',homecontroller.signup);
router.get('/cell',homecontroller.PlaceCell);
router.get('/inter',homecontroller.Interview);

router.post('/createSignin',homecontroller.createS_I);
router.post('/createSignup',homecontroller.createS_U);
router.post('/createCell',homecontroller.create_C);
router.post('/createInter',homecontroller.createI);

module.exports=router;