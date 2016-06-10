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

@Component({
    selector: 'layout-retailer',
    templateUrl: './app/retailers/components/layout-retailer.component.html',
    // templateUrl: 'app/shared/components/home.component.html',
    directives: [
        NgModel,
        ROUTER_DIRECTIVES,
        FilterComponent
    ],
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
        path: '/retailerFrequency',
        name: 'RetailerFrequency',
        component: RetailerFrequencyComponent
    }
])

export class LayoutRetailerComponent {
    private vDate: Date;
    
    constructor(
        private _router: Router,
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _pageNavigationService: PageNavigationService,
        private _headerService: HeaderService
    ) {
        window.scrollTo(0,0);
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

    goTo(page:string) {
        this._pageNavigationService.navigate(page, null, null);
    }
}