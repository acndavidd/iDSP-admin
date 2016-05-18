'use strict';

import {Component} from 'angular2/core';
import { Router } from 'angular2/router';
import {NgModel} from 'angular2/common';
import {AuthenticationService} from '../../shared/services/authentication.service';
import {Layout} from '../../../models/layout';
import {LayoutService} from '../../shared/services/layout.service';
import {ModalService} from '../../shared/services/modal.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';

@Component({
    selector: 'login',
    templateUrl: './app/login/components/login.component.html',
    directives: [
        NgModel
    ],
})

export class LoginComponent {
    vUsername: string;
    vPassword: string;
    constructor (
        private _router: Router,
        private _layoutService: LayoutService,
        private _authenticationService:AuthenticationService,
        private _modalService: ModalService,
        private _pageNavigationService : PageNavigationService
        ) {
        
        this._layoutService.setCurrentPage('Login');
	}

	login(pEvent) {
        pEvent.preventDefault();

        //For By Pass Directly without API
        //this._pageNavigationService.navigate("Mpin", null, null);
        this._router.navigate(['Mpin']);
    }

    getLoadingState(){
        return this._authenticationService.getLoadingState();
    }

    getErrorMessageText()
    {
    	return this._authenticationService.getError();
    }

    gotoForgotPassword(){
    }

    toggleVerificationCodeModal() {
        this._modalService.toggleVerificationCodeModal();
    }
}