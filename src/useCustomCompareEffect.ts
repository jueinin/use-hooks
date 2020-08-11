import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export function useCustomCompareEffect(callback: EffectCallback,deps?: DependencyList,compareFn?: (a: DependencyList, b: DependencyList) => boolean) {
    const previousDeps = useRef<any[]>(null);
    // previousDeps.current=[]
    // useEffect(()=> {
    //     if (previousDeps.current === null) {
    //         previousDeps.current = deps;
    //     }
    // })
}