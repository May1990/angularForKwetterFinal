System.register(['angular2/core', 'angular2/router', "./start.component", "./profile.component", "./header.component"], function(exports_1, context_1) {
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
    var core_1, router_1, start_component_1, profile_component_1, header_component_1;
    var BaseComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (start_component_1_1) {
                start_component_1 = start_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            },
            function (header_component_1_1) {
                header_component_1 = header_component_1_1;
            }],
        execute: function() {
            BaseComponent = (function () {
                function BaseComponent() {
                }
                BaseComponent = __decorate([
                    core_1.Component({
                        selector: 'app-base',
                        templateUrl: 'app/base.component.html',
                        styleUrls: ['app/styles/app.component.css'],
                        directives: [start_component_1.StartComponent, profile_component_1.ProfileComponent, header_component_1.HeaderComponent],
                        providers: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/start',
                            as: 'Start',
                            component: start_component_1.StartComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/profile',
                            as: 'Profile',
                            component: profile_component_1.ProfileComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], BaseComponent);
                return BaseComponent;
            }());
            exports_1("BaseComponent", BaseComponent);
        }
    }
});
//# sourceMappingURL=base.component.js.map