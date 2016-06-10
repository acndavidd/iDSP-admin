import {Component, OnInit} from 'angular2/core';
import { Router } from 'angular2/router';
import {LayoutService} from '../services/layout.service';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {HeaderService} from '../../shared/services/header.service';
import {Layout} from '../../../models/layout';

@Component({
    selector: 'admin-header',
    templateUrl: 'app/shared/components/header.component.html'
})

export class HeaderComponent implements OnInit {
    constructor (
        private _layoutService: LayoutService,
        private _router: Router,
        private _matchMediaService: MatchMediaService,
        private _pageNavigationService: PageNavigationService,
        private _headerService: HeaderService) {}

    vTitle: string;

    ngOnInit() {

    }

    toggleLeftMenu() {
        this._layoutService.toggleLeftMenu();
    }

    getTitle() {
        return this._headerService.getTitle();
    }

    getLayout() {
        return this._layoutService.getLayout();
    }

    goToPreviousPage() {
        this._pageNavigationService.gotoPreviousPage();
    }

    toggleAdd() {
        this._layoutService.toggleAdd();
    }
    
    getResize() {
        return this._matchMediaService.getMm();
    }
    
    setNavigationState(navigation:string) {
        this._headerService.setNavigationState(navigation);
        this._pageNavigationService.navigate(navigation,null,null);
    }
    
    getNavigationState() {
        return this._headerService.getNavigationState();
    }

    goToAdminProfile() {
        this._pageNavigationService.navigate('AdminProfile', null, null);
    }

    // goToLoginPage() {
    //     this._pageNavigationService.navigate('Login', null, null);
    // }
}