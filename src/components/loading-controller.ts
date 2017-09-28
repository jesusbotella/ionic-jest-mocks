import { LoadingMock } from './loading';

export class LoadingControllerMock {
    public static instance(loading?: LoadingMock): any {
        return {
            'create': jest.fn().mockImplementation(() => loading || LoadingMock.instance())
        };
    }
}
