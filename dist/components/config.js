"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var ConfigMock = /** @class */ (function () {
    function ConfigMock() {
    }
    ConfigMock.instance = function () {
        return {
            'get': jest.fn(function () { return ''; }),
            'getBoolean': jest.fn(function () { return true; }),
            'getNumber': jest.fn(function () { return 0; }),
            'set': jest.fn(),
            'settings': jest.fn(),
            'setModeConfig': jest.fn(),
            'getModeConfig': jest.fn(),
            'setTransition': jest.fn(),
            'getTransition': jest.fn()
        };
    };
    return ConfigMock;
}());
exports.ConfigMock = ConfigMock;
//# sourceMappingURL=config.js.map