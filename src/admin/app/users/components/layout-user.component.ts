import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Layout} from '../../../models/layout';
import {LayoutService} from '../../shared/services/layout.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {HeaderService} from '../../shared/services/header.service';
import {NgModel} from 'angular2/common';
import {FilterComponent} from '../../shared/components/filter.component';
import {UserDetailComponent} from './user-detail.component';
import {UserInventoryComponent} from './user-inventory.component';
import {UserRetailerRouteComponent} from './user-retailer-route.component';
import {UserSalesTargetComponent} from './user-sales-target.component';

@Component({
    selector: 'layout-user',
    templateUrl: './app/users/components/layout-user.component.html',
    directives: [
        NgModel,
        ROUTER_DIRECTIVES,
        FilterComponent
    ],
})

@RouteConfig([
    {
        path: '/userDetail',
        name: 'UserDetail',
        component: UserDetailComponent,
        useAsDefault: true
    },
    {
        path: '/userInventory',
        name: 'UserInventory',
        component: UserInventoryComponent
    },
    {
        path: '/userSalesTarget',
        name: 'UserSalesTarget',
        component: UserSalesTargetComponent
    },
    {
        path: '/userRetailerRoute',
        name: 'UserRetailerRoute',
        component: UserRetailerRouteComponent
    }
])

export class LayoutUserComponent {
    private vDate: Date;

    vUserTabState = {
        detail: true, // default tab
        inventory: false,
        salestarget: false,
        retailerroute: false
    };
    
    constructor(
        private _router: Router,
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _pageNavigationService: PageNavigationService,
        private _headerService: HeaderService
    ) {
        this._headerService.setTitle('iDSP Administration Panel');
        this.vDate = new Date();
    }
    
    getToday() {
        return this.vDate.toLocaleDateString('en-US');
    }
    
    getResize() {
        return this._matchMediaService.getMm();
    }

    goTo(page:string, tabname:string) {
        this._pageNavigationService.navigate(page, null, null);
        this.setUserTabStatus(tabname);        
    }
    
    resetUserTabStatus() {
        for(var key in this.vUserTabState) {
            this.vUserTabState[key] = false;
        }
    }

    setUserTabStatus(tabname:string) {
        this.resetUserTabStatus();
        this.vUserTabState[tabname] = true;
    }

    getUserTabStatus() {
        return this.vUserTabState;
    }
}