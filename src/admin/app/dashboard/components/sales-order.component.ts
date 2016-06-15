import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Layout} from '../../../models/layout';
import {LayoutService} from '../../shared/services/layout.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {HeaderService} from '../../shared/services/header.service';
import {NgModel} from 'angular2/common';
import {FilterComponent} from '../../shared/components/filter.component';
import {DashboardService} from '../services/dashboard.service';

@Component({
    selector: 'sales-order',
    templateUrl: './app/dashboard/components/sales-order.component.html',
    directives: [
        NgModel,
        ROUTER_DIRECTIVES,
        FilterComponent
    ],
    providers: [
        DashboardService
    ]
})

export class SalesOrderComponent {
    private vDate: Date;
    
    constructor(
        private _router: Router,
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _pageNavigationService: PageNavigationService,
        private _headerService: HeaderService,
        private _dashboardService: DashboardService
    ) {
        window.scrollTo(0,0);
        this._layoutService.setCurrentPage('SalesOrder');
        this._headerService.setTitle('iDSP Administration Panel');
        this.vDate = new Date();
    }
    
    getToday() {
        return this.vDate.toLocaleDateString('en-US');
    }
    
    getResize() {
        return this._matchMediaService.getMm();
    }

    goToOrderDetail(orderNo:string) {
        this._pageNavigationService.navigate('OrderDetail', null, null);
    }

    getSalesOrderList() {
        return this._dashboardService.getSalesOrderList();
    }
}