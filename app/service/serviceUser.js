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
    var ServiceUser;
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
            ServiceUser = (function () {
                function ServiceUser(http) {
                    this.http = http;
                }
                ServiceUser.prototype.getFollowers = function (username) {
                    return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/getFollowers/' + username)
                        .map(function (res) { return res.json(); });
                };
                ServiceUser.prototype.getFollowing = function (username) {
                    return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/getFollowing/' + username)
                        .map(function (res) { return res.json(); });
                };
                ServiceUser.prototype.logIn = function (username) {
                    var _this = this;
                    this.getUserByUserName(username).subscribe(function (user) {
                        _this.user = user;
                    });
                };
                ServiceUser.prototype.getUserByUserName = function (username) {
                    return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/getUserByUserName/' + username)
                        .map(function (res) { return res.json(); });
                };
                //     return this
                // .http
                // .put(`${this.baseUrl}/people/${person.id}`, JSON.stringify(person), {headers: this.getHeaders()});
                //put
                ServiceUser.prototype.createUser = function (password, email, name, username, biografy, locationX, locationY, website) {
                    return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/createUser/' + password + '/' + email + '/' + name + '/' + username + '/' + biografy + '/' + locationX + '/' + locationY + '/' + website)
                        .map(function (res) { return res.json(); });
                };
                ServiceUser.prototype.getCountFollowing = function (id) {
                    return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/getCountFollowing/' + id)
                        .map(function (res) { return res.json(); });
                };
                ServiceUser.prototype.getCountFollower = function (id) {
                    return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/getCountFollower/' + id)
                        .map(function (res) { return res.json(); });
                };
                ServiceUser.prototype.doesUserNameExist = function (username) {
                    return this.http.get('http://localhost:8080/kwetterMay/resources/RestServiceUser/doesUserNameExist/' + username)
                        .map(function (res) { return res.json(); });
                };
                //put
                ServiceUser.prototype.adjustUser = function (email, name, username, biografy, pictureUrl, website) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = "http://localhost:8080/kwetterMay/resources/RestServiceUser/adjustUser/" + email + "/" + name + "/" + username + "/" + biografy + "/" + pictureUrl + "/" + website;
                    //, name, username, biografy, pictureUrl, website
                    return this.http.put(url, JSON.stringify(email, name, website), { headers: headers });
                };
                //put
                ServiceUser.prototype.adjustUsername = function (username, oldUsername) {
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    var url = "http://localhost:8080/kwetterMay/resources/RestServiceUser/adjustUserName/" + username + "/" + oldUsername;
                    return this.http.put(url, JSON.stringify(username, oldUsername), { headers: headers });
                };
                ServiceUser = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ServiceUser);
                return ServiceUser;
            }());
            exports_1("ServiceUser", ServiceUser);
        }
    }
});
//# sourceMappingURL=serviceUser.js.map