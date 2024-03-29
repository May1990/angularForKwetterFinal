System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var ServiceTweet;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            ServiceTweet = (function () {
                function ServiceTweet(http) {
                    this.http = http;
                }
                ServiceTweet.prototype.getTweetsByUserName = function (username) {
                    return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceTweet/getTweetsByUserName/' + username)
                        .map(function (res) { return res.json(); });
                };
                //put
                ServiceTweet.prototype.createTweet = function (content, username) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = "http://localhost:8080/kwetterMay/resources/RestServiceTweet/createTweet/" + content + "/" + username;
                    return this.http.put(url, JSON.stringify(content, username), { headers: headers });
                    //.map(res => res.json());
                };
                ServiceTweet.prototype.getTweetsWithFollowing = function (username) {
                    return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceTweet/getTweetsWithFollowing/' + username)
                        .map(function (res) { return res.json(); });
                };
                ServiceTweet.prototype.getTweetCountByUserName = function (username) {
                    return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceTweet/getTweetCountByUserName/' + username)
                        .map(function (res) { return res.json(); });
                };
                ServiceTweet.prototype.getTweetsOnlyFollowing = function (id) {
                    return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceTweet/getTweetsOnlyFollowing/' + id)
                        .map(function (res) { return res.json(); });
                };
                ServiceTweet.prototype.getTweetsOnlyFollower = function (id) {
                    return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceTweet/getTweetsOnlyFollower/' + id)
                        .map(function (res) { return res.json(); });
                };
                ServiceTweet = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ServiceTweet);
                return ServiceTweet;
            }());
            exports_1("ServiceTweet", ServiceTweet);
        }
    }
});
//# sourceMappingURL=serviceTweet.js.map