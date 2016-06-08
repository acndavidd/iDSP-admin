import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet } from 'angular2/router';
import {LayoutService} from '../services/layout.service';
import {Layout} from '../../../models/layout';
import {Modal} from '../services/modal.service';
import {HeaderService} from '../../shared/services/header.service';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'filter',
    templateUrl: 'app/shared/components/filter.component.html'
})

export class FilterComponent {
    filter = {
        category: '',
        subcategory: '',
        productid: '',
        desc: '',
        datefrom: '',
        dateto: '',
        dspname: '',
        dspmin: '',
        retailername: '',
        orderno: '',
        remittancetype: '',
        retailermin: '',
        amountfrom: '',
        amountto: '',
        role: '',
        min: '',
        name: '',
        supervisor: '',
        outlettype: '',
        brand: '',
        day: '',
        month: '',
        year: '',
        offerid: '',
        status: '',
        title: ''
    };

    constructor (
        private _layoutService: LayoutService,
        private _router: Router,
        private _matchMediaService: MatchMediaService,
        private _headerService: HeaderService,
        private _pageNavigationService: PageNavigationService,
        private _modalService: Modal.ModalService,
        private _authenticationService: AuthenticationService) {
    }

    getFilterStatus() {
        return this._layoutService.vFilterState;
    }

    setFilterValue(index:string, value:string) {
        this.filter[index] = value;
    }

    doFilter() {
        console.log('log2 ' + this.filter['dateto']);
    }
}