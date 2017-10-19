webpackJsonp([0],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ChatUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatUserPage = (function () {
    function ChatUserPage(navCtrl, navParams, messsageing, viewCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messsageing = messsageing;
        this.viewCtrl = viewCtrl;
        this.messeges = [];
        this.fieldOnfocus = false;
        var user = navParams.get('user');
        this.name = user.name;
        this.email = user.email;
        this.messeges = this.messsageing.getStudentsFromBranch(user.id);
        setTimeout(function () {
            try {
                _this.content.scrollToBottom();
            }
            catch (error) {
                console.log('catch an error ', error);
            }
        }, 100);
    }
    ChatUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatUserPage');
    };
    ChatUserPage.prototype.onfocus = function () {
        console.log("div the field");
        this.fieldOnfocus = false;
    };
    ChatUserPage.prototype.onfocusinput = function () {
        console.log("input the field");
        this.fieldOnfocus = true;
    };
    ChatUserPage.prototype.updateList = function (event) {
        if (event.key === 'Enter' && event.srcElement) {
            this.sendMessage();
        }
    };
    ChatUserPage.prototype.sendMessage = function () {
        var _this = this;
        this.messeges.push({
            message: this.textMessage,
            type: "right",
            timestamp: new Date().getTime()
        });
        this.textMessage = "";
        setTimeout(function () {
            try {
                _this.content.scrollToBottom();
            }
            catch (error) {
                console.log('catch an error ', error);
            }
        }, 100);
        console.log(this.fieldOnfocus);
        if (this.fieldOnfocus) {
            this.txt.nativeElement.focus();
        }
    };
    ChatUserPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return ChatUserPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Content */])
], ChatUserPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('txt'),
    __metadata("design:type", Object)
], ChatUserPage.prototype, "txt", void 0);
ChatUserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'page-chat-user',template:/*ion-inline-start:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/pages/chat-user/chat-user.html"*/'<!--\n  Generated template for the ChatUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="pt-page-scaleUp">\n  <div>\n    <div (click)="close()" class="close"></div>\n    <div class="user_section ">\n      <div class="user_section1">\n        <div class="user_image">\n          <img src="assets/avata/avata.jpg">\n        </div>\n        <div class="user_details">\n          <span>{{name}}</span>\n          <br/>\n          <span>{{email}}</span>\n        </div>\n      </div>\n    </div>\n    <div class="messaging">\n      <ion-list (click)="onfocus()">\n        <ion-item style="padding-left: 0px;" *ngFor="let messege of messeges">\n          <div [ngClass]="{\'right\': (messege.type == \'right\'), \'left\':(messege.type == \'left\')}" class="message">\n            <img src="assets/avata/avata.jpg" />\n            <div class="bubble">\n              <p>{{messege.message}}</p>\n              <div class="corner"></div>\n              <span>{{messege.timestamp | amTimeAgo}}</span>\n            </div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </div>\n\n    <div class="sendmessage">\n      <input (focus)="onfocusinput()" #txt (keyup)="updateList($event)" [(ngModel)]="textMessage" style="width: 85%; height: 100%; padding-left: 5px;" type="text" placeholder="Send message..."\n        value="" />\n      <button (click)="sendMessage()" [disabled]="!(textMessage)" class="send"></button>\n    </div>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/pages/chat-user/chat-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ViewController */]])
], ChatUserPage);

//# sourceMappingURL=chat-user.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_user_chat_user__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_message__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, messsageing, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messsageing = messsageing;
        this.modalCtrl = modalCtrl;
        this.type = 'friends';
        this.name = "";
        this.email = "";
        this.friends = [];
        this.messeges = [];
        this.friends = this.messsageing.friends;
    }
    ChatPage.prototype.clickTab = function (event) {
        this.type = event;
    };
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    ChatPage.prototype.close = function () {
        this.type = "friends";
    };
    ChatPage.prototype.clickUser = function (user) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__chat_user_chat_user__["a" /* ChatUserPage */], { user: user });
        profileModal.present();
    };
    return ChatPage;
}());
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'page-chat',template:/*ion-inline-start:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar *ngIf="!(type == \'chat\')">\n    <ion-title>chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div id="topmenu">\n    <span (click)="clickTab(\'friends\')" [ngClass]="{\'active\':(type == \'friends\')}" class="friends"></span>\n    <!-- <span (click)="clickTab(\'chat\')" [ngClass]="{\'active\':(type == \'chat\')}" class="chats"></span> -->\n    <span (click)="clickTab(\'history\')" [ngClass]="{\'active\':(type == \'history\')}" class="history"></span>\n  </div>\n\n  <div class="show-friends" *ngIf="type == \'friends\'">\n    <ion-list *ngFor="let friend of friends">\n      <ion-item (click)="clickUser(friend)">\n        <ion-avatar item-start>\n          <img src="assets/avata/avata.jpg">\n        </ion-avatar>\n        <h2>{{friend.name}}</h2>\n        <p>{{friend.email}}</p>\n        <div [ngClass]="{\'away\': (friend.status == \'away\'), \'inactive\':(friend.status == \'inactive\')}" class="status"></div>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n  <div *ngIf="type == \'chat\'">\n    <div (click)="close()" class="close"></div>\n    <div class="user_section">\n      <div class="user_section1">\n        <div class="user_image">\n          <img src="assets/avata/avata.jpg">\n        </div>\n        <div class="user_details">\n          <span>{{name}}</span>\n          <br/>\n          <span>{{email}}</span>\n        </div>\n      </div>\n    </div>\n\n    <div class="messaging">\n      <ion-list>\n        <ion-item *ngFor="let messege of messeges">\n          <div [ngClass]="{\'right\': (messege.type == \'right\'), \'left\':(messege.type == \'left\')}" class="message">\n            <img src="assets/avata/avata.jpg" />\n            <div class="bubble">\n              {{messege.message}}\n              <div class="corner"></div>\n              <span>{{messege.timestamp | date}}</span>\n            </div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class="sendmessages">\n      <input style="width: 90%; height: 100%;" type="text" placeholder="Send message..." value="" />\n      <button class="send"></button>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* ModalController */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(346);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_chat_user_chat_user__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_chat_chat__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_message_message__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_moment__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_chat_user_chat_user__["a" /* ChatUserPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular2_moment__["MomentModule"],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: []
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_chat_user_chat_user__["a" /* ChatUserPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_message_message__["a" /* MessageProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_chat_chat__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_chat_chat__["a" /* ChatPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({template:/*ion-inline-start:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div id="chatbox">\n    <div id="friendslist">\n      <div id="topmenu">\n        <span class="friends"></span>\n        <span class="chats"></span>\n        <span class="history"></span>\n      </div>\n\n      <div id="friendss">\n        <div class="friend">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />\n          <p>\n            <strong>Miro Badev</strong>\n            <span>mirobadev@gmail.com</span>\n          </p>\n          <div class="status available"></div>\n        </div>\n\n        <div class="friend">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />\n          <p>\n            <strong>Martin Joseph</strong>\n            <span>marjoseph@gmail.com</span>\n          </p>\n          <div class="status away"></div>\n        </div>\n\n        <div class="friend">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3_copy.jpg" />\n          <p>\n            <strong>Tomas Kennedy</strong>\n            <span>tomaskennedy@gmail.com</span>\n          </p>\n          <div class="status inactive"></div>\n        </div>\n\n        <div class="friend">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg" />\n          <p>\n            <strong>Enrique Sutton</strong>\n            <span>enriquesutton@gmail.com</span>\n          </p>\n          <div class="status inactive"></div>\n        </div>\n\n        <div class="friend">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg" />\n          <p>\n            <strong> Darnell Strickland</strong>\n            <span>darnellstrickland@gmail.com</span>\n          </p>\n          <div class="status inactive"></div>\n        </div>\n\n        <div id="search">\n          <input type="text" id="searchfield" value="Search contacts..." />\n        </div>\n\n      </div>\n\n    </div>\n\n    <div id="chatview" class="p1">\n      <div id="profile">\n\n        <div id="close">\n          <div class="cy"></div>\n          <div class="cx"></div>\n        </div>\n\n        <p>Miro Badev</p>\n        <span>miro@badev@gmail.com</span>\n      </div>\n      <div id="chat-messages">\n        <label>Thursday 02</label>\n\n        <div class="message">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />\n          <div class="bubble">\n            Really cool stuff!\n            <div class="corner"></div>\n            <span>3 min</span>\n          </div>\n        </div>\n\n        <div class="message right">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />\n          <div class="bubble">\n            Can you share a link for the tutorial?\n            <div class="corner"></div>\n            <span>1 min</span>\n          </div>\n        </div>\n\n        <div class="message">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />\n          <div class="bubble">\n            Yeah, hold on\n            <div class="corner"></div>\n            <span>Now</span>\n          </div>\n        </div>\n\n        <div class="message right">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />\n          <div class="bubble">\n            Can you share a link for the tutorial?\n            <div class="corner"></div>\n            <span>1 min</span>\n          </div>\n        </div>\n\n        <div class="message">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />\n          <div class="bubble">\n            Yeah, hold on\n            <div class="corner"></div>\n            <span>Now</span>\n          </div>\n        </div>\n\n      </div>\n\n      <div id="sendmessage">\n        <input type="text" value="Send message..." />\n        <button id="send"></button>\n      </div>\n\n    </div>\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 198,
	"./af.js": 198,
	"./ar": 199,
	"./ar-dz": 200,
	"./ar-dz.js": 200,
	"./ar-kw": 201,
	"./ar-kw.js": 201,
	"./ar-ly": 202,
	"./ar-ly.js": 202,
	"./ar-ma": 203,
	"./ar-ma.js": 203,
	"./ar-sa": 204,
	"./ar-sa.js": 204,
	"./ar-tn": 205,
	"./ar-tn.js": 205,
	"./ar.js": 199,
	"./az": 206,
	"./az.js": 206,
	"./be": 207,
	"./be.js": 207,
	"./bg": 208,
	"./bg.js": 208,
	"./bm": 209,
	"./bm.js": 209,
	"./bn": 210,
	"./bn.js": 210,
	"./bo": 211,
	"./bo.js": 211,
	"./br": 212,
	"./br.js": 212,
	"./bs": 213,
	"./bs.js": 213,
	"./ca": 214,
	"./ca.js": 214,
	"./cs": 215,
	"./cs.js": 215,
	"./cv": 216,
	"./cv.js": 216,
	"./cy": 217,
	"./cy.js": 217,
	"./da": 218,
	"./da.js": 218,
	"./de": 219,
	"./de-at": 220,
	"./de-at.js": 220,
	"./de-ch": 221,
	"./de-ch.js": 221,
	"./de.js": 219,
	"./dv": 222,
	"./dv.js": 222,
	"./el": 223,
	"./el.js": 223,
	"./en-au": 224,
	"./en-au.js": 224,
	"./en-ca": 225,
	"./en-ca.js": 225,
	"./en-gb": 226,
	"./en-gb.js": 226,
	"./en-ie": 227,
	"./en-ie.js": 227,
	"./en-nz": 228,
	"./en-nz.js": 228,
	"./eo": 229,
	"./eo.js": 229,
	"./es": 230,
	"./es-do": 231,
	"./es-do.js": 231,
	"./es-us": 232,
	"./es-us.js": 232,
	"./es.js": 230,
	"./et": 233,
	"./et.js": 233,
	"./eu": 234,
	"./eu.js": 234,
	"./fa": 235,
	"./fa.js": 235,
	"./fi": 236,
	"./fi.js": 236,
	"./fo": 237,
	"./fo.js": 237,
	"./fr": 238,
	"./fr-ca": 239,
	"./fr-ca.js": 239,
	"./fr-ch": 240,
	"./fr-ch.js": 240,
	"./fr.js": 238,
	"./fy": 241,
	"./fy.js": 241,
	"./gd": 242,
	"./gd.js": 242,
	"./gl": 243,
	"./gl.js": 243,
	"./gom-latn": 244,
	"./gom-latn.js": 244,
	"./gu": 245,
	"./gu.js": 245,
	"./he": 246,
	"./he.js": 246,
	"./hi": 247,
	"./hi.js": 247,
	"./hr": 248,
	"./hr.js": 248,
	"./hu": 249,
	"./hu.js": 249,
	"./hy-am": 250,
	"./hy-am.js": 250,
	"./id": 251,
	"./id.js": 251,
	"./is": 252,
	"./is.js": 252,
	"./it": 253,
	"./it.js": 253,
	"./ja": 254,
	"./ja.js": 254,
	"./jv": 255,
	"./jv.js": 255,
	"./ka": 256,
	"./ka.js": 256,
	"./kk": 257,
	"./kk.js": 257,
	"./km": 258,
	"./km.js": 258,
	"./kn": 259,
	"./kn.js": 259,
	"./ko": 260,
	"./ko.js": 260,
	"./ky": 261,
	"./ky.js": 261,
	"./lb": 262,
	"./lb.js": 262,
	"./lo": 263,
	"./lo.js": 263,
	"./lt": 264,
	"./lt.js": 264,
	"./lv": 265,
	"./lv.js": 265,
	"./me": 266,
	"./me.js": 266,
	"./mi": 267,
	"./mi.js": 267,
	"./mk": 268,
	"./mk.js": 268,
	"./ml": 269,
	"./ml.js": 269,
	"./mr": 270,
	"./mr.js": 270,
	"./ms": 271,
	"./ms-my": 272,
	"./ms-my.js": 272,
	"./ms.js": 271,
	"./my": 273,
	"./my.js": 273,
	"./nb": 274,
	"./nb.js": 274,
	"./ne": 275,
	"./ne.js": 275,
	"./nl": 276,
	"./nl-be": 277,
	"./nl-be.js": 277,
	"./nl.js": 276,
	"./nn": 278,
	"./nn.js": 278,
	"./pa-in": 279,
	"./pa-in.js": 279,
	"./pl": 280,
	"./pl.js": 280,
	"./pt": 281,
	"./pt-br": 282,
	"./pt-br.js": 282,
	"./pt.js": 281,
	"./ro": 283,
	"./ro.js": 283,
	"./ru": 284,
	"./ru.js": 284,
	"./sd": 285,
	"./sd.js": 285,
	"./se": 286,
	"./se.js": 286,
	"./si": 287,
	"./si.js": 287,
	"./sk": 288,
	"./sk.js": 288,
	"./sl": 289,
	"./sl.js": 289,
	"./sq": 290,
	"./sq.js": 290,
	"./sr": 291,
	"./sr-cyrl": 292,
	"./sr-cyrl.js": 292,
	"./sr.js": 291,
	"./ss": 293,
	"./ss.js": 293,
	"./sv": 294,
	"./sv.js": 294,
	"./sw": 295,
	"./sw.js": 295,
	"./ta": 296,
	"./ta.js": 296,
	"./te": 297,
	"./te.js": 297,
	"./tet": 298,
	"./tet.js": 298,
	"./th": 299,
	"./th.js": 299,
	"./tl-ph": 300,
	"./tl-ph.js": 300,
	"./tlh": 301,
	"./tlh.js": 301,
	"./tr": 302,
	"./tr.js": 302,
	"./tzl": 303,
	"./tzl.js": 303,
	"./tzm": 304,
	"./tzm-latn": 305,
	"./tzm-latn.js": 305,
	"./tzm.js": 304,
	"./uk": 306,
	"./uk.js": 306,
	"./ur": 307,
	"./ur.js": 307,
	"./uz": 308,
	"./uz-latn": 309,
	"./uz-latn.js": 309,
	"./uz.js": 308,
	"./vi": 310,
	"./vi.js": 310,
	"./x-pseudo": 311,
	"./x-pseudo.js": 311,
	"./yo": 312,
	"./yo.js": 312,
	"./zh-cn": 313,
	"./zh-cn.js": 313,
	"./zh-hk": 314,
	"./zh-hk.js": 314,
	"./zh-tw": 315,
	"./zh-tw.js": 315
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 399;

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MessageProvider = (function () {
    function MessageProvider() {
        this.friends = [
            {
                id: 1,
                name: "Jon Snow",
                email: "snow@gmail.com",
                status: "available"
            },
            {
                id: 2,
                name: "Tyrion Lannister",
                email: "Tyrion@gmail.com",
                status: "away"
            },
            {
                id: 3,
                name: "Daenerys Targaryen",
                email: "Daenerys@gmail.com",
                status: "available"
            },
            {
                id: 4,
                name: "Arya Stark",
                email: "Arya@gmail.com",
                status: "away"
            }
        ];
        console.log('Hello MessageProvider Provider');
    }
    MessageProvider.prototype.getStudentsFromBranch = function (id) {
        var students = {
            1: [
                {
                    message: "Hi there!",
                    type: "left",
                    timestamp: 1506669284000
                },
                {
                    message: "Hi",
                    type: "right",
                    timestamp: 1506669284000
                },
                {
                    message: "I need your army to defeat the dead",
                    type: "left",
                    timestamp: 1506669284000
                }
            ],
            2: [
                {
                    message: "Hey!",
                    type: "left",
                    timestamp: 1506669284000
                },
                {
                    message: "Hi",
                    type: "right",
                    timestamp: 1506669284000
                }
            ],
            3: [
                {
                    message: "Hi there!",
                    type: "left",
                    timestamp: 1506669284000
                }
            ],
            4: [
                {
                    message: "Hi there! Do you in my list",
                    type: "left",
                    timestamp: 1506669284000
                },
                {
                    message: "Im not sure",
                    type: "right",
                    timestamp: 1506669284000
                }
            ]
        };
        return students[id];
    };
    return MessageProvider;
}());
MessageProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], MessageProvider);

//# sourceMappingURL=message.js.map

/***/ })

},[327]);
//# sourceMappingURL=main.js.map