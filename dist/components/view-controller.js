"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
var nav_params_1 = require("./nav-params");
var nav_controller_1 = require("./nav-controller");
var ViewControllerMock = /** @class */ (function () {
    function ViewControllerMock() {
    }
    ViewControllerMock.instance = function () {
        if (ViewControllerMock.staticInstance == null) {
            var instance = {
                'component': {},
                'instance': {},
                'data': nav_params_1.NavParamsMock.instance(),
                'id': '',
                'willEnter': jest.fn(function () { return rxjs_1.Observable.of(); }),
                'didEnter': jest.fn(function () { return rxjs_1.Observable.of(); }),
                'willLeave': jest.fn(function () { return rxjs_1.Observable.of(); }),
                'didLeave': jest.fn(function () { return rxjs_1.Observable.of(); }),
                'willUnload': jest.fn(function () { return rxjs_1.Observable.of(); }),
                'didUnload': jest.fn(function () { return rxjs_1.Observable.of(); }),
                'dismiss': jest.fn(function () { return Promise.resolve(); }),
                'onDidDismiss': jest.fn(function () { return Promise.resolve(); }),
                'onWillDismiss': jest.fn(function () { return Promise.resolve(); }),
                'enableBack': jest.fn(function () { return true; }),
                'isFirst': jest.fn(function () { return false; }),
                'isLast': jest.fn(function () { return false; }),
                'pageRef': jest.fn(function () { }),
                'getContent': jest.fn(function () { }),
                'contentRef': jest.fn(function () { return Promise.resolve(); }),
                'hasNavbar': jest.fn(function () { return true; }),
                'index': jest.fn(function () { return true; }),
                'subscribe': jest.fn(function () { return rxjs_1.Observable.of({}); }),
                'getNav': jest.fn(function () { return nav_controller_1.NavControllerMock.instance(); }),
                'getIONContent': jest.fn(function () { }),
                'writeReady': jest.fn(),
                'readReady': jest.fn(),
                'setBackButtonText': jest.fn(),
                'showBackButton': jest.fn(),
                '_setHeader': jest.fn(),
                '_setNavbar': jest.fn(),
                '_setNav': jest.fn(),
                '_setInstance': jest.fn(),
                '_setIONContent': jest.fn(),
                '_setContent': jest.fn(),
                '_setContentRef': jest.fn(),
                '_setFooter': jest.fn(),
                '_setIONContentRef': jest.fn()
            };
            instance.writeReady = {
                emit: function () {
                },
                subscribe: function () {
                }
            };
            instance.readReady = {
                emit: function () {
                },
                subscribe: function () {
                }
            };
            ViewControllerMock.staticInstance = instance;
        }
        return ViewControllerMock.staticInstance;
    };
    return ViewControllerMock;
}());
exports.ViewControllerMock = ViewControllerMock;
//# sourceMappingURL=view-controller.js.map