import styled from "styled-components";
import InputPad from "./InputPad";

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
    return(
        <Wrapper>
            <Screen>654</Screen>
            <InputPad />
        </Wrapper>
    )
}
export default Calculator