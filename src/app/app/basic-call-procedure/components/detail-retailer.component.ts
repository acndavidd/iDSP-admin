import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet } from 'angular2/router';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {LayoutService} from '../../shared/services/layout.service';
import {HeaderService} from '../../shared/services/header.service';
import {RetailerService} from '../../shared/services/retailer.service';
import {NgModel} from 'angular2/common';

@Component({
    templateUrl: './app/basic-call-procedure/components/detail-retailer.component.html',
	directives: [
		ROUTER_DIRECTIVES
    ]
})

export class DetailRetailerComponent {

    vMenuShow = false;
    vArrowMap = false;
	constructor (
		private _layoutService: LayoutService,
		private _matchMediaService: MatchMediaService,
		private _headerService: HeaderService,
		private _retailerService: RetailerService,
        private _router: Router
		) 

	{
		this._retailerService.getRetailer(100);
		this._layoutService.setCurrentPage('DetailRetailer');
		this._headerService.setTitle("Detail Retailer");
        console.log('in detail retailer BCP Component');
    }
	
	getResize(){
        return this._matchMediaService.getMm();  
    }

   getRetailerAll()
    {
    	if(this._retailerService.getRetailerAll())
    	{
    		return this._retailerService.getRetailerAll();
    	}
    	else
    	{
    		return null;
    	}
    }

    subMenuShow()
    {
        this.vMenuShow = !this.vMenuShow;
        this.vArrowMap = !this.vArrowMap;
    }

    gotoBCPActivityStep()
    {
        //this._layoutService.setOldCurrentPage('DetailRetailer');
        this._router.navigate(['BCPActivityStep']);
    }

    //  getRetailerAddress()
    // {
    // 	return this._retailerService.getRetailerAddress();
    // }
}