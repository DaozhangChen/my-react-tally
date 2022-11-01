import styled from "styled-components";
import TagSection from "../components/TagSection";
import IconSection from "../components/IconSection";
import NoteSection from "../components/NoteSection";
import InputSection from "../components/InputSection";
import React, {useEffect, useState} from "react";
import {useUpdate} from "../hooks/useUpdate";
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


const TallyPage = () => {
    type Category = '收入' | '支出'
    type Selected = typeof selected
    const {addBill}=useRecords()
    const [selected, setSelected] = useState({
        category: '收入' as Category,
        tagIds: 0,
        tag: {name: '', value: ''},
        amount: '0',
        note: ''
    })
    const onChange = (obj: Partial<Selected>) => {
        console.log(obj)
        console.log(selected)
        setSelected({
            ...selected,
            ...obj,
        })
    }
    // useUpdate(()=>{
    //    console.log('654')
    //     console.log([selected.tagIds])
    // },[selected.tagIds])
    useEffect(()=>{
        console.log('321')
    },[[selected.tagIds]])

    const onSubmit = () => {
        let count
        if (localStorage.getItem('maxId') === null) {
            count = 1
        } else {
            count = Number(localStorage.getItem('maxId'))
        }
        onChange({tagIds: count})  //这里是第一次改变tagId
        ++count
        localStorage.setItem('maxId', JSON.stringify(count))
    }
    return (
        <Wrapper>
            <TagSection value={selected.category}
                        onChange={category => onChange({category})}
            />
            <IconSection value={selected.tag}
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