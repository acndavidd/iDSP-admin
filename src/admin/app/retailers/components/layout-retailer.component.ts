import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Layout} from '../../../models/layout';
import {LayoutService} from '../../shared/services/layout.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {HeaderService} from '../../shared/services/header.service';
import {NgModel} from 'angular2/common';
import {FilterComponent} from '../../shared/components/filter.component';
// import {UserDetailComponent} from './user-detail.component';

@Component({
    selector: 'retailer-detail',
    templateUrl: './app/retailers/components/layout-retailer.component.html',
    // templateUrl: 'app/shared/components/home.component.html',
    directives: [
        NgModel,
        ROUTER_DIRECTIVES,
        FilterComponent
    ],
})

// @RouteConfig([
//     {
//         path: '/userDetail2',
//         name: 'UserDetail2',
//         component: UserDetailComponent,
//         useAsDefault: true
//     }
// ])

export class LayoutUserDetailComponent {
    private vDate: Date;
    
    constructor(
        private _router: Router,
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _pageNavigationService: PageNavigationService,
        private _headerService: HeaderService
    ) {
        this._layoutService.setCurrentPage('UsersDetail');
        this._headerService.setTitle('iDSP Administration Panel');
        // this._headerService.setNavigationState('Products');
        this.vDate = new Date();
    }
    
    getToday() {
        return this.vDate.toLocaleDateString('en-US');
    }
    
    getResize() {
        return this._matchMediaService.getMm();
    }
}