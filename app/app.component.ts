import {Component} from 'angular2/core';

import {LogInRegisterComponent} from './components/logInRegister.component';
import {BaseComponent} from "./components/base.component";

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'app-head',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/styles/app.component.css'],
    directives:[LogInRegisterComponent, BaseComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    {
        path: '/**',
        redirectTo: ['LogIn']
    }
    ,{
        path: '/LogIn',
        name: 'LogIn',
        component: LogInRegisterComponent,
        useAsDefault: true
    }
    ,{
        path: '...',
        name: 'Base',
        component: BaseComponent,
    }
])

export class AppComponent {
    userLogIn: User;
}

interface User{
    id: string;
    name: string;
    userName: string;
    website: string;
    pictureUrl: string;
    biografy: string;
    email: string;
}