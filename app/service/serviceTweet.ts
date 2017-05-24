/**
 * Created by Anna-May on 04/05/2017.
 */
import {Injectable, Component, InjectableFactory} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceTweet{
    constructor(private http: Http){

    }

    getTweetsByUserName(username) {
        return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceTweet/getTweetsByUserName/'+username)
            .map(res => res.json());
    }
    //put
    createTweet(content, username ) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `http://localhost:8080/kwetterMay/resources/RestServiceTweet/createTweet/${content}/${username}`;

        return this.http.put(url, JSON.stringify(content, username), {headers: headers});
            //.map(res => res.json());
    }

    getTweetsWithFollowing(username) {
        return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceTweet/getTweetsWithFollowing/' + username)
            .map(res => res.json());
    }

    getTweetCountByUserName(username) {
        return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceTweet/getTweetCountByUserName/' + username)
            .map(res => res.json());
    }

    getTweetsOnlyFollowing(id) {
        return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceTweet/getTweetsOnlyFollowing/'+id)
            .map(res => res.json());
    }

    getTweetsOnlyFollower(id) {
        return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceTweet/getTweetsOnlyFollower/'+id)
            .map(res => res.json());
    }
}