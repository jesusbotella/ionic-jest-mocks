"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loading_1 = require("./loading");
var LoadingControllerMock = /** @class */ (function () {
    function LoadingControllerMock() {
    }
    LoadingControllerMock.instance = function (loading) {
        return {
            'create': jest.fn().mockImplementation(function () { return loading || loading_1.LoadingMock.instance(); })
        };
    };
    return LoadingControllerMock;
}());
exports.LoadingControllerMock = LoadingControllerMock;
//# sourceMappingURL=loading-controller.js.map