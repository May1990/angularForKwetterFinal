/**
 * Created by Anna-May on 03/05/2017.
 */
import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'app-header',
    templateUrl: 'app/header.component.html',
    styleUrls: ['app/styles/general.css', 'app/styles/header.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [HTTP_PROVIDERS]
})

export class HeaderComponent {
    username: string = parent.window["userLogIn"].userName;
}