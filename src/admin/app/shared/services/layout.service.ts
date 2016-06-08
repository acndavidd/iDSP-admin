import {Injectable} from 'angular2/core';
import {PageNavigationService} from './page-navigation.service';
import {MatchMediaService} from './match-media.service';

@Injectable()
export class LayoutService {

    vCurrentPage: string;
    vNumberSelection = false;
    vOldCurrentPage: string;
    vOldCurrentPageParams;
    vCurrentPointer: string;

    constructor(private _pageNavigationService: PageNavigationService,
        private _matchMediaService: MatchMediaService) {

    }

    vLayoutState = {
        appHeader: false,
        appFooter: false,
        leftMenu: false
    };

    vFilterState = {
        category: false,
        subcategory: false,
        productid: false,
        desc: false
    };

    getCurrentPage() {
        return this.vCurrentPage;
    }

    getOldCurrentPage() {
        return this.vOldCurrentPage;
    }


    setOldCurrentPage(pCurrentPage: string) {
        this._pageNavigationService.addListPreviousData(pCurrentPage, null);
        this.vOldCurrentPage = pCurrentPage;
    }

    getLayout() {
        return this.vLayoutState;
    }

    setNumberSelectionState() {
        this.vNumberSelection = !this.vNumberSelection;
    }

    getNumberSelectionState() {
        return this.vNumberSelection;
    }

    setOldCurrentPageParams(pParams) {
        this.vOldCurrentPageParams = pParams;
    }

    setCurrentPage(pCurrent: string) {
        this.vCurrentPage = pCurrent;

        // BEFORE LOGIN PAGE - START
        if (
            pCurrent === 'GetStarted' ||
            pCurrent === 'Verification' ||
            pCurrent === 'Login') {
            this._pageNavigationService.resetListPreviousData();
            this.vLayoutState = {
                appHeader: false,
                appFooter: false,
                leftMenu: false
            };
        } else if (
            pCurrent === 'Mpin') {
            this._pageNavigationService.resetListPreviousData();
            this.vOldCurrentPage = 'Login';
            this.vOldCurrentPageParams = null;
            this._pageNavigationService.addListPreviousData(this.vOldCurrentPage, this.vOldCurrentPageParams);
        }
        // BEFORE LOGIN PAGE - END

        // PARENT PAGE - START
        else if (
            pCurrent === 'Home' ||
            pCurrent === 'Dashboard' ||
            pCurrent === 'Users' ||
            pCurrent === 'Retailers' ||
            pCurrent === 'Offers' ||
            pCurrent === 'Products') {

            this._pageNavigationService.resetListPreviousData();

            this.vLayoutState = {
                appHeader: true,
                appFooter: false,
                leftMenu: false
            };
        }
        // PARENT PAGE - END

        // console.log('In Layout Current Page ' + pCurrent + ' - ' + this.vHeaderItem.back);
        this._pageNavigationService.setCurrentPage(pCurrent);

        // set filter layout
        this.setFilterStatus(pCurrent);
    }

    toggleLeftMenu() {
        this.vLayoutState.leftMenu = !this.vLayoutState.leftMenu;
    }

    hideLeftMenu() {
        this.vLayoutState.leftMenu = false;
    }

    toggleHeader() {
        // FOR LOGOUT ONLY
        this.vLayoutState.appHeader = false;
    }

    getLeftMenuState() {
        return this.vLayoutState.leftMenu;
    }

    getCurrentPointer() {
        return this.vCurrentPointer;
    }
    // for hardcode
    // toggleAdd() {
    //     if (this.vCurrentPage === 'BasicCallProcedure') {
    //         this._pageNavigationService.navigate('BCPAddRetailerRoute', null, null);
    //     }
    // }

    // for backend
        toggleAdd() {
        if (this.vCurrentPage === 'BasicCallProcedure') {
            this._pageNavigationService.navigate('BCPAddRetailerRoute', null, null);
        }
    }

    resetFilterStatus() {
        for(var key in this.vFilterState) {
            this.vFilterState[key] = false;
        }
    }

    setFilterStatus(page:string) {
        this.resetFilterStatus();
        if(this.vCurrentPage === 'Products') {
            this.vFilterState.category = true;
            this.vFilterState.subcategory = true;
            this.vFilterState.productid = true;
            this.vFilterState.desc = true;
        }
    }
}
