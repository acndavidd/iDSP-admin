import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet } from 'angular2/router';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {LayoutService} from '../../shared/services/layout.service';
import {HeaderService} from '../../shared/services/header.service';
import {RetailerService} from '../../shared/services/retailer.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {NgModel, NgClass} from 'angular2/common';

@Component({
    // FOR HIT API
    // templateUrl: './app/basic-call-procedure/components/basic-call-procedure.component.html',
    // FOR HARDCODE UI
    templateUrl: './app/basic-call-procedure/components/basic-call-procedure.component.html',
    directives: [
        ROUTER_DIRECTIVES,
        NgClass
    ],
    providers: [
        RetailerService
    ]
})

export class BasicCallProcedureComponent {

    private vListRoute;
    private vFilteredListRoute;
    constructor (
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _headerService: HeaderService,
        private _retailerService: RetailerService,
        private _pageNavigationService: PageNavigationService,
        private _router: Router
        ) {
        this._retailerService.getRetailer(100);
        this._layoutService.setCurrentPage('BasicCallProcedure');
        this._headerService.setTitle('Basic Call Procedure');

        this.refreshRetailerRouteBCP();
    }

    getResize() {
        return this._matchMediaService.getMm();
    }

    gotoCallPreparationHC(pStatus) {
        this._pageNavigationService.navigate('CallPreparation', pStatus, null);
    }

    gotoCallPreparation(pSelectedRetailer) {
        console.log( pSelectedRetailer );

        let vParamsOld = {};
        let vParams = {
            retailer_id: pSelectedRetailer.retailer_id,
            route_sequence: pSelectedRetailer.seq,
            status: pSelectedRetailer.call_status
        };

        this._pageNavigationService.navigate('CallPreparation', vParams, vParamsOld);
    }

    getFilter() {
        return this._layoutService.getFilter();
    }

    onKey(pInputText: any) {
        console.log(pInputText);
        this.vFilteredListRoute = this.vListRoute.filter(retailer => {
             return retailer.retailer_name.toLowerCase().indexOf(pInputText.toLowerCase()) !== -1 ||
             retailer.retailer_min.toLowerCase().indexOf(pInputText.toLowerCase()) !== -1;
        });
    }


    refreshRetailerRouteBCP() {
        console.log('Get  retailer route for Day');
        this._retailerService.queryRetailerRouteBCP().subscribe(
                response => {
                    console.log('Hasil response ' + response.json());
                    if (response.json().status === 'Success') {
                        console.log('Query Success');
                        this.vListRoute = response.json().result;
                        this.vFilteredListRoute = this.vListRoute;
                    } else {
                        this.vListRoute = null;
                        console.log('Query Failed');
                    }
                },
                error => {
                    console.log(error);
                }
        );
    }
}