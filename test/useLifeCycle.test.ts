import { renderHook } from "@testing-library/react-hooks";
import { useLifeCycle } from "../src/useLifeCycle";

describe("useLifeCycle",()=> {
    it("should call mount and unmount", function() {
        const mount = jest.fn();
        const unmount = jest.fn();
        const {unmount:unmountCall} = renderHook(() => useLifeCycle(mount, unmount));
        expect(mount.mock.calls.length).toEqual(1);
        expect(unmount.mock.calls.length).toEqual(0)
        unmountCall();
        expect(unmount.mock.calls.length).toEqual(1)
        expect(mount.mock.calls.length).toEqual(1);
    });
})