export class NavParamsMock {
    public static instance(getReturn?: any): any {
        return {
            'get': jest.fn(() => getReturn)
        };
    }
}
