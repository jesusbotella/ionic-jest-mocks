import 'jest';

export class ConfigMock {
    public static instance(): any {
        return {
            'get': jest.fn(() => ''),
            'getBoolean': jest.fn(() => true),
            'getNumber': jest.fn(() => 0),
            'set': jest.fn(),
            'settings': jest.fn(),
            'setModeConfig': jest.fn(),
            'getModeConfig': jest.fn(),
            'setTransition': jest.fn(),
            'getTransition': jest.fn()
        };
    }
}
