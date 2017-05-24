/**
 * Created by Anna-May on 08/05/2017.
 */
import {Component} from 'angular2/core';
import {ServiceUser} from './../service/serviceUser';
import {Router} from 'angular2/router';
import {HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: 'app-logInRegister',
    templateUrl: 'app/logInRegister.component.html',
    styleUrls: ['app/styles/logInRegister.component.css', 'app/styles/general.css'],
    providers: [ServiceUser, HTTP_PROVIDERS]
})

export class LogInRegisterComponent {
    username: string;

    constructor(private serviceUser:ServiceUser, private router:Router ){

    }

    public logIn(){
        this.serviceUser.logIn(this.username);
        let checkloop = setInterval(()=>{
            if(typeof this.serviceUser.user != 'undefined'){
                if(this.serviceUser.user == null){
                    this.serviceUser.user = undefined;
                }else{
                    parent.window["userLogIn"] = this.serviceUser.user;
                    this.router.navigate(['Base']);
                }
                clearInterval(checkloop);
            }
        }, 1000);
    }
}