import {Injectable} from 'angular2/core';

@Injectable()

export class HeaderService {
    vHeaderCaption: string;
    vTitle: string;
    
    navState = {
        Dashboard: false,
        UsersList: false,
        RetailersList: false,
        Offers: false,
        Products: false
    };

    constructor() {}

    setHeaderCaption(pCaption: string) {
        this.vHeaderCaption = pCaption;
    }

    getHeaderCaption() {
        return this.vHeaderCaption;
    }

    setTitle(pTitle: string) {
        this.vTitle = pTitle;
    }

    getTitle() {
        return this.vTitle;
    }
    
    getNavigationState() {
        return this.navState;
    }
    
    setNavigationState(navigation: string) {
        this.navState[navigation] = true;
        for(var key in this.navState) {
            if(key !== navigation) {
                this.navState[key] = false;
            }
        }
    }
}