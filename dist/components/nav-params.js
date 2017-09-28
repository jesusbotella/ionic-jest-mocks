"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NavParamsMock = /** @class */ (function () {
    function NavParamsMock() {
    }
    NavParamsMock.instance = function (getReturn) {
        return {
            'get': jest.fn(function () { return getReturn; })
        };
    };
    return NavParamsMock;
}());
exports.NavParamsMock = NavParamsMock;
//# sourceMappingURL=nav-params.js.map