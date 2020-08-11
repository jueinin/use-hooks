import {useEffect, useRef} from "react";

export function useEffectOnce(effect: () => void | (() => void)):void {
    return useEffect(effect, []);
}
