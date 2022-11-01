import styled from "styled-components";
import InputPad from "./InputPad";
import {useContext} from "react";
import {InputNumber} from "../view/TallyPage";

const Wrapper=styled.div`
    height: 100%;
  display: flex;
  flex-direction: column;
`
const Screen=styled.div`
    height: 40px;
  text-align: right;
  line-height: 40px;
  font-size: 25px;
  padding: 0 15px;
`

const Calculator=()=>{
    const {amount}=useContext(InputNumber)
    return(
        <Wrapper>
            <Screen>{amount}</Screen>
            <InputPad />
        </Wrapper>
    )
}
export default Calculator