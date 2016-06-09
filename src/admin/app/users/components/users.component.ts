import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Layout} from '../../../models/layout';
import {LayoutService} from '../../shared/services/layout.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {HeaderService} from '../../shared/services/header.service';
import {NgModel} from 'angular2/common';
import {FilterComponent} from '../../shared/components/filter.component';

@Component({
    selector: 'users',
    templateUrl: './app/users/components/users.component.html',
    // templateUrl: 'app/shared/components/home.component.html',
    directives: [
        NgModel,
        ROUTER_DIRECTIVES,
        FilterComponent
    ],
})

export class UsersComponent {
    private vDate: Date;
    
    constructor(
        private _router: Router,
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _pageNavigationService: PageNavigationService,
        private _headerService: HeaderService
    ) {
        this._layoutService.setCurrentPage('Users');
        this._headerService.setTitle('iDSP Administration Panel');
        this._headerService.setNavigationState('Users');
        this.vDate = new Date();
    }
    
    getToday() {
        return this.vDate.toLocaleDateString('en-US');
    }
    

    goToDetail(navigation:string) {
        this._pageNavigationService.navigate('UserDetail', null, null);
    }
    
    goToDSPRoute(navigation:string) {
        this._pageNavigationService.navigate('UserRetailerRoute', null, null);
    }

    getResize() {
        return this._matchMediaService.getMm();
    }
}