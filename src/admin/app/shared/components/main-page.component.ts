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
import {ProductsComponent} from '../../products/components/products.component';
import {UsersComponent} from '../../users/components/users.component';
import {RetailersComponent} from '../../retailers/components/retailers.component';
import {OffersComponent} from '../../offers/components/offers.component';
import {RemittanceComponent} from '../../dashboard/components/remittance.component';

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
    },
    {
        path: '/users',
        name: 'Users',
        component: UsersComponent
    },
    {
        path: '/retailers',
        name: 'Retailers',
        component: RetailersComponent
    },
    {
        path: '/offers',
        name: 'Offers',
        component: OffersComponent
    },
    {
        path: '/products',
        name: 'Products',
        component: ProductsComponent
    },
    {
        path: '/remittance',
        name: 'Remittance',
        component: RemittanceComponent
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