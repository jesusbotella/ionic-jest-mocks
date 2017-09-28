import {ViewControllerMock} from './view-controller';
import {Observable} from 'rxjs/Observable';

export class NavControllerMock {
    public static instance(): any {
        return {
            'goToRoot': jest.fn(() => Promise.resolve()),
            'initPane': jest.fn(() => 1),
            'root': jest.fn(() => ViewControllerMock.instance()),
            'rootParams': jest.fn(() => {}),
            'pageChanged': jest.fn(() => Promise.resolve()),
            'push': jest.fn(() => Promise.resolve()),
            'insert': jest.fn(() => Promise.resolve()),
            'insertPage': jest.fn(() => Promise.resolve()),
            'pop': jest.fn(() => Promise.resolve()),
            'popTo': jest.fn(() => Promise.resolve()),
            'popToRoot': jest.fn(() => Promise.resolve()),
            'popAll': jest.fn(() => Promise.resolve()),
            'remove': jest.fn(() => Promise.resolve()),
            'removeView': jest.fn(() => Promise.resolve()),
            'setRoot': jest.fn(() => Promise.resolve()),
            'setPages': jest.fn(() => Promise.resolve()),
            'hasChildren': jest.fn(() => true),
            'getActiveChildNav': jest.fn(),
            'registerChildNav': jest.fn(),
            'unregisterChildNav': jest.fn(),
            'destroy': jest.fn(),
            'swipeBackStart': jest.fn(),
            'swipeBackProgress': jest.fn(),
            'swipeBackEnd': jest.fn(),
            'canSwipeBack': jest.fn(() => true),
            'canGoBack': jest.fn(() => true),
            'isTransitioning': jest.fn(() => false),
            'setTransitioning': jest.fn(),
            'getActive': jest.fn(() => ViewControllerMock.instance()),
            'isActive': jest.fn(() => true),
            'getByIndex': jest.fn(() => ViewControllerMock.instance()),
            'getPrevious': jest.fn(() => ViewControllerMock.instance()),
            'first': jest.fn(() => ViewControllerMock.instance()),
            'last': jest.fn(() => ViewControllerMock.instance()),
            'indexOf': jest.fn(() => 0),
            'length': jest.fn(() => 0),
            'getViews': jest.fn(() => []),
            'isSwipeBackEnabled': jest.fn(() => true),
            'dismissPageChangeViews': jest.fn(),
            'setViewPort': jest.fn(),
            'resize': jest.fn(),
            'viewDidEnter': jest.fn(() => Observable.of()),
            'viewDidLeave': jest.fn(() => Observable.of()),
            'viewDidLoad': jest.fn(() => Observable.of()),
            'viewWillEnter': jest.fn(() => Observable.of()),
            'viewWillLeave': jest.fn(() => Observable.of()),
            'viewWillUnload': jest.fn(() => Observable.of())
        };
    }
}
