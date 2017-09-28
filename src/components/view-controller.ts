import {Observable}           from 'rxjs';
import {NavParamsMock}        from './nav-params';
import {NavControllerMock}    from './nav-controller';

export class ViewControllerMock {
    private static staticInstance: null;

    public static instance(): any {
        if (ViewControllerMock.staticInstance == null) {
            let instance: any = {
                'component': {},
                'instance': {},
                'data': NavParamsMock.instance(),
                'id': '',
                'willEnter': jest.fn(() => Observable.of()),
                'didEnter': jest.fn(() => Observable.of()),
                'willLeave': jest.fn(() => Observable.of()),
                'didLeave': jest.fn(() => Observable.of()),
                'willUnload': jest.fn(() => Observable.of()),
                'didUnload': jest.fn(() => Observable.of()),
                'dismiss': jest.fn(() => Promise.resolve()),
                'onDidDismiss': jest.fn(() => Promise.resolve()),
                'onWillDismiss': jest.fn(() => Promise.resolve()),
                'enableBack': jest.fn(() => true),
                'isFirst': jest.fn(() => false),
                'isLast': jest.fn(() => false),
                'pageRef': jest.fn(() => {}),
                'getContent': jest.fn(() => {}),
                'contentRef': jest.fn(() => Promise.resolve()),
                'hasNavbar': jest.fn(() => true),
                'index': jest.fn(() => true),
                'subscribe': jest.fn(() => Observable.of({})),
                'getNav': jest.fn(() => NavControllerMock.instance()),
                'getIONContent': jest.fn(() => {}),
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
                emit(): void {

                },
                subscribe(): any {

                }
            };

            instance.readReady = {
                emit(): void {

                },
                subscribe(): any {

                }
            };

            ViewControllerMock.staticInstance = instance;
        }

        return ViewControllerMock.staticInstance;
    }
}
