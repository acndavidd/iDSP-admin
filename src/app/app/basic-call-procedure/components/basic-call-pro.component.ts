import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet } from 'angular2/router';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {LayoutService} from '../../shared/services/layout.service';
import {ModalService} from '../../shared/services/modal.service';
import {HeaderService} from '../../shared/services/header.service';

import {NgModel} from 'angular2/common';

@Component({
    templateUrl: './app/basic-call-procedure/components/basic-call-pro.component.html',
	directives: [
		ROUTER_DIRECTIVES
    ]
})

export class BasicCallProcedureComponent {
	

	constructor (
		private _router: Router,
		private _layoutService: LayoutService,
    	private _matchMediaService: MatchMediaService,
		private _modalService: ModalService,
		private _headerService: HeaderService
		) 
	{
		this._layoutService.setCurrentPage('BasicCallProcedure');
		this._headerService.setTitle("BCP");
    }
	
	getResize(){
        return this._matchMediaService.getmm();  
    }

}