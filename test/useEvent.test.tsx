import React, { useEffect } from "react";
import {useEvent} from "../src/useEvent";
import {render} from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";

describe("useEvent",()=> {
    it("test", function() {
        const fn = jest.fn();
        let getTarget = jest.fn().mockImplementation(() => document.getElementById("root"));
        function Test() {
            useEvent("click", fn, getTarget);
            return <div id={"root"}>

            </div>
        }
        const {rerender} = render(<Test/>);
        fireEvent(document.getElementById("root")!, new MouseEvent("click"));
        expect(fn.mock.calls.length).toEqual(1)
        fireEvent(document.getElementById("root")!, new MouseEvent("click"));
        expect(fn.mock.calls.length).toEqual(2);
        expect(getTarget.mock.calls.length).toEqual(1);
    });
});