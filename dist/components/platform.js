"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PlatformMock = (function () {
    function PlatformMock() {
    }
    PlatformMock.instance = function () {
        var instance = {
            'dir': jest.fn().mockReturnValue(''),
            'getQueryParam': jest.fn().mockReturnValue(''),
            'height': jest.fn().mockReturnValue(0),
            'is': jest.fn().mockReturnValue(true),
            'isLandscape': jest.fn().mockReturnValue(false),
            'isPortrait': jest.fn().mockReturnValue(true),
            'isRTL': jest.fn(),
            'lang': jest.fn().mockReturnValue('en'),
            'pause': jest.fn(),
            'platforms': jest.fn().mockReturnValue([]),
            'ready': jest.fn().mockReturnValue(Promise.resolve()),
            'registerBackButtonAction': jest.fn().mockReturnValue(function() {}),
            'resize': jest.fn(),
            'resume': jest.fn(),
            'setDir': jest.fn(),
            'setLang': jest.fn(),
            'testUserAgent': jest.fn(),
            'url': jest.fn().mockReturnValue(''),
            'version': jest.fn().mockReturnValue([]),
            'width': jest.fn().mockReturnValue(0),
            'doc': jest.fn().mockReturnValue(document),
            'registerListener': jest.fn().mockReturnValue(function() {}),
            'win': jest.fn().mockReturnValue(window),
            'getActiveElement': jest.fn().mockReturnValue(document['activeElement']),
            'raf': jest.fn().mockReturnValue(1),
            'hasFocus': jest.fn().mockReturnValue(true),
            'getElementComputedStyle': jest.fn().mockReturnValue({
                paddingLeft: '10',
                paddingTop: '10',
                paddingRight: '10',
                paddingBottom: '10'
            }),
            'timeout': jest.fn().mockReturnValue(function (callback, timer) { return setTimeout(callback, timer); })
        };

        return instance;
    };
    return PlatformMock;
}());
exports.PlatformMock = PlatformMock;
//# sourceMappingURL=platform.js.map
