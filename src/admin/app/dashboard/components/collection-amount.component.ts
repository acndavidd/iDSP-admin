import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Layout} from '../../../models/layout';
import {LayoutService} from '../../shared/services/layout.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {HeaderService} from '../../shared/services/header.service';
import {NgModel} from 'angular2/common';
import {FilterComponent} from '../../shared/components/filter.component';
import {SortService} from '../../shared/services/sort.service';
import {DashboardService} from '../services/dashboard.service';

@Component({
    selector: 'collection-amount',
    templateUrl: './app/dashboard/components/collection-amount.component.html',
    directives: [
        NgModel,
        ROUTER_DIRECTIVES,
        FilterComponent
    ],
    providers: [
        SortService,
        DashboardService
    ]
})

export class CollectionAmountComponent {
    private vDate: Date;
    
    constructor(
        private _router: Router,
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _pageNavigationService: PageNavigationService,
        private _headerService: HeaderService,
        private _sortService: SortService,
        private _dashboardService: DashboardService
    ) {
        window.scrollTo(0,0);
        this._layoutService.setCurrentPage('CollectionAmount');
        this._headerService.setTitle('iDSP Administration Panel');
        this.vDate = new Date();
    }
    
    getToday() {
        return this.vDate.toLocaleDateString('en-US');
    }
    
    getResize() {
        return this._matchMediaService.getMm();
    }

    goToOrderDetail(orderno:string) {
        this._pageNavigationService.navigate('OrderDetail', null, null);
    }

    goToUserDetail(orderNo:string) {
        this._pageNavigationService.navigate('Users/UserDetail', null, null);
    }

    goToRetailerDetail(orderNo:string) {
        this._pageNavigationService.navigate('Retailers/RetailerDetail', null, null);
    }

    sort(header:string) {
        this._sortService.sort(this.getCollectionAmountList(), header);
    }

    getSortStatus(header:string) {
        if(this._sortService.sortby === undefined) {
            return false;
        }else {
            return this._sortService.sortby[header]; 
        }
    }

    getCollectionAmountList() {
        return this._dashboardService.getCollectionAmountList();
    }
}