import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";
import styled from "styled-components";
import NavButton from "./NavButton";

const Wrapper=styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid red;
`

const BottomNav=()=>{
    return(
        <Wrapper>
            <NavButton text='明细' iconName='tally' to='/detail' />
            <NavButton text='记账' iconName='money' to='/tallyPage' />
            <NavButton text='图表' iconName='chart' to='/analysis'/>
        </Wrapper>
    )
}

export default BottomNav