"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoadingMock = /** @class */ (function () {
    function LoadingMock() {
    }
    LoadingMock.instance = function () {
        var instance = {
            'present': jest.fn(function () { return Promise.resolve(); }),
            'dismiss': jest.fn(),
            'setContent': jest.fn(),
            'setSpinner': jest.fn()
        };
        return instance;
    };
    return LoadingMock;
}());
exports.LoadingMock = LoadingMock;
//# sourceMappingURL=loading.js.map