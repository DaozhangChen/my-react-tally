import styled from "styled-components";
import TagSection from "../components/TagSection";
import IconSection from "../components/IconSection";
import NoteSection from "../components/NoteSection";
import InputSection from "../components/InputSection";
import React, {createContext, useState} from "react";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export const InputNumber = React.createContext({amount:'0' ,
    onChange:(obj:string)=>onChange2({obj})})
type Obj={
  obj:string
}
const onChange2=(obj:Obj)=>{
    console.log(obj)
}

const TallyPage = () => {
    type Category = '收入' | '支出'
    type Selected = typeof selected
    const [selected, setSelected] = useState({
        category: '收入' as Category,
        tagIds: [] as number[],
        amount: '0',
        note: ''
    })
    const onChange = (obj: Partial<Selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    }
    return (
        <Wrapper>
            <TagSection value={selected.category}
                        onChange={category => onChange({category})}
            />
            <IconSection/>
            <NoteSection/>
            <InputNumber.Provider value={
                {amount: selected.amount,
                    onChange: (amount:string) => onChange({amount})}}>
                <InputSection/>
            </InputNumber.Provider>
        </Wrapper>
    )
}

export default TallyPage