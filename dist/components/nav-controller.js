"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var view_controller_1 = require("./view-controller");
var Observable_1 = require("rxjs/Observable");
var NavControllerMock = /** @class */ (function () {
    function NavControllerMock() {
    }
    NavControllerMock.instance = function () {
        return {
            'goToRoot': jest.fn(function () { return Promise.resolve(); }),
            'initPane': jest.fn(function () { return 1; }),
            'root': jest.fn(function () { return view_controller_1.ViewControllerMock.instance(); }),
            'rootParams': jest.fn(function () { }),
            'pageChanged': jest.fn(function () { return Promise.resolve(); }),
            'push': jest.fn(function () { return Promise.resolve(); }),
            'insert': jest.fn(function () { return Promise.resolve(); }),
            'insertPage': jest.fn(function () { return Promise.resolve(); }),
            'pop': jest.fn(function () { return Promise.resolve(); }),
            'popTo': jest.fn(function () { return Promise.resolve(); }),
            'popToRoot': jest.fn(function () { return Promise.resolve(); }),
            'popAll': jest.fn(function () { return Promise.resolve(); }),
            'remove': jest.fn(function () { return Promise.resolve(); }),
            'removeView': jest.fn(function () { return Promise.resolve(); }),
            'setRoot': jest.fn(function () { return Promise.resolve(); }),
            'setPages': jest.fn(function () { return Promise.resolve(); }),
            'hasChildren': jest.fn(function () { return true; }),
            'getActiveChildNav': jest.fn(),
            'registerChildNav': jest.fn(),
            'unregisterChildNav': jest.fn(),
            'destroy': jest.fn(),
            'swipeBackStart': jest.fn(),
            'swipeBackProgress': jest.fn(),
            'swipeBackEnd': jest.fn(),
            'canSwipeBack': jest.fn(function () { return true; }),
            'canGoBack': jest.fn(function () { return true; }),
            'isTransitioning': jest.fn(function () { return false; }),
            'setTransitioning': jest.fn(),
            'getActive': jest.fn(function () { return view_controller_1.ViewControllerMock.instance(); }),
            'isActive': jest.fn(function () { return true; }),
            'getByIndex': jest.fn(function () { return view_controller_1.ViewControllerMock.instance(); }),
            'getPrevious': jest.fn(function () { return view_controller_1.ViewControllerMock.instance(); }),
            'first': jest.fn(function () { return view_controller_1.ViewControllerMock.instance(); }),
            'last': jest.fn(function () { return view_controller_1.ViewControllerMock.instance(); }),
            'indexOf': jest.fn(function () { return 0; }),
            'length': jest.fn(function () { return 0; }),
            'getViews': jest.fn(function () { return []; }),
            'isSwipeBackEnabled': jest.fn(function () { return true; }),
            'dismissPageChangeViews': jest.fn(),
            'setViewPort': jest.fn(),
            'resize': jest.fn(),
            'viewDidEnter': jest.fn(function () { return Observable_1.Observable.of(); }),
            'viewDidLeave': jest.fn(function () { return Observable_1.Observable.of(); }),
            'viewDidLoad': jest.fn(function () { return Observable_1.Observable.of(); }),
            'viewWillEnter': jest.fn(function () { return Observable_1.Observable.of(); }),
            'viewWillLeave': jest.fn(function () { return Observable_1.Observable.of(); }),
            'viewWillUnload': jest.fn(function () { return Observable_1.Observable.of(); })
        };
    };
    return NavControllerMock;
}());
exports.NavControllerMock = NavControllerMock;
//# sourceMappingURL=nav-controller.js.map