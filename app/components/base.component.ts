/**
 * Created by Anna-May on 10/05/2017.
 */
import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {StartComponent} from "./start.component";
import {ProfileComponent} from "./profile.component";
import {HeaderComponent} from "./header.component";

@Component({
    selector: 'app-base',
    templateUrl: 'app/base.component.html',
    styleUrls: ['app/styles/app.component.css'],
    directives:[StartComponent, ProfileComponent, HeaderComponent],
    providers: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/start',
        as: 'Start',
        component: StartComponent,
        useAsDefault: true
    },
    {
        path: '/profile',
        as: 'Profile',
        component: ProfileComponent
    }
])

export class BaseComponent {
}
