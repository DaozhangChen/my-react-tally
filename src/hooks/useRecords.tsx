import {useEffect, useState} from "react";
import {useUpdate} from "./useUpdate";

type Records={
    category: '收入'|'支出',
    tagIds: number,
    tag: {name: string, value: string},
    amount: string,
    note: string,
    appendAt:string
}
type newRecords=Omit<Records, 'appendAt'>
export const useRecords=()=>{
    const [records,setRecords]=useState<Records[]>([])
    useEffect(()=>{
        setRecords(JSON.parse(localStorage.getItem('bills')||'[]'))
    },[])


    const addBill=(newRecords:newRecords)=>{
        if (newRecords.tag.name===''||newRecords.tag.value===''){
            window.alert('请选择标签')
            return false
         }
        if (newRecords.amount==='0'){
            window.alert('请输入金额')
            return false;
        }
        const bill={...newRecords,appendAt:new Date().toISOString()}
        console.log(bill)
        setRecords([...records,bill])
        return true
    }
    return {records,addBill}
}