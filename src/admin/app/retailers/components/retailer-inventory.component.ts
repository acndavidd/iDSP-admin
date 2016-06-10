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
    selector: 'retailer-inventory',
    templateUrl: './app/retailers/components/retailer-inventory.component.html',
    // templateUrl: 'app/shared/components/home.component.html',
    directives: [
        NgModel,
        ROUTER_DIRECTIVES,
        FilterComponent
    ],
})

export class RetailerInventoryComponent {
    vLoadShow = true;
    vPhysicalShow = false;
    vLoadActive = true;
    vPhysicalActive = false;
    private vDate: Date;
    
    constructor(
        private _router: Router,
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _pageNavigationService: PageNavigationService,
        private _headerService: HeaderService
    ) {
        this._layoutService.setCurrentPage('RetailerInventory');
        this._headerService.setTitle('iDSP Administration Panel');
        this.vDate = new Date();
    }
    
    getToday() {
        return this.vDate.toLocaleDateString('en-US');
    }
    
    gotoInventory(navigation:string) {
        this._headerService.setNavigationState(navigation);
        this._pageNavigationService.navigate(navigation,null,null);
    }

    getResize() {
        return this._matchMediaService.getMm();
    }

    showTabLoad() {
        this.vLoadShow = true;
        this.vPhysicalShow = false;
        this.vLoadActive = true;
        this.vPhysicalActive = false;
        this._layoutService.setRetailerInventoryFilter(true);
    }

    showTabPhysical() {
        this.vLoadShow = false;
        this.vPhysicalShow = true;
        this.vLoadActive = false;
        this.vPhysicalActive = true;
        this._layoutService.setRetailerInventoryFilter(false);
    }

}