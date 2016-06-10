import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES, RouterOutlet } from 'angular2/router';
import {MatchMediaService} from '../../shared/services/match-media.service';
import {LayoutService} from '../../shared/services/layout.service';
import {PageNavigationService} from '../../shared/services/page-navigation.service';
import {SettingsComponent} from '../../settings/components/settings.component';
import {ResetPasswordComponent} from '../../settings/components/reset-password.component';
import {MpinComponent} from '../../login/components/mpin.component';
import {LoginComponent} from '../../login/components/login.component';
import {DashboardComponent} from '../../dashboard/components/dashboard.component';
import {ProductsComponent} from '../../products/components/products.component';
import {UsersComponent} from '../../users/components/users.component';
import {UserDetailComponent} from '../../users/components/user-detail.component';
import {UserInventoryComponent} from '../../users/components/user-inventory.component';
import {UserSalesTargetComponent} from '../../users/components/user-sales-target.component';
import {UserRetailerRouteComponent} from '../../users/components/user-retailer-route.component';
import {RetailersComponent} from '../../retailers/components/retailers.component';
import {OffersComponent} from '../../offers/components/offers.component';
import {RemittanceComponent} from '../../dashboard/components/remittance.component';
import {LayoutUserComponent} from '../../users/components/layout-user.component';
import {LayoutRetailerComponent} from '../../retailers/components/layout-retailer.component';
import {AccountReceivableComponent} from '../../dashboard/components/account-receivable.component';
import {VisitedRetailerComponent} from '../../dashboard/components/visited-retailer.component';
import {UnservedOrderComponent} from '../../dashboard/components/unserved-order.component';
import {SalesOrderComponent} from '../../dashboard/components/sales-order.component';
import {OrderDetailComponent} from '../../dashboard/components/order-detail.component';
import {CollectionAmountComponent} from '../../dashboard/components/collection-amount.component';
import {AdminProfileComponent} from '../../admin/components/admin-profile.component';

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
    //     path: '/login',
    //     name: 'Login',
    //     component: LoginComponent
    // },
    // PARENT PAGE - END
    
    // Web page navigation
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent
    },
    {
        path: '/usersList',
        name: 'UsersList',
        component: UsersComponent
    },
    {
        path: '/retailersList',
        name: 'RetailersList',
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
        path: '/adminProfile',
        name: 'AdminProfile',
        component: AdminProfileComponent
    },
    // Dashboard
    {
        path: '/salesOrder',
        name: 'SalesOrder',
        component: SalesOrderComponent
    },
    {
        path: '/remittance',
        name: 'Remittance',
        component: RemittanceComponent
    },
    {
        path: '/accountReceivable',
        name: 'AccountReceivable',
        component: AccountReceivableComponent
    },
    {
        path: '/visitedRetailer',
        name: 'VisitedRetailer',
        component: VisitedRetailerComponent
    },
    {
        path: '/unservedOrderComponent',
        name: 'UnservedOrder',
        component: UnservedOrderComponent
    },
    {
        path: '/collectionAmount',
        name: 'CollectionAmount',
        component: CollectionAmountComponent
    },
    {
        path: '/orderDetail',
        name: 'OrderDetail',
        component: OrderDetailComponent
    },
    // Users
    {
        path: 'users/...',
        name: 'Users',
        component: LayoutUserComponent
    },
    // RetailersComponent
    {
        path: 'retailers/...',
        name: 'Retailers',
        component: LayoutRetailerComponent
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