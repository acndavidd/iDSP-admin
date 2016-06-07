import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Layout} from '../../../models/layout';
import {LayoutService} from '../../shared/services/layout.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {HeaderService} from '../../shared/services/header.service';
import {NgModel} from 'angular2/common';

@Component({
    selector: 'dashboard',
    templateUrl: './app/dashboard/components/dashboard.component.html',
    // templateUrl: 'app/shared/components/home.component.html',
    directives: [
        NgModel,
        ROUTER_DIRECTIVES
    ],
})

export class DashboardComponent {
    private vDate: Date;
    
    constructor(
        private _router: Router,
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _pageNavigationService: PageNavigationService,
        private _headerService: HeaderService
    ) {
        this._layoutService.setCurrentPage('Dashboard');
        this._headerService.setTitle('iDSP Administration Panel');
        this._headerService.setNavigationState('dashboard');
        this.vDate = new Date();
    }
    
    getToday() {
        return this.vDate;
    }
    
    getResize() {
        return this._matchMediaService.getMm();
    }
}