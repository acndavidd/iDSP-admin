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
        desc: false,
        date: false,
        dspname: false,
        dspmin: false,
        retailername: false,
        orderno: false,
        remittancetype: false,
        retailermin: false,
        amount: false,
        role: false,
        min: false,
        name: false,
        supervisor: false,
        outlettype: false,
        brand: false,
        day: false,
        month: false,
        year: false,
        offerid: false,
        status: false,
        title: false,
        button: false
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
            pCurrent === 'Products' ||
            pCurrent === 'AdminProfile') {

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
            this.vFilterState.button = true;
        }else if(
            this.vCurrentPage === 'SalesOrder' ||
            this.vCurrentPage === 'CollectionAmount'
            ) {
            this.vFilterState.date = true;
            this.vFilterState.dspname = true;
            this.vFilterState.dspmin = true;
            this.vFilterState.retailername = true;
            this.vFilterState.orderno = true;
            this.vFilterState.button = true;
        }else if(this.vCurrentPage === 'Remittance') {
            this.vFilterState.date = true;
            this.vFilterState.dspname = true;
            this.vFilterState.dspmin = true;
            this.vFilterState.remittancetype = true;
            this.vFilterState.button = true;
        }else if(this.vCurrentPage === 'AccountReceivable') {
            this.vFilterState.retailername = true;
            this.vFilterState.retailermin = true;
            this.vFilterState.dspname = true;
            this.vFilterState.dspmin = true;
            this.vFilterState.amount = true;
            this.vFilterState.button = true;
        }else if(this.vCurrentPage === 'VisitedRetailer') {
            this.vFilterState.date = true;
            this.vFilterState.retailername = true;
            this.vFilterState.dspname = true;
            this.vFilterState.button = true;
        }else if(this.vCurrentPage === 'UsersList') {
            this.vFilterState.role = true;
            this.vFilterState.min = true;
            this.vFilterState.name = true;
            this.vFilterState.supervisor = true; 
            this.vFilterState.button = true;
        }else if(this.vCurrentPage === 'RetailersList') {
            this.vFilterState.min = true;
            this.vFilterState.retailername = true;
            this.vFilterState.dspname = true;
            this.vFilterState.outlettype = true; 
            this.vFilterState.button = true;
        }else if(this.vCurrentPage === 'UnservedOrder') {
            this.vFilterState.date = true;
            this.vFilterState.dspname = true;
            this.vFilterState.orderno = true;
            this.vFilterState.button = true;
        }else if(this.vCurrentPage === 'UsersInventory') {
            this.vFilterState.brand = true;
            this.vFilterState.category = true;
            this.vFilterState.subcategory = true;
            this.vFilterState.productid = true;
            this.vFilterState.button = true;
        }else if(this.vCurrentPage === 'UsersSalesTarget') {
            this.vFilterState.month = true;
            this.vFilterState.year = true;
            this.vFilterState.brand = true;
            this.vFilterState.category = true;
            this.vFilterState.button = true;
        }else if(this.vCurrentPage === 'UsersRetailerRoute') {
            this.vFilterState.day = true;
            this.vFilterState.min = true;
            this.vFilterState.retailername = true;
            this.vFilterState.button = true;
        }else if(this.vCurrentPage === 'RetailersInventory') {
            this.vFilterState.brand = true;
            this.vFilterState.subcategory = true;
            this.vFilterState.button = true;
        }else if(this.vCurrentPage === 'RetailersShare') {
            this.vFilterState.brand = true;
            this.vFilterState.category = true;
            this.vFilterState.subcategory = true;
            this.vFilterState.button = true;
        }else if(this.vCurrentPage === 'Offers') {
            this.vFilterState.offerid = true;
            this.vFilterState.status = true;
            this.vFilterState.title = true;
            this.vFilterState.button = true;
        }
        else if(this.vCurrentPage === 'Users' ||
                this.vCurrentPage === 'UserDetail') {
            this.vFilterState.category = true;
            this.vFilterState.subcategory = true;
            this.vFilterState.productid = true;
            this.vFilterState.desc = true;
            this.vFilterState.button = true;
        }
    }
}
