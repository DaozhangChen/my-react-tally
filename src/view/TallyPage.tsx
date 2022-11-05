import styled from "styled-components";
import TagSection from "../components/TagSection";
import IconSection from "../components/IconSection";
import NoteSection from "../components/NoteSection";
import InputSection from "../components/InputSection";
import React, {useEffect, useRef, useState} from "react";
import {useRecords} from "../hooks/useRecords";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

type Obj = { obj: string }
const onChange2 = (_obj: Obj) => {
    return
}
const onSubmit2 = () => {
    return
}
export const InputNumber = React.createContext({
    amount: '0',
    onChange: (obj: string) => onChange2({obj}),
    onSubmit: onSubmit2
})

type Category = '收入' | '支出'
export const initData={
    category: '收入' as Category,
    tagIds: 0,
    tag: {name: '', value: ''},
    amount: '0',
    note: ''
}

const TallyPage = () => {

    type Selected = typeof selected
    const {addBill}=useRecords()
    const [selected, setSelected] = useState(initData)
    const onChange = (obj: Partial<Selected>) => {
        setSelected(()=>({
            ...selected,
            ...obj,
        }))
    }
    const isOnce=useRef(true)
    useEffect(()=>{
        if (isOnce.current){
            isOnce.current=false
            return
        }
        if (selected.tagIds===0){ //防止重置时再次提交
            return;
        }
        addBill(selected)

    },[selected.tagIds])


    const onSubmit = () => {
        let maxId
        if (localStorage.getItem('maxId') === null) {
            maxId = 1
        } else {
            maxId = Number(localStorage.getItem('maxId'))
        }
        onChange({tagIds: maxId})
        ++maxId
        localStorage.setItem('maxId', JSON.stringify(maxId))
    }
    return (
        <Wrapper>
            <TagSection value={selected.category}
                        onChange={category => onChange({category})}
            />
            <IconSection value={selected.tag}
                         category={selected.category}
                         onChange={tag => onChange({tag})}
            />
            <NoteSection value={selected.note}
                         onChange={note => onChange({note})}
            />
            <InputNumber.Provider value={
                {
                    amount: selected.amount,
                    onChange: (amount: string) => onChange({amount}),
                    onSubmit: onSubmit
                }}>
                <InputSection/>
            </InputNumber.Provider>
        </Wrapper>
    )
}

export default TallyPage