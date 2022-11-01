import {useEffect, useRef} from "react";

export const useUpdate = (fn: () => void, dependency: any) => {
    console.log(dependency)
    const count = useRef(true);
    useEffect(() => {
        if (count.current) {
            count.current=false
        }else{
            fn();
        }
    }, [fn, dependency]); // 不可变数据
};
