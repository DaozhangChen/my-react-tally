import React from "react";
import styled from "styled-components";
import NavButton from "./NavButton";

const Wrapper=styled.div`
  display: flex;
  justify-content: space-around;
`

const BottomNav=()=>{
    return(
        <Wrapper>
            <NavButton text='明细' iconName='tally' to='/detail' />
            <NavButton text='记账' iconName='money' to='/tallyPage' />
        </Wrapper>
    )
}

export default BottomNav