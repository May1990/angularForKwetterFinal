System.register(['angular2/core', "../service/serviceUser", "../service/serviceTweet", "angular2/http", "angular2/src/facade/browser"], function(exports_1, context_1) {
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
    var core_1, serviceUser_1, serviceTweet_1, http_1, browser_1;
    var ProfileComponent;
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
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(serviceUser, serviceTweet) {
                    this.serviceUser = serviceUser;
                    this.serviceTweet = serviceTweet;
                    this.adjust = "noAdjust";
                    this.btnDis = true;
                    this.userNameExist = "Username bestaat al!";
                    this.usernameTempLogIn = parent.window["userLogIn"].userName;
                    this.usernameTemp = this.usernameTempLogIn;
                    debugger;
                    console.log(serviceUser.user);
                    this.fillUser();
                }
                ProfileComponent.prototype.fillUser = function () {
                    var _this = this;
                    this.serviceUser.getUserByUserName(this.usernameTemp).subscribe(function (user) {
                        _this.selectedUser = user;
                        _this.name = _this.selectedUser.name;
                        _this.email = _this.selectedUser.email;
                        _this.newUserName = _this.selectedUser.userName;
                        _this.web = _this.selectedUser.website;
                        _this.bio = _this.selectedUser.biografy;
                        _this.fillTweets();
                        _this.fillFollowing();
                        _this.fillCountFollowing();
                        _this.fillCountFollower();
                    });
                };
                ProfileComponent.prototype.fillCountFollowing = function () {
                    var _this = this;
                    this.serviceUser.getCountFollowing(this.selectedUser.id).subscribe(function (count) {
                        _this.countFollowing = count;
                    });
                };
                ProfileComponent.prototype.fillCountFollower = function () {
                    var _this = this;
                    this.serviceUser.getCountFollower(this.selectedUser.id).subscribe(function (count) {
                        _this.countFollower = count;
                    });
                };
                ProfileComponent.prototype.fillFollowing = function () {
                    var _this = this;
                    this.serviceUser.getFollowing(this.selectedUser.userName).subscribe(function (users) {
                        _this.following = users;
                    });
                };
                ProfileComponent.prototype.fillTweets = function () {
                    var _this = this;
                    this.serviceTweet.getTweetsByUserName(this.selectedUser.userName).subscribe(function (tweets) {
                        _this.tweets = tweets;
                        _this.countOwnTweets = _this.tweets.length;
                    });
                };
                ProfileComponent.prototype.fillTweetsFollowing = function () {
                    var _this = this;
                    this.serviceTweet.getTweetsOnlyFollowing(this.selectedUser.id).subscribe(function (tweets) {
                        _this.tweets = tweets;
                    });
                };
                ProfileComponent.prototype.fillTweetsFollowers = function () {
                    var _this = this;
                    this.serviceTweet.getTweetsOnlyFollower(this.selectedUser.id).subscribe(function (tweets) {
                        _this.tweets = tweets;
                    });
                };
                // adjust
                ProfileComponent.prototype.adjustUserName = function () {
                    var _this = this;
                    this.serviceUser.adjustUsername(this.newUserName, this.selectedUser.userName).subscribe(function (tweets) {
                        _this.usernameTemp = _this.newUserName;
                        _this.fillUser();
                    });
                };
                ProfileComponent.prototype.adjustDetails = function () {
                    var _this = this;
                    this.serviceUser.adjustUser(this.email, this.name, this.selectedUser.userName, this.bio, this.pictureUrl, this.web).subscribe(function (tweets) {
                        _this.usernameTemp = _this.newUserName;
                        _this.fillUser();
                    });
                };
                ProfileComponent.prototype.checkUserNameExist = function () {
                    var _this = this;
                    this.serviceUser.doesUserNameExist(this.newUserName).subscribe(function (succes) {
                        debugger;
                        if (succes == true) {
                            browser_1.document.getElementById("userNameExist").style.display = "block";
                            _this.btnDis = true;
                        }
                        else {
                            browser_1.document.getElementById("userNameExist").style.display = "none";
                            _this.btnDis = false;
                        }
                    });
                };
                ProfileComponent.prototype.setAdjust = function (valueAdjust) {
                    this.adjust = valueAdjust;
                };
                ProfileComponent.prototype.refreshPage = function () {
                    // To Do value to give
                    this.usernameTemp = "";
                    this.fillUser();
                };
                ProfileComponent.prototype.setTempUserName = function (event) {
                    this.selectedBtn = event.srcElement;
                    this.usernameTemp = this.selectedBtn.innerHTML;
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'app-profile',
                        templateUrl: 'app/profile.component.html',
                        styleUrls: ['app/styles/general.css', 'app/styles/profile.component.css'],
                        providers: [serviceUser_1.ServiceUser, serviceTweet_1.ServiceTweet, http_1.HTTP_PROVIDERS]
                    }), 
                    __metadata('design:paramtypes', [serviceUser_1.ServiceUser, serviceTweet_1.ServiceTweet])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map