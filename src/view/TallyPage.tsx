import styled from "styled-components";
import TagSection from "../components/TagSection";
import IconSection from "../components/IconSection";
import NoteSection from "../components/NoteSection";
import InputSection from "../components/InputSection";
import React, {useEffect, useRef, useState} from "react";

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
    const [selected, setSelected] = useState({
        category: '收入' as Category,
        tagIds: 0,
        tag: {name: '', value: ''},
        amount: '0',
        note: ''
    })
    const onChange = (obj: Partial<Selected>) => {
        setSelected({
            ...selected,
            ...obj,
        })
    }
    const isFistTime = useRef(true)
    useEffect(() => {
        console.log('执行了')
        if (isFistTime.current) {
            isFistTime.current = false
            return
        }
        const bill = JSON.stringify(selected)
        localStorage.setItem('bills', bill)
    }, [selected.tagIds])

    const onSubmit = () => {
        let tagIds
        if (localStorage.getItem('maxId') === null) {
            tagIds = 1
        } else {
            tagIds = Number(localStorage.getItem('maxId'))
        }
        onChange({tagIds})
        ++tagIds
        const MaxId = JSON.stringify(tagIds)
        localStorage.setItem('maxId', MaxId)
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