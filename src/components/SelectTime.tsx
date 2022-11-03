import React from "react";
type Props={
    name:string,
    value:number,
    onChange:(e: React.ChangeEvent<HTMLSelectElement>)=>void,
    array:number[]
}
const SelectTime=(props:Props)=>{
    return(
        <select name={props.name}
                className={props.name}
                value={props.value}
                onChange={props.onChange}>
            {
                props.array.map(item =>
                    <option key={item}
                            value={item}
                    >
                        {item}{props.name==='selectYear'?'年':'月'}
                    </option>
                )
            }
        </select>
    )
}
export default  SelectTime