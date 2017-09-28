export class PlatformMock {
    public static instance(): any {

        let instance = {
            'dir': jest.fn(),
            'getQueryParam': jest.fn(),
            'height': jest.fn(),
            'is': jest.fn(),
            'isLandscape': jest.fn(),
            'isPortrait': jest.fn(),
            'isRTL': jest.fn(),
            'lang': jest.fn(),
            'pause': jest.fn(),
            'platforms': jest.fn(),
            'ready': jest.fn(),
            'registerBackButtonAction': jest.fn(),
            'resize': jest.fn(),
            'resume': jest.fn(),
            'setDir': jest.fn(),
            'setLang': jest.fn(),
            'testUserAgent': jest.fn(),
            'url': jest.fn(),
            'version': jest.fn(),
            'width': jest.fn(),
            'doc': jest.fn(),
            'registerListener': jest.fn(),
            'win': jest.fn(),
            'getActiveElement': jest.fn(),
            'raf': jest.fn(),
            'hasFocus': jest.fn(),
            'getElementComputedStyle': jest.fn(),
            'timeout': jest.fn()
        };

        // instance.dir.and.returnValue('');
        // instance.getQueryParam.and.returnValue('');
        // instance.height.and.returnValue(0);
        // instance.is.and.returnValue(true);
        // instance.isLandscape.and.returnValue(false);
        // instance.isRTL.and.returnValue(true);
        // instance.lang.and.returnValue('en');
        // instance.platforms.and.returnValue([]);
        // instance.ready.and.returnValue(Promise.resolve());
        // instance.registerBackButtonAction.and.returnValue(() => {});
        // instance.registerListener.and.returnValue(() => {});
        // instance.url.and.returnValue('');
        // instance.version.and.returnValue([]);
        // instance.width.and.returnValue(0);
        // instance.doc.and.returnValue(document);
        // instance.win.and.returnValue(window);
        // instance.getActiveElement.and.returnValue(document['activeElement']);
        // instance.raf.and.returnValue(1);
        // instance.hasFocus.and.returnValue(true);
        // instance.getElementComputedStyle.and.returnValue({
        //     paddingLeft: '10',
        //     paddingTop: '10',
        //     paddingRight: '10',
        //     paddingBottom: '10'
        // });
        // instance.timeout.and.returnValue((callback: any, timer: number) => setTimeout(callback, timer));
        return instance;
    }
}
