import styled from "styled-components";
import Icon from "./Icon";
import BalanceSheet from "./BalanceSheet";
import { Selected} from "../view/Detail";
import {Records} from "../hooks/useRecords";


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
type Props={
    selected:Selected
    setSelected:(obj:Selected)=>void
    bills:Records[]
}
const LogoAndSheet=(props:Props)=>{
    return(
        <Wrapper>
            <Icon name='grapes'/>
            <h1>青提记账</h1>
            <BalanceSheet
                selected={props.selected}
                setSelected={props.setSelected}
                bills={props.bills}
            />
        </Wrapper>
    )
}

export default LogoAndSheet