import { renderHook } from "@testing-library/react-hooks";
import {useEffectOnce} from "../src/useEffectOnce";

describe('useEffectOnce',()=> {
    it('should use effect only once', function () {
        const returnFn = jest.fn();
        const fn = jest.fn().mockReturnValue(() => returnFn);
        const {result,unmount} = renderHook(() => useEffectOnce(fn));
        expect(fn.mock.calls.length == 1);
        expect(returnFn.mock.calls.length === 0);
        unmount()
        expect(returnFn.mock.calls.length === 1);
        expect(fn.mock.calls.length == 1);
    });
})