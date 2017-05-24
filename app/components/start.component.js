System.register(['angular2/core', './../service/serviceUser', './../service/serviceTweet', "angular2/http"], function(exports_1, context_1) {
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
    var core_1, serviceUser_1, serviceTweet_1, http_1;
    var StartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (serviceUser_1_1) {
                serviceUser_1 = serviceUser_1_1;
            },
            function (serviceTweet_1_1) {
                serviceTweet_1 = serviceTweet_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            StartComponent = (function () {
                function StartComponent(serviceUser, serviceTweet) {
                    var _this = this;
                    this.serviceUser = serviceUser;
                    this.serviceTweet = serviceTweet;
                    debugger;
                    this.usernameTemp = parent.window["userLogIn"].userName;
                    serviceTweet.getTweetsWithFollowing(this.usernameTemp).subscribe(function (tweets) {
                        _this.tweets = tweets;
                    });
                    this.refreshLastTweet();
                    this.fillFollowers();
                    this.fillFollowing();
                }
                StartComponent.prototype.newTweet = function () {
                    this.serviceTweet.createTweet(this.content, this.usernameTemp).subscribe(function (tweets) {
                    });
                };
                StartComponent.prototype.refreshLastTweet = function () {
                    var _this = this;
                    this.serviceTweet.getTweetsByUserName(this.usernameTemp).subscribe(function (tweets) {
                        _this.lastTweet = tweets[tweets.length - 1];
                    });
                };
                StartComponent.prototype.fillFollowers = function () {
                    var _this = this;
                    this.serviceUser.getFollowers(this.usernameTemp).subscribe(function (tweets) {
                        _this.follower = tweets;
                    });
                };
                StartComponent.prototype.fillFollowing = function () {
                    var _this = this;
                    this.serviceUser.getFollowing(this.usernameTemp).subscribe(function (users) {
                        _this.following = users;
                    });
                };
                StartComponent.prototype.search = function () {
                    var _this = this;
                    this.serviceTweet.getTweetsByUserName(this.searchWord).subscribe(function (tweets) {
                        _this.tweets = tweets;
                        console.log(_this.tweets);
                    });
                };
                StartComponent = __decorate([
                    core_1.Component({
                        selector: 'app-start',
                        templateUrl: 'app/start.component.html',
                        styleUrls: ['app/styles/general.css', 'app/styles/start.component.css'],
                        providers: [serviceUser_1.ServiceUser, serviceTweet_1.ServiceTweet, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [serviceUser_1.ServiceUser, serviceTweet_1.ServiceTweet])
                ], StartComponent);
                return StartComponent;
            }());
            exports_1("StartComponent", StartComponent);
        }
    }
});
//# sourceMappingURL=start.component.js.map