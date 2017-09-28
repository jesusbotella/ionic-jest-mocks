export class LoadingMock {
    public static instance(): any {
        let instance = {
            'present': jest.fn(() => Promise.resolve()),
            'dismiss': jest.fn(),
            'setContent': jest.fn(),
            'setSpinner': jest.fn()
        };

        return instance;
    }
}
