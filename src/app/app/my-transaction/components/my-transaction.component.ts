import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet } from 'angular2/router';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {LayoutService} from '../../shared/services/layout.service';
import {NgModel} from 'angular2/common';
import {Response,RequestOptionsArgs,Headers,Http,Connection,RequestOptions} from 'angular2/http';

@Component({
    templateUrl: './app/my-transaction/components/my-transaction.component.html',
	directives: [
		NgModel,ROUTER_DIRECTIVES
    ]
})

export class MyTransactionComponent {
	title = "MY TRANSACTION";

	constructor (
		private _http: Http,
		private _layoutService: LayoutService,
    	private _matchMediaService: MatchMediaService) {
		
		this._layoutService.setCurrentPage('MyTransaction');
    }

    test(){
    	this._http.get('/check').subscribe(
            	response => {
            		this.is_loading = false;
            		console.log(response.json());
            	},
            	error => {
            		console.log(error);
            		this.error_msg = 'failed connecting to login service';
            	}
            );
    }
	
	getResize(){
        return this._matchMediaService.getmm();  
    }

    getLayout(){
		return this._layoutService.getLayout();
	}

}