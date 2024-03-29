import {Component} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {Layout} from '../../../models/layout';
import {LayoutService} from '../../shared/services/layout.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {HeaderService} from '../../shared/services/header.service';
import {NgModel} from 'angular2/common';
import {FilterComponent} from '../../shared/components/filter.component';
import {ModalComponent} from '../../shared/components/modal.component';
import {Modal} from '../../shared/services/modal.service';

@Component({
    selector: 'offers',
    templateUrl: './app/offers/components/offers.component.html',
    // templateUrl: 'app/shared/components/home.component.html',
    directives: [
        NgModel,
        ROUTER_DIRECTIVES,
        FilterComponent
    ],
})

export class OffersComponent {
    private vDate: Date;
    
    constructor(
        private _router: Router,
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService,
        private _pageNavigationService: PageNavigationService,
        private _headerService: HeaderService,
        private _modalService: Modal.ModalService
    ) {
        window.scrollTo(0,0);
        this._layoutService.setCurrentPage('Offers');
        this._headerService.setTitle('iDSP Administration Panel');
        this._headerService.setNavigationState('Offers');
        this.vDate = new Date();
    }
    
    getToday() {
        return this.vDate.toLocaleDateString('en-US');
    }
    
    getResize() {
        return this._matchMediaService.getMm();
    }

    toggleModal() {
        var message = '<div><img src="../img/test/Osmart123.png"></div>';
        this._modalService.toggleModal(message, Modal.ModalType.INFO);
    }

    goTo(page:string) {
        this._pageNavigationService.navigate(page, null, null);
    }
}