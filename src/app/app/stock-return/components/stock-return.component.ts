import {Component, Input, Provider} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet, ROUTER_PROVIDERS } from 'angular2/router';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {LayoutService} from '../../shared/services/layout.service';
import {HeaderService} from '../../shared/services/header.service';
import {NgFor, NgModel} from 'angular2/common';

@Component({
    selector: 'stock-return',
    templateUrl: './app/stock-return/components/stock-return.component.html',
    directives: [
        NgFor, NgModel, ROUTER_DIRECTIVES
    ],
})

export class StockReturnComponent {

    constructor (
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _headerService: HeaderService,
        private _router: Router
    ) {
        this._layoutService.setCurrentPage('StockReturn');
        this._headerService.setTitle('Stock Return');
    }

    save(pEvent) {
        pEvent.preventDefault();

        // For By Pass Directly without API
        console.log('udah ke save');
    }
}
