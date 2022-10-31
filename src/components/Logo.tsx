import styled from "styled-components";
import Icon from "./Icon";
import BalanceSheet from "./BalanceSheet";


const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .icon{
    height: 40px;
    width: 40px;
    fill: palegreen;
    margin: 10px 0;
  }
  h1{
    font-size: 28px;
  }
`

const Logo=()=>{
    return(
        <Wrapper>
            <Icon name='grapes'/>
            <h1>青提记账</h1>
            <BalanceSheet />
        </Wrapper>
    )
}

export default Logo