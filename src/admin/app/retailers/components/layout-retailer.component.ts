import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES, RouteConfig} from 'angular2/router';
import {Layout} from '../../../models/layout';
import {LayoutService} from '../../shared/services/layout.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {HeaderService} from '../../shared/services/header.service';
import {NgModel} from 'angular2/common';
import {FilterComponent} from '../../shared/components/filter.component';
import {RetailerDetailComponent} from './retailer-detail.component';
import {RetailerCollectionComponent} from './retailer-collection.component';
import {RetailerFrequencyComponent} from './retailer-frequency.component';
import {RetailerInventoryComponent} from './retailer-inventory.component';
import {RetailerShareComponent} from './retailer-share.component';

@Component({
    selector: 'layout-retailer',
    templateUrl: './app/retailers/components/layout-retailer.component.html',
    directives: [
        NgModel,
        ROUTER_DIRECTIVES,
        FilterComponent
    ]
})

@RouteConfig([
    {
        path: '../retailerDetail',
        name: 'RetailerDetail',
        component: RetailerDetailComponent,
        useAsDefault: true
    },
    {
        path: '../retailersCollection',
        name: 'RetailerCollection',
        component: RetailerCollectionComponent
    },
    {
        path: '/retailerInventory',
        name: 'RetailerInventory',
        component: RetailerInventoryComponent
    },
    {
        path: '/retailerShare',
        name: 'RetailerShare',
        component: RetailerShareComponent
    },
    {
        path: '/retailerFrequency',
        name: 'RetailerFrequency',
        component: RetailerFrequencyComponent
    }
])

export class LayoutRetailerComponent {
    private vDate: Date;

    vRetailerTabState = {
        detail: true, // default tab
        collection: false,
        inventory: false,
        share: false,
        frequency: false
    };
    
    constructor(
        private _router: Router,
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _pageNavigationService: PageNavigationService,
        private _headerService: HeaderService
    ) {
        window.scrollTo(0,0);
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
        this.setRetailerTabStatus(tabname);
    }

    resetRetailerTabStatus() {
        for(var key in this.vRetailerTabState) {
            this.vRetailerTabState[key] = false;
        }
    }

    setRetailerTabStatus(tabname:string) {
        this.resetRetailerTabStatus();
        this.vRetailerTabState[tabname] = true;
    }

    getRetailerTabStatus() {
        return this.vRetailerTabState;
    }
}