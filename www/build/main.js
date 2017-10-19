webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
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
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.messsageing = messsageing;
        this.viewCtrl = viewCtrl;
        this.messeges = [];
        var user = navParams.get('user');
        this.name = user.name;
        this.email = user.email;
        this.messeges = this.messsageing.getStudentsFromBranch(user.id);
    }
    ChatUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatUserPage');
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
        this.txt.nativeElement.focus();
    };
    ChatUserPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return ChatUserPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* Content */])
], ChatUserPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])('txt'),
    __metadata("design:type", Object)
], ChatUserPage.prototype, "txt", void 0);
ChatUserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-chat-user',template:/*ion-inline-start:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/pages/chat-user/chat-user.html"*/'<!--\n  Generated template for the ChatUserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content class="pt-page-scaleUp">\n  <div>\n    <div (click)="close()" class="close"></div>\n    <div class="user_section ">\n      <div class="user_section1">\n        <div class="user_image">\n          <img src="assets/avata/avata.jpg">\n        </div>\n        <div class="user_details">\n          <span>{{name}}</span>\n          <br/>\n          <span>{{email}}</span>\n        </div>\n      </div>\n    </div>\n    <div class="messaging">\n      <ion-list>\n        <ion-item style="padding-left: 0px;" *ngFor="let messege of messeges">\n          <div [ngClass]="{\'right\': (messege.type == \'right\'), \'left\':(messege.type == \'left\')}" class="message">\n            <img src="assets/avata/avata.jpg" />\n            <div class="bubble">\n              <p>{{messege.message}}</p>\n              <div class="corner"></div>\n              <span>{{messege.timestamp | date}}</span>\n            </div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class="sendmessage">\n      <input #txt [(ngModel)]="textMessage" style="width: 90%; height: 100%;" type="text" placeholder="Send message..." value="" />\n      <button (click)="sendMessage()" class="send"></button>\n    </div>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/pages/chat-user/chat-user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* ViewController */]])
], ChatUserPage);

//# sourceMappingURL=chat-user.js.map

/***/ }),

/***/ 151:
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
webpackEmptyAsyncContext.id = 151;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__chat_user_chat_user__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_message__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(24);
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/pages/chat/chat.html"*/'<!--\n  Generated template for the ChatPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar *ngIf="!(type == \'chat\')">\n    <ion-title>chat</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div id="topmenu">\n    <span (click)="clickTab(\'friends\')" [ngClass]="{\'active\':(type == \'friends\')}" class="friends"></span>\n    <!-- <span (click)="clickTab(\'chat\')" [ngClass]="{\'active\':(type == \'chat\')}" class="chats"></span> -->\n    <span (click)="clickTab(\'history\')" [ngClass]="{\'active\':(type == \'history\')}" class="history"></span>\n  </div>\n\n  <div class="show-friends" *ngIf="type == \'friends\'">\n    <ion-list *ngFor="let friend of friends">\n      <ion-item (click)="clickUser(friend)">\n        <ion-avatar item-start>\n          <img src="assets/avata/avata.jpg">\n        </ion-avatar>\n        <h2>{{friend.name}}</h2>\n        <p>{{friend.email}}</p>\n        <div [ngClass]="{\'away\': (friend.status == \'away\'), \'inactive\':(friend.status == \'inactive\')}" class="status"></div>\n      </ion-item>\n    </ion-list>\n  </div>\n\n\n  <div *ngIf="type == \'chat\'">\n    <div (click)="close()" class="close"></div>\n    <div class="user_section">\n      <div class="user_section1">\n        <div class="user_image">\n          <img src="assets/avata/avata.jpg">\n        </div>\n        <div class="user_details">\n          <span>{{name}}</span>\n          <br/>\n          <span>{{email}}</span>\n        </div>\n      </div>\n    </div>\n\n    <div class="messaging">\n      <ion-list>\n        <ion-item *ngFor="let messege of messeges">\n          <div [ngClass]="{\'right\': (messege.type == \'right\'), \'left\':(messege.type == \'left\')}" class="message">\n            <img src="assets/avata/avata.jpg" />\n            <div class="bubble">\n              {{messege.message}}\n              <div class="corner"></div>\n              <span>{{messege.timestamp | date}}</span>\n            </div>\n          </div>\n        </ion-item>\n      </ion-list>\n    </div>\n    <div class="sendmessages">\n      <input style="width: 90%; height: 100%;" type="text" placeholder="Send message..." value="" />\n      <button class="send"></button>\n    </div>\n  </div>\n\n</ion-content>'/*ion-inline-end:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/pages/chat/chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1__providers_message_message__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* ModalController */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(215);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_chat_user_chat_user__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_chat_chat__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_message_message__ = __webpack_require__(55);
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
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_chat_user_chat_user__["a" /* ChatUserPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
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
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_message_message__["a" /* MessageProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_chat_chat__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(192);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(24);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <div id="chatbox">\n    <div id="friendslist">\n      <div id="topmenu">\n        <span class="friends"></span>\n        <span class="chats"></span>\n        <span class="history"></span>\n      </div>\n\n      <div id="friendss">\n        <div class="friend">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />\n          <p>\n            <strong>Miro Badev</strong>\n            <span>mirobadev@gmail.com</span>\n          </p>\n          <div class="status available"></div>\n        </div>\n\n        <div class="friend">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />\n          <p>\n            <strong>Martin Joseph</strong>\n            <span>marjoseph@gmail.com</span>\n          </p>\n          <div class="status away"></div>\n        </div>\n\n        <div class="friend">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/3_copy.jpg" />\n          <p>\n            <strong>Tomas Kennedy</strong>\n            <span>tomaskennedy@gmail.com</span>\n          </p>\n          <div class="status inactive"></div>\n        </div>\n\n        <div class="friend">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/4_copy.jpg" />\n          <p>\n            <strong>Enrique Sutton</strong>\n            <span>enriquesutton@gmail.com</span>\n          </p>\n          <div class="status inactive"></div>\n        </div>\n\n        <div class="friend">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/5_copy.jpg" />\n          <p>\n            <strong> Darnell Strickland</strong>\n            <span>darnellstrickland@gmail.com</span>\n          </p>\n          <div class="status inactive"></div>\n        </div>\n\n        <div id="search">\n          <input type="text" id="searchfield" value="Search contacts..." />\n        </div>\n\n      </div>\n\n    </div>\n\n    <div id="chatview" class="p1">\n      <div id="profile">\n\n        <div id="close">\n          <div class="cy"></div>\n          <div class="cx"></div>\n        </div>\n\n        <p>Miro Badev</p>\n        <span>miro@badev@gmail.com</span>\n      </div>\n      <div id="chat-messages">\n        <label>Thursday 02</label>\n\n        <div class="message">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />\n          <div class="bubble">\n            Really cool stuff!\n            <div class="corner"></div>\n            <span>3 min</span>\n          </div>\n        </div>\n\n        <div class="message right">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />\n          <div class="bubble">\n            Can you share a link for the tutorial?\n            <div class="corner"></div>\n            <span>1 min</span>\n          </div>\n        </div>\n\n        <div class="message">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />\n          <div class="bubble">\n            Yeah, hold on\n            <div class="corner"></div>\n            <span>Now</span>\n          </div>\n        </div>\n\n        <div class="message right">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/2_copy.jpg" />\n          <div class="bubble">\n            Can you share a link for the tutorial?\n            <div class="corner"></div>\n            <span>1 min</span>\n          </div>\n        </div>\n\n        <div class="message">\n          <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/1_copy.jpg" />\n          <div class="bubble">\n            Yeah, hold on\n            <div class="corner"></div>\n            <span>Now</span>\n          </div>\n        </div>\n\n      </div>\n\n      <div id="sendmessage">\n        <input type="text" value="Send message..." />\n        <button id="send"></button>\n      </div>\n\n    </div>\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/samithakahawala/Desktop/my Projects/ChatApp/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(216);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MessageProvider);

//# sourceMappingURL=message.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map