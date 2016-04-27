/// <reference path="typings/main.d.ts" />
'use strict';

import {LoginController} from './controllers/login.controller';
import {TokenService} from './services/token.service';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const port:number = process.env.PORT || 8080;
const router = express.Router();



var loginCtrl:LoginController = new LoginController();
var tokenSvc:TokenService = new TokenService();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(function(req, res, next) {
	/*Allow access control origin*/
	let allow: string;
    let origin: string = req.get('origin');
    if (origin == 'http://localhost:3000') {
        allow = 'http://localhost:3000';
    }
    if(allow) {
     	res.header("Access-Control-Allow-Origin", allow);
    }
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", 
        "Access-Control-Allow-Origin, X-Requested-With, Content-Type, Accept,Authorization,Proxy-Authorization,X-session");
    res.header("Access-Control-Allow-Methods","GET,PUT,DELETE,POST");
    //validate token
    if(req.path !== '/service/login'){//all request to service will validate token except login
        var token = '';
        if(req.cookies['accessToken']){//accessed from web
            token = cookieParser.JSONCookies(req.cookies).accessToken;
        }else{//accessed from mobile
            token = req.get('Authorization');
            token = token.replace('Bearer ','');
        }
        try{
            var jwt = tokenSvc.verifyToken(token);
            res.locals.jwt = jwt;
        }catch(err){
            console.log("error : " + err);
            res.sendStatus(403);
        }      
    }
    next();
});

router.get('/login',loginCtrl.doLogin);
router.get('/check',loginCtrl.checkToken);
app.use('/service',router);
app.listen(port);
console.log('http://127.0.0.1:' + port + '/service');