import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet } from 'angular2/router';
import {LayoutService} from '../services/layout.service';
import {Layout} from '../../../models/layout';
import {Modal} from '../services/modal.service';
import {HeaderService} from '../../shared/services/header.service';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'left-menu',
    templateUrl: 'app/shared/components/left-menu.component.html'
})

export class LeftMenuComponent {
    filter = {
        category: '',
        subcategory: '',
        productid: '',
        desc: ''
    };

    constructor (
        private _layoutService: LayoutService,
        private _router: Router,
        private _matchMediaService: MatchMediaService,
        private _headerService: HeaderService,
        private _pageNavigationService: PageNavigationService,
        private _modalService: Modal.ModalService,
        private _authenticationService: AuthenticationService) {
    }

    getFilterStatus() {
        return this._layoutService.vFilterState;
    }

    goToUserDetail() {
        this._pageNavigationService.navigate('Users/UserDetail', null, null);
    }

    goToUserInventory() {
        this._pageNavigationService.navigate('Users/UserInventory', null, null);
    }

    goToUserSalesTarget() {
        this._pageNavigationService.navigate('Users/UserSalesTarget', null, null);
    }

    goToUserRoute() {
        this._pageNavigationService.navigate('Users/UserRetailerRoute', null, null);
    }
}