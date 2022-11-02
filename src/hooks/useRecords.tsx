import {useEffect, useRef, useState} from "react";

export type Records={
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
    const isOnce=useRef(true)
    useEffect(()=>{
        setRecords(JSON.parse(localStorage.getItem('bills')||'[]'))
    },[])
    useEffect(()=>{
        if (isOnce.current){
            isOnce.current=false
            return
        }
        localStorage.setItem('bills',JSON.stringify(records))
    },[records])
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
        setRecords([...records,bill])
        window.confirm('记账成功')
        window.location.reload()
        return true
    }
    return {records,addBill}
}