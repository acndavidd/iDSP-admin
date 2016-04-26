/// <reference path="typings/main.d.ts" />
'use strict';
const login_controller_1 = require('./controllers/login.controller');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const port = process.env.PORT || 8080;
const router = express.Router();
const _login = new login_controller_1.LoginController();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(function (req, res, next) {
    /*Allow access control origin*/
    let allow;
    let origin = req.get('origin');
    if (origin == 'http://localhost:3000') {
        allow = 'http://localhost:3000';
    }
    if (allow) {
        console.log('allow : ' + allow);
        res.header("Access-Control-Allow-Origin", allow);
    }
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept,Authorization,Proxy-Authorization,X-session");
    res.header("Access-Control-Allow-Methods", "GET,PUT,DELETE,POST");
    next();
});
router.post('/login', _login.postLogin);
app.use('/api', router);
var server = app.listen(port);
console.log('http://127.0.0.1:' + port + '/api');
//# sourceMappingURL=main.js.map