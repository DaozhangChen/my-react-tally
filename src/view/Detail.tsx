import BottomNav from "../components/BottomNav";
import React from "react";
import styled from "styled-components";
import Logo from "../components/Logo";

const Wrapper=styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`
const Header=styled.header`
  border: 1px solid red;
`
const TallyList=styled.main`
  flex-grow: 1;
  border: 1px solid blue;
  overflow: auto;
`

const Detail=()=>{
    return(
        <Wrapper>
            <Header>
                <Logo />
            </Header>
            <TallyList >哈</TallyList>
            <BottomNav />
        </Wrapper>
    )
}

export default Detail