'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const token_service_1 = require('../services/token.service');
const user_dao_1 = require('../daos/user.dao');
class LoginController {
    constructor() {
    }
    postLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let _userDAO = new user_dao_1.UserDAO();
            console.log(req.body);
            let user = yield _userDAO.login(req.body.username, req.body.password);
            let _tokensvc = new token_service_1.TokenService();
            let token = _tokensvc.generateToken(user);
            res.cookie('accessToken', token, { httpOnly: true });
            console.log(token);
            if (_tokensvc.verifyToken('kuciao')) {
                console.log('valid');
            }
            else {
                console.log('invalid');
            }
            res.json(user);
        });
    }
}
exports.LoginController = LoginController;
//# sourceMappingURL=login.controller.js.map