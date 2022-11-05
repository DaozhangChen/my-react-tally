import Calculator from "./Calculator";
import styled from "styled-components";
const CalculatorWrapper=styled.div`
  flex-grow: 1;
  max-height: 230px;
`
const InputSection=()=>{
    return(
        <CalculatorWrapper>
            <Calculator />
        </CalculatorWrapper>
    )
}
export default InputSection