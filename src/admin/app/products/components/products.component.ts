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
import {ProductsService} from '../services/products.service';

@Component({
    selector: 'products',
    templateUrl: './app/products/components/products.component.html',
    directives: [
        NgModel,
        ROUTER_DIRECTIVES,
        FilterComponent
    ],
    providers: [
        ProductsService,
        SortService
    ]
})

export class ProductsComponent {
    private vDate: Date;
    
    constructor(
        private _router: Router,
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _pageNavigationService: PageNavigationService,
        private _headerService: HeaderService,
        private _sortService: SortService,
        private _productService: ProductsService
    ) {
        this._layoutService.setCurrentPage('Products');
        this._headerService.setTitle('iDSP Administration Panel');
        this._headerService.setNavigationState('Products');
        this.vDate = new Date();
    }
    
    getToday() {
        return this.vDate.toLocaleDateString('en-US');
    }
    
    getResize() {
        return this._matchMediaService.getMm();
    }

    getProductList() {
        return this._productService.getProductList();
    }

    sort(header:string) {
        this._sortService.sort(this.getProductList(), header);
    }
}