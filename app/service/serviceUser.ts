/**
 * Created by Anna-May on 04/05/2017.
 */
import {Injectable, Component, InjectableFactory} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceUser{
    user: User;

    constructor(private http: Http){

    }

    getFollowers(username) {
        return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/getFollowers/'+username)
            .map(res => res.json());
    }

    getFollowing(username) {
        return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/getFollowing/'+username)
            .map(res => res.json());
    }

    logIn(username){
        this.getUserByUserName(username).subscribe(user => {
            this.user = user;
        });
    }

    getUserByUserName(username) {
        return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/getUserByUserName/'+username)
            .map(res => res.json());
    }

//     return this
// .http
// .put(`${this.baseUrl}/people/${person.id}`, JSON.stringify(person), {headers: this.getHeaders()});
    //put
    createUser(password,email,name,username,biografy,locationX,locationY,website) {
        return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/createUser/'+password+'/'+email+'/'+name+'/'+username+'/'+biografy+'/'+locationX+'/'+locationY+'/'+website)
            .map(res => res.json());
    }

    getCountFollowing(id) {
        return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/getCountFollowing/'+id)
            .map(res => res.json());
    }

    getCountFollower(id) {
        return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/getCountFollower/'+id)
            .map(res => res.json());
    }

    doesUserNameExist(username) {
        return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/doesUserNameExist/'+username)
            .map(res => res.json());
    }

    //put
    adjustUser(email,name,username,biografy,pictureUrl,website) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `http://localhost:8080/kwetterMay/resources/RestServiceUser/adjustUser/${email}/${name}/${username}/${biografy}/${pictureUrl}/${website}`;
    //, name, username, biografy, pictureUrl, website
        return this.http.put(url, JSON.stringify(email, name,  website), {headers: headers});
    }

    //put
    adjustUsername(username,oldUsername) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `http://localhost:8080/kwetterMay/resources/RestServiceUser/adjustUserName/${username}/${oldUsername}`;


        return this.http.put(url, JSON.stringify(username, oldUsername), {headers: headers});
    }
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

