import { useCallback, useState } from "react";
import * as option from "fp-ts/Option";
import { pipe } from "fp-ts/pipeable";
export const useToggle = (initialValue: boolean): {state: boolean, toggle: (target?: boolean) => void} => {
    const [state, setState] = useState<boolean>(initialValue);
    const toggle = useCallback(
        (target?: boolean) => {
            pipe(
                option.fromNullable(target),
                option.fold(() => setState(!state), setState)
            );
        },
        [state]
    );
    return {state, toggle};
};
