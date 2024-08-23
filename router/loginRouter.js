const express = require('express')
const router = express.Router();
const loginRouter = require('../controller/loginController.js')


    router.get('/login', loginRouter.login);
    router.post('/login', loginRouter.postLogin);
    router.get('/logout', loginRouter.logout);
    module.exports = router;

