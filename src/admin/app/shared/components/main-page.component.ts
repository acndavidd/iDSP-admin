import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet } from 'angular2/router';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {LayoutService} from '../../shared/services/layout.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {SettingsComponent} from '../../settings/components/settings.component';
import {ResetPasswordComponent} from '../../settings/components/reset-password.component';
import {MpinComponent} from '../../login/components/mpin.component';
import {LoginComponent} from '../../login/components/login.component';
// import {HomeComponent} from '../../shared/components/home.component';
import {DashboardComponent} from '../../dashboard/components/dashboard.component';

@Component({
    selector : 'main-page',
    templateUrl: './app/shared/components/main-page.component.html',
    directives: [
        ROUTER_DIRECTIVES
    ]
})

@RouteConfig([
    // PARENT PAGE - START
    // {
    //     path: '/home',
    //     name: 'Home',
    //     component: HomeComponent
    // },
    // PARENT PAGE - END
    
    // Web page navigation
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    }
])

export class MainPageComponent {

    constructor (
        private _layoutService: LayoutService,
        private _matchMediaService: MatchMediaService) {}

    getResize() {
        return this._matchMediaService.getMm();
    }

}